from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from sqlalchemy import create_engine, Column, String
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import declarative_base

# Create the Flask app
app = Flask(__name__)
CORS(app)

#-----------------------------------DataBase Config------------------------------------#
# Configure the database connection
DATABASE_URL = 'sqlite:///signup.db'
engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)
Base = declarative_base()

# Define a User model
class User(Base):
    __tablename__ = 'users'

    email = Column(String, primary_key=True)
    name = Column(String)
    password = Column(String)

# Create the table
Base.metadata.create_all(engine)

#----------------------------------API Routes------------------------------------#
#----------------------------------Sign Up Routes------------------------------------#
@app.route('/api/signup', methods=['POST'])
def signup():
    # Get data from the request body
    data = request.json

    # Extract name, email, and password from the data
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    # Create a new User instance
    new_user = User(name=name, email=email, password=password)

    # Add the new user to the database
    session = Session()
    session.add(new_user)
    session.commit()
    session.close()

    # Return a JSON response
    return jsonify({'message': 'Signup successful'}), 200

#----------------------------------Login Routes------------------------------------#
@app.route('/api/login', methods=['POST'])
@cross_origin()
def login():
    # Your login logic here
    return jsonify({'message': 'Login successful'})

#----------------------------------Reset Password Routes------------------------------------#
@app.route('/api/resetPassword', methods=['POST'])
@cross_origin()
def reset_password():
    # Get data from the request body
    data = request.json

    # Extract email from the data
    email = data.get('email')

    # Check if the user exists
    session = Session()
    user = session.query(User).filter_by(email=email).first()
    session.close()

    if user:
        # Here you would have your logic for resetting the password,
        # for the sake of this example, we just return a success message.
        return jsonify({'message': 'Password reset link sent successfully!'}), 200
    else:
        return jsonify({'error': 'User not found'}), 404

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port='5000')  # Change host to allow access from all network interfaces
