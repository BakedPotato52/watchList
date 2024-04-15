//Card.jsx
import React from 'react';

export const CardContent = ({ children }) => {
    return (
        <div className="card-content">
            {children}
        </div>
    );
};

export const CardFooter = ({ children }) => {
    return (
        <div className="card-footer">
            {children}
        </div>
    );
};

export const Card = ({ children }) => {
    return (
        <div className="card">
            {children}
        </div>
    );
};

export const CardTitle = ({ children }) => {
    return (
        <h2 className='title is-4'>{children}</h2>
    )
}
export const CardDescription = ({ children }) => {
    return (
        <p className='description is-6'>{children}</p>
    )
}

export const CardHeader = ({ children }) => {
    return (
        <h1 className='header is-1'>{children}</h1>
    )
}
// Exporting the Card component as default

