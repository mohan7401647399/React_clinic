import { useContext } from "react";
import forgot from "../Assets/forgot_logo.png"
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import { userContext } from "./contextAPI";

const ForgotPassword = () => {

    const { handleFacebookSignIn, handleGoogleSignIn, email, setEmail, handleResetPassword, loading } = useContext(userContext);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl flex flex-col md:flex-row">
                {/* Left Side */ }
                <div className="md:w-1/2 pr-6">
                    <Link to="/login" className="text-gray-500 text-sm mb-4 inline-block">
                        ← Back to login
                    </Link>
                    <h2 className="text-3xl font-bold mb-4">Forgot your password?</h2>
                    <p className="text-gray-500 mb-6">
                        Don’t worry, happens to all of us. Enter your email below to recover your password.
                    </p>

                    <form onSubmit={ handleResetPassword } className="space-y-4">
                        <div>
                            <label className="text-sm font-semibold text-gray-600">Email Id</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Your Email Id"
                                value={ email }
                                onChange={ (e) => setEmail(e.target.value) }
                                required
                                className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={ loading }
                            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
                        >
                            { loading ? "Sending..." : "Submit" }
                        </button>
                    </form>

                    <div className="mt-6 text-center text-gray-500 text-sm mb-4">Or login with</div>

                    <div className="flex justify-center space-x-4">
                        <button onClick={ handleFacebookSignIn } className="border p-3 rounded-lg hover:bg-gray-100">
                            <FaFacebook className="text-blue-600" size={ 20 } />
                        </button>
                        <button onClick={ handleGoogleSignIn } className="border p-3 rounded-lg hover:bg-gray-100">
                            <FaGoogle className="text-red-500" size={ 20 } />
                        </button>
                        <button className="border p-3 rounded-lg hover:bg-gray-100">
                            <FaApple className="text-black" size={ 20 } />
                        </button>
                    </div>
                </div>

                {/* Right Side - Illustration */ }
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={ forgot }
                        alt="Forgot Password Illustration"
                        className="w-full max-w-xs"
                    />
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;