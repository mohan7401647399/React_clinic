import { useContext } from "react";
import signup_logo from '../Assets/Signup_Logo.png'
import user_logo from '../Assets/mdi_patient.png'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { userContext } from "./contextAPI";

const Signup = () => {
    const { show, setShow, showConfirmPassword, setShowConfirmPassword, formData, signupHandleChange, signupHandleSubmit } = useContext(userContext);

    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-5">
            {/* Signup Logo */ }
            <div className="p-5">
                <img src={ signup_logo } alt="Signup Logo" className="max-w-sm" />
            </div>

            {/* Signup Form */ }
            <div className="bg-white shadow-lg rounded-lg p-5 sm:p-10 m-5 sm:m-10 w-full max-w-lg">
                {/* Header */ }
                <div className="bg-gray-100 p-3 rounded-md mb-6">
                    <h2 className="text-xl font-bold text-teal-600 flex flex-col items-center">
                        <span className="flex items-center space-x-2"><img src={ user_logo } alt="user logo" />SIGN UP </span>
                    </h2>
                </div>

                {/* Form */ }
                <p className="text-gray-600 mb-4 text-center">
                    Let's get you all set up so you can access your personal account.
                </p>
                <form onSubmit={ signupHandleSubmit } className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 text-sm text-left font-semibold">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={ formData.firstName }
                                onChange={ signupHandleChange }
                                placeholder="Enter Your First Name"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm text-left font-semibold">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={ formData.lastName }
                                onChange={ signupHandleChange }
                                placeholder="Enter Your Last Name"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 text-sm text-left font-semibold">Email Id</label>
                            <input
                                type="email"
                                name="email"
                                value={ formData.email }
                                onChange={ signupHandleChange }
                                placeholder="Enter Your Email Id"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm text-left font-semibold">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={ formData.phone }
                                onChange={ signupHandleChange }
                                placeholder="Enter Your Phone Number"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm mb-1 text-left font-semibold">Password</label>
                        <div className="relative">
                            <input
                                type={ show ? "text" : "password" }
                                name="password"
                                value={ formData.password }
                                onChange={ signupHandleChange }
                                placeholder="********************"
                                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                                required
                            />
                            <span className="absolute right-3 top-3 text-gray-500" onClick={ () => setShow(prev => !prev) }>
                                { show ? <FaEyeSlash /> : <FaEye /> }
                            </span>
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm text-left font-semibold">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={ showConfirmPassword ? "text" : "password" }
                                name="confirmPassword"
                                value={ formData.confirmPassword }
                                onChange={ signupHandleChange }
                                placeholder="********************"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                                required
                            />
                            <span className="absolute right-3 top-3 text-gray-500" onClick={ () => setShowConfirmPassword(prev => !prev) }>
                                { showConfirmPassword ? <FaEyeSlash /> : <FaEye /> }
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="agree"
                            checked={ formData.agree }
                            onChange={ signupHandleChange }
                            className="mr-2"
                            required
                        />
                        <label className="text-sm text-gray-700">
                            I agree to all the{ " " }
                            <span className="text-red-500 font-semibold">Terms</span> and{ " " }
                            <span className="text-red-500 font-semibold">Privacy Policies</span>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-200"
                    >
                        Create account
                    </button>
                    <p className="text-center text-sm mt-4">
                        Already have an account?{ " " }
                        <a href="/login" className="text-teal-600 font-semibold">
                            Login
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
