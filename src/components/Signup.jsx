import { useState } from "react";
import signup_logo from '../Assets/Signup_Logo.png'
import user_logo from '../Assets/mdi_patient.png'

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

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
                <form onSubmit={ handleSubmit } className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 text-sm">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={ formData.firstName }
                                onChange={ handleChange }
                                placeholder="Enter Your First Name"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={ formData.lastName }
                                onChange={ handleChange }
                                placeholder="Enter Your Last Name"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 text-sm">Email Id</label>
                            <input
                                type="email"
                                name="email"
                                value={ formData.email }
                                onChange={ handleChange }
                                placeholder="Enter Your Email Id"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={ formData.phone }
                                onChange={ handleChange }
                                placeholder="Enter Your Phone Number"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={ formData.password }
                            onChange={ handleChange }
                            placeholder="********************"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={ formData.confirmPassword }
                            onChange={ handleChange }
                            placeholder="********************"
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                            required
                        />
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="agree"
                            checked={ formData.agree }
                            onChange={ handleChange }
                            className="mr-2"
                            required
                        />
                        <label className="text-sm text-gray-700">
                            I agree to all the{ " " }
                            <span className="text-teal-600 font-semibold">Terms</span> and{ " " }
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
