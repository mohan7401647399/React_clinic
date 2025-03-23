import { createContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider, facebookProvider, signInWithPopup } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

export const userContext = createContext(null);

export default function UserContextProvider({ children }) {

    /***** Login section *****/
    const [show, setShow] = useState(false);
    //  Login form
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: "",
        rememberMe: false
    });
    //  Login form handling
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setLoginFormData({
            ...loginFormData,
            [name]: type === "checkbox" ? checked : value,
        });
    };
    //  Login form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, loginFormData.email, loginFormData.password);
            toast.success("Login successful!");
            // Redirect after a short delay
            setTimeout(() => {
                window.location.href = "/";
            }, 3500);
        } catch (err) {
            toast.error("email or password is incorrect");
        }
    };


    /***** Signup section *****/
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    //  Signup form
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        agree: false,
    });
    //  Signup form handling
    const signupHandleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };
    //  Signup form submit
    const signupHandleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            await updateProfile(userCredential.user, { displayName: formData.firstName });
            toast.success("Signup successful!");
            // Redirect after a short delay
            setTimeout(() => {
                window.location.href = "/";
            }, 3500);
        } catch (err) {
            toast.error(err.message);
        }
    };

    /***** forgot password section *****/
    //  Google Sign-In
    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            toast.success("Google login successful!");
        } catch (error) {
            toast.error(error.message);
        }
    };
    //  Facebook Sign-In
    const handleFacebookSignIn = async () => {
        try {
            await signInWithPopup(auth, facebookProvider);
            toast.success("Facebook login successful!");
        } catch (error) {
            toast.error(error.message);
        }
    };
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    //  Reset password
    const handleResetPassword = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await sendPasswordResetEmail(auth, email);
            // Store login success in localStorage
            localStorage.setItem("loginSuccess", "true");
            toast.success("Password reset email sent successfully!");
            // Redirect after a short delay
            setTimeout(() => {
                window.location.href = "/login";
            }, 3000);
        } catch (err) {
            // Handle Firebase authentication errors
            if (err.code === "auth/invalid-email") {
                toast.error("Invalid email format. Please enter a valid email.");
            } else if (err.code === "auth/user-not-found") {
                toast.error("No account found with this email. Please sign up.");
            } else if (err.code === "auth/wrong-password") {
                toast.error("Incorrect password. Please try again.");
            } else {
                toast.error("Login failed: " + err.message);
            }
        }
        setLoading(false);
    }


    /***** HomePage services *****/
    const services = [
        {
            title: "Talk to Doctor",
            color: "bg-red-300",
            icon: "🩺",
        },
        {
            title: "Medicine",
            color: "bg-purple-300",
            icon: "💊",
        },
        {
            title: "Lab Test & Packages",
            color: "bg-teal-400",
            icon: "🏥",
        },
        {
            title: "Book Dr. Appointment",
            color: "bg-cyan-400",
            icon: "👨‍⚕️",
        },
        {
            title: "Insurance",
            color: "bg-orange-300",
            icon: "⚕️",
        },
        {
            title: "MAYDEN Smart Health GOLD Plan",
            color: "bg-indigo-400",
            icon: "🤝",
        },
    ];


    /*****  Consult page *****/
    const [user, setUser] = useState(null);
    // Patient info form
    const [infoData, setInfoData] = useState({
        name: "",
        dob: "",
        bloodType: "",
        height: "",
        weight: "",
        complaints: ["", "", "", "", ""],
        files: ["", "", "", ""],
    });
    // patient info Form handling
    const infoHandlePage = (e) => {
        setInfoData({ ...infoData, [e.target.name]: e.target.value });
    };
    //  patient info Form submit
    const infoHandleSubmit = (e) => {
        e.preventDefault();
        toast.success("Form submitted successfully!");
    };

    return (
        <userContext.Provider value={ { show, setShow, loginFormData, setLoginFormData, handleChange, handleSubmit, showConfirmPassword, setShowConfirmPassword, formData, setFormData, signupHandleChange, signupHandleSubmit, handleGoogleSignIn, handleFacebookSignIn, email, setEmail, handleResetPassword, loading, setLoading, user, setUser, infoData, setInfoData, infoHandlePage, infoHandleSubmit, services } }>
            { children }
        </userContext.Provider>
    );
}