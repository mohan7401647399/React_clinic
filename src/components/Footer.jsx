import React from 'react'
import android from '../Assets/Android.png'
import apple from '../Assets/Apple.png'
import facebook from '../Assets/Facebook.png'
import instagram from '../Assets/Instagram.png'
import linkedin from '../Assets/Linkedin.png'
import youtube from '../Assets/Youtube.png'
import pinterest from '../Assets/pinterest.png'

const Footer = () => {
    return (
        <footer className="bg-teal-700 text-white py-2">
            <div className="mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Section - About */ }
                    <div className="flex flex-col items-start">
                        <div className="bg-white p-4 rounded-xl">
                            <h2 className="text-teal-700 font-bold text-xl">
                                <span className="text-orange-400">MY SMARTHEALTH</span> CLINIC
                            </h2>
                        </div>
                        <h3 className="text-lg font-bold mt-4">About</h3>
                        <p className="mt-2 text-sm">
                            Are you seeking to maximize your healthcare by making smart
                            decisions regarding your health and wellness?
                        </p>
                    </div>

                    {/* Middle Section - Contact Us */ }
                    <div>
                        <h3 className="text-lg font-bold">Contact Us</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li className="flex items-center space-x-2">
                                📞 <span>+91 78269 11911</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                📧 <span>Smarthealthclinics@gmail.com</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                📍 <span>AL-49, Old No: 115-A, 4th Avenue Shanthi Colony Main Road, Annanagar, Chennai – 600040</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                ⏰ <span>Mon-Fri: 9:00 AM - 9:00 PM</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section - Download & Social Media */ }
                    <div className="flex flex-col items-center">
                        <h3 className="text-lg font-bold">Download app</h3>
                        <div className="flex space-x-4 mt-3">
                            <img src={ android } alt="Android App" className="w-10 h-10 hover:scale-110" />
                            <img src={ apple } alt="iOS App" className="w-10 h-10 hover:scale-110" />
                        </div>

                        <h3 className="text-lg font-bold mt-6">Follow Us</h3>
                        <div className="flex space-x-3 mt-3">
                            <img src={ facebook } alt="Facebook" className="w-8 h-8 hover:scale-110" />
                            <img src={ instagram } alt="Instagram" className="w-8 h-8 hover:scale-110" />
                            <img src={ linkedin } alt="LinkedIn" className="w-8 h-8 hover:scale-110" />
                            <img src={ youtube } alt="YouTube" className="w-8 h-8 hover:scale-110" />
                            <img src={ pinterest } alt="Pinterest" className="w-8 h-8 hover:scale-110" />
                        </div>
                    </div>
                </div>

                {/* Copyright Section */ }
                <div className="text-center text-sm mt-8">
                    <p>Copyright © 2025 Mayden SmartHealth. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
