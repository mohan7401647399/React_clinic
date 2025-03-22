import React from "react";
import HomePageHero from "../Assets/HomePageHero.png";
import National from "../Assets/national.png";
import Doctor from "../Assets/doctor.png";
import { FaArrowRight } from "react-icons/fa";

const HomePage = () => {
    return (
        <div className="bg-gray-100">

            {/* Hero Section */ }
            <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-teal-100 px-6 md:px-16 py-12">
                {/* Left Text Section */ }
                <section className="text-center md:text-left max-w-xl">
                    <p className="font-bold text-gray-800 underline">
                        Welcome to Mayden Smart Health
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold mt-2">
                        <span className="text-orange-500">Take Care</span> of Your Health,
                        and It Will Take Care of <span className="text-orange-500">You...</span>
                    </h1>
                    <p className="mt-6 font-semibold text-gray-700">Leading Healthcare Provider</p>
                    <p className="mt-1 text-gray-600">We prioritize your health and well-being.</p>
                    {/* Buttons */ }
                    <div className="mt-6 flex flex-col md:flex-row gap-4">
                        <button className="px-6 py-3 border border-orange-500 text-teal-600 font-semibold rounded-md hover:scale-105 transition">
                            Learn More
                        </button>
                        <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:scale-105 transition">
                            Book Appointment
                        </button>
                    </div>
                </section>
                {/* Right Image Section */ }
                <div className="flex justify-center">
                    <img src={ HomePageHero } alt="Home Page Hero" className="w-[250px] md:w-[350px] mt-6 md:mt-0" />
                </div>
            </div>


            {/* Appointment section */ }
            <div className="fixed flex justify-center md:justify-end p-6">
                <a href="/user" className="bg-orange-600 font-semibold text-white px-10 py-6 rounded-lg hover:bg-gray-800 transition">
                    Consult a Doctor Now
                </a>
            </div>

            {/* Services Section */ }
            <section className="py-12 text-center">
                <h2 className="text-2xl font-semibold text-gray-800">
                    Consult Specialist Doctors Online on Video/Audio Call & Chat
                </h2>
                <p className="text-gray-600 p-2">Consult Doctors from Top Hospitals within 30 minutes.</p>
                <div className="flex flex-wrap justify-center mt-6 gap-4">
                    { ["Talk to Doctor", "Medicine", "Lab Test & Packages", "Book Dr. Appointment", "Insurance"].map(
                        (service, index) => (
                            <div
                                key={ index }
                                className="p-6 bg-white shadow-lg rounded-md w-40 text-center"
                            >
                                <p className="text-lg font-semibold">{ service }</p>
                                <button className="text-blue-500 text-sm mt-2">More info</button>
                            </div>
                        )
                    ) }
                </div>
            </section>

            {/* SmartHealth GOLD Section */ }
            <div className="flex justify-around bg-teal-500 p-4">
                <section className="py-12 text-left">
                    <p>Mayden SmartHealth GOLD</p>
                    <h2 className="text-3xl font-bold text-gray-800">
                        Give the care your family deserves
                    </h2>
                    <p className="mt-2">
                        Unlimited Consultations with top Doctors for 6 family members in 25+ specialities and Different languages
                    </p>
                    <button className="mt-4 px-6 py-3 bg-orange-300 font-semibold rounded-md flex items-center hover:scale-110">
                        Buy Mayden SmartHealth Gold <span className="ml-2"><FaArrowRight /></span>
                    </button>
                </section>
            </div>

            {/* Doctor Signup Section */ }
            <div className="flex flex-col md:flex-row justify-center items-center p-10 md:p-20 gap-10">
                {/* Doctor Image */ }
                <img src={ Doctor } alt="doctor logo" className="w-[250px] md:w-[350px]" />
                {/* Text Content */ }
                <section className="text-center md:text-left max-w-lg">
                    <p className="text-teal-600 font-semibold">Mayden SmartHealth GOLD</p>
                    <h2 className="text-3xl font-bold mt-2">Are you a doctor?</h2>
                    <p className="text-gray-600 mt-2">
                        Join our panel of specialists and connect with your patients from anywhere.
                    </p>
                    {/* Join Us Button */ }
                    <div className="mt-6 flex justify-center md:justify-start">
                        <button className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-md flex items-center hover:scale-105 transition">
                            Join Us <span className="ml-2"><FaArrowRight /></span>
                        </button>
                    </div>
                </section>
            </div>

            {/* Benefits Section */ }
            <section className="p-12 bg-gray-100 text-left">
                <p>Mayden Smart Health offers the convenience of online doctor consultations, allowing you to receive medical advice and treatment from the comfort of your own home. At the end of every consultation, we immediately provide an online prescription to help you order medicines.</p>
                <h2 className="text-3xl font-bold mt-5">
                    Benefits of Online Doctor Consultation
                </h2>
                <ul className="mt-5 text-gray-600 text-lg">
                    <li>✅ 24X 7 Consultation : Consult a doctor via audio/video anytime.</li>
                    <li>✅ Convenience : Access MD-level doctors across 22+ specialties.</li>
                    <li>✅ Time-saving : Schedule a doctor's appointment in under 10 minutes.</li>
                    <li>✅ Cost-effective : Book an appointment for just ₹199.</li>
                    <li>✅ Flexibility : Connect with a doctor at your convenience.</li>
                    <li>✅ Access to thousands of specialists : Over 90,000+ specialist doctors.</li>
                    <li>✅ Remote monitoring : Remote monitoring of any chronic condition.</li>
                </ul>
            </section>

            {/* Health ID Creation */ }
            <div className="flex flex-col md:flex-row justify-between items-center m-6 md:m-10 p-6 bg-gray-200 border rounded-lg">
                {/* Left Section: Image & Text */ }
                <div className="flex flex-col md:flex-row items-center text-green-900 text-center md:text-left">
                    <img src={ National } alt="National" className="w-[200px] md:w-[250px]" />
                    <div className="p-5 md:ml-4">
                        <p className="font-bold text-lg">Create/Link Your ABHA Health ID</p>
                        <p className="text-gray-700 mt-2">
                            Create Health IDs for you and your family members and build your health profile.
                        </p>
                    </div>
                </div>
                {/* Right Section: Button */ }
                <div className="mt-4 md:mt-0">
                    <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:scale-105 transition">
                        Create Now
                    </button>
                </div>
            </div>


        </div>
    );
};

export default HomePage;
