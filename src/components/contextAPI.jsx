import { createContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const userContext = createContext(null);

export default function UserContextProvider({ children }) {

    /* Login section */
    const [show, setShow] = useState(false);
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: "",
        rememberMe: false
    });
    const [error, setError] = useState("");
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, formData.email, formData.password);
            window.location.href = "/";
        } catch (err) {
            setError("Error logging in: " + err.message);
        }
    };


    /* Signup section */
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        agree: false,
    });
    const [signUpError, setSignUpError] = useState("");
    const signupHandleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };
    const signupHandleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setSignUpError("Passwords do not match");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;

            // ✅ Update Firebase user profile with name
            await updateProfile(user, {
                displayName: formData.firstName,
            });
            window.location.href = "/";
        } catch (err) {
            setSignUpError("Error signing up: " + err.message);
        }
    };


    return (
        <userContext.Provider value={ { show, setShow, loginFormData, setLoginFormData, error, setError, handleChange, handleSubmit, showConfirmPassword, setShowConfirmPassword, formData, setFormData, signUpError, setSignUpError, signupHandleChange, signupHandleSubmit } }>
            { children }
        </userContext.Provider>
    );
}