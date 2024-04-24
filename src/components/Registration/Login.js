import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const notify = () => toast.success("Welcome" + " " + email);
    const notifyFail = () => toast.error("Log in Failed");

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post('http://192.168.43.120:5000/api/login', { email, password });
            console.log(response);
            console.log(response.data);
            // Optionally, you can perform further actions here, such as redirecting the user or displaying a success message
            notify();
            setTimeout(() => navigate(`/`), 4000);
        } catch (error) {
            console.error(error);
            // Handle error scenarios, such as displaying an error message to the user
            notifyFail();
        }
    }

    useEffect(() => {
        return () => clearTimeout();
    }, []);

    return (
        <>
            <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#e6f6ff] px-4 py-12 dark:bg-[#003b4d]">
                <div className="w-full max-w-md space-y-4">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-[#003b4d] dark:text-[#e6f6ff]">
                            Sign in to your account
                        </h2>
                    </div>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-[#003b4d] dark:text-[#e6f6ff]" htmlFor="email">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    autoComplete="Email"
                                    className="block w-full appearance-none rounded-md border border-[#b3d9e6] px-3 py-2 placeholder-[#80b3c2] shadow-sm focus:border-[#00a3d9] focus:outline-none focus:ring-[#00a3d9] dark:border-[#006680] dark:bg-[#003b4d] dark:text-[#e6f6ff] dark:placeholder-[#80b3c2]"
                                    id="email"
                                    name="Email"
                                    required
                                    placeholder="Email..."
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#003b4d] dark:text-[#e6f6ff]" htmlFor="password">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    autoComplete="current-password"
                                    className="block w-full appearance-none rounded-md border border-[#b3d9e6] px-3 py-2 placeholder-[#80b3c2] shadow-sm focus:border-[#00a3d9] focus:outline-none focus:ring-[#00a3d9] dark:border-[#006680] dark:bg-[#003b4d] dark:text-[#e6f6ff] dark:placeholder-[#80b3c2]"
                                    id="password"
                                    name="password"
                                    required
                                    placeholder="Password..."
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 rounded text-[#00a3d9] focus:ring-[#00a3d9] dark:bg-[#006680] dark:ring-offset-[#003b4d]"
                                    id="remember-me"
                                    name="remember-me"
                                />
                                <label className="ml-2 block text-sm text-[#003b4d] dark:text-[#e6f6ff]" htmlFor="remember-me">
                                    Remember me
                                </label>
                            </div>

                        </div>
                        <button
                            className="w-full justify-center rounded-md bg-[#00a3d9] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#00b8f2] focus:outline-none focus:ring-2 focus:ring-[#00a3d9] focus:ring-offset-2 dark:bg-[#00d9ff] dark:hover:bg-[#00b8f2] dark:focus:ring-[#00d9ff]"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Log in
                        </button>
                    </form>
                </div>
                <div className="mt-8">
                    <p className="text-sm text-[#4d4d4d] dark:text-[#80b3c2]">
                        Don't have an account? {' '}
                        <Link
                            className="font-medium text-[#00a3d9] hover:underline dark:text-[#00d9ff]"
                            to={`/Signup`}>
                            Sign up
                        </Link>
                    </p>
                </div>
                <div className="text-sm">
                    <Link
                        className="font-medium text-[#00a3d9] hover:underline dark:text-[#00d9ff] mt-4 inline-block"
                        to={`/Forgetpassword`}
                    >
                        Forgot your password?
                    </Link>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
export default Login