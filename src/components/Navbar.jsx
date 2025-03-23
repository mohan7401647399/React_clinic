import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import logo from '../Assets/logo.png';
import { Bell, Mail, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

// Navbar for the homepage
const HomePageNavbar = () => {
    return (
        <nav className="bg-teal-700 flex justify-between items-center h-20 px-10">
            {/* Logo Section */ }
            <img src={ logo } alt="Clinic Logo" className="w-[150px] sm:w-[250px]" />
            {/* Navigation Links */ }
            <div className="flex space-x-6 text-white text-sm sm:text-lg font-bold">
                <a href="/about" className="hover:underline">About us</a>
                <a href="/login" className="hover:underline">Login</a>
            </div>
        </nav>
    );
};

// Navbar for users
const UserNavbar = () => {
    const [user, setUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login");
    };
    return (
        <nav className="bg-teal-700 flex justify-between items-center h-16 px-6 md:px-10">
            {/* Logo */ }
            <img src={ logo } alt="Clinic Logo" className="w-32 md:w-44" />

            {/* Desktop Navigation */ }
            <div className="hidden md:flex items-center space-x-6 text-white text-lg">
                <a href="/" className="hover:underline">Home</a>
                <a href="/about" className="hover:underline">About us</a>

                <div className="flex space-x-4">
                    <div className="p-2 bg-white rounded-lg shadow-md">
                        <Bell className="h-6 w-6 text-blue-900" />
                    </div>
                    <div className="p-2 bg-white rounded-lg shadow-md">
                        <Mail className="h-6 w-6 text-blue-900" />
                    </div>
                </div>
                {/* User Profile */ }
                <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-full shadow-md">
                    <div className="text-blue-900">
                        <p className="font-semibold">{ user?.displayName || "User" }</p>
                    </div>
                </div>

                <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 font-semibold" onClick={ handleLogout }>
                    Logout
                </button>
            </div>

            {/* Mobile Menu Button */ }
            <button onClick={ () => setMenuOpen(!menuOpen) } className="md:hidden">
                { menuOpen ? <X className="text-white h-8 w-8" /> : <Menu className="text-white h-8 w-8" /> }
            </button>

            {/* Mobile Navigation Menu */ }
            { menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-teal-800 text-white flex flex-col items-center py-4 space-y-4 md:hidden">
                    <a href="/home" className="hover:underline">Home</a>
                    <a href="/about" className="hover:underline">About us</a>
                    <button onClick={ handleLogout } className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800">
                        Logout
                    </button>
                </div>
            ) }
        </nav>
    );
};


// Common Navbar
const NavbarCommon = () => {
    return (
        <nav className="bg-teal-700 h-20 px-10">
            <div className="flex items-center justify-center p-2">
                <img src={ logo } alt="logo" className="w-[250px]" />
            </div>
        </nav>
    );
};

// Navbar component
const Navbar = () => {
    const location = useLocation();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);               // Added loading state

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);                                  // Stop loading after fetching auth state
        });

        return () => unsubscribe();
    }, []);

    if (loading) return null;                           // Prevent navbar flickering on auth state load

    // Define routes where the "Common Navbar" should be shown
    const commonRoutes = ["/login", "/signup", "/forgot-password"];
    const isCommonNavbar = commonRoutes.includes(location.pathname);
    const isHomepage = location.pathname === "/";

    return (
        <>
            { isHomepage ? (
                user ? <UserNavbar /> : <HomePageNavbar />
            ) : isCommonNavbar || !user ? (
                <NavbarCommon />
            ) : (
                <UserNavbar />
            ) }
        </>
    );
};

export default Navbar;
