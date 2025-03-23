import { useContext } from "react";
import user_logo from '../Assets/mdi_patient.png'
import login_logo from '../Assets/Login_logo.png'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { userContext } from "../components/contextAPI.jsx";

const Login = () => {

    const { show, setShow, loginFormData, handleChange, handleSubmit } = useContext(userContext);

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 p-5">
            {/* Login Form */ }
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
                {/* Header */ }
                <div className="bg-gray-100 p-3 rounded-md mb-6">
                    <h2 className="text-xl font-bold text-teal-600 flex flex-col items-center">
                        <span className="flex items-center space-x-2"><img src={ user_logo } alt="user logo" />LOGIN</span>
                    </h2>
                </div>

                <p className="text-gray-600 mb-6">
                    Login to access your Patient account
                </p>

                <form onSubmit={ handleSubmit } className="space-y-4">
                    {/* Email Input */ }
                    <div>
                        <label className="block text-gray-700 text-sm mb-1 text-left font-semibold">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                value={ loginFormData.email }
                                onChange={ handleChange }
                                placeholder="Patientemail@gmail.com"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                                required
                            />
                        </div>
                    </div>

                    {/* Password Input */ }
                    <div>
                        <label className="block text-gray-700 text-sm mb-1 text-left font-semibold">Password</label>
                        <div className="relative">
                            <input
                                type={ show ? "text" : "password" }
                                name="password"
                                value={ loginFormData.password }
                                onChange={ handleChange }
                                placeholder="********************"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                                required
                            />
                            <span className="absolute right-3 top-3 text-gray-500" onClick={ () => setShow(prev => !prev) }>
                                { show ? <FaEyeSlash /> : <FaEye /> }
                            </span>
                        </div>
                    </div>

                    {/* Remember Me & Forgot Password */ }
                    <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                checked={ loginFormData.rememberMe }
                                onChange={ handleChange }
                                className="mr-2"
                            />
                            <label className="text-gray-700">Remember me</label>
                        </div>
                        <a href="/forgot-password" className="text-red-500">Forgot Password</a>
                    </div>

                    {/* Login Button */ }
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition duration-200"
                    >
                        Login
                    </button>

                    {/* Signup Link */ }
                    <p className="text-center text-sm mt-4">
                        Don’t have an account?{ " " }
                        <a href="/signup" className="text-teal-600 font-semibold">Sign up</a>
                    </p>
                </form>
            </div>

            {/* Right Side Image */ }
            <div className="p-5">
                <img src={ login_logo } alt="Secure Login" className="max-w-sm" />
            </div>
        </div>
    );
};

export default Login;
