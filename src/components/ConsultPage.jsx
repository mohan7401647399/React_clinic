import { useContext, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import client_Call from '../Assets/ClientCall.png';
import { userContext } from "./contextAPI";

const ConsultPage = () => {
    const { user, setUser, infoData, setInfoData, infoHandlePage, infoHandleSubmit } = useContext(userContext);
    const navigate = useNavigate();

    /* Check if user is logged in */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                navigate("/login");
            }
        });
        return () => unsubscribe();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigate]);

    return (
        <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
            {/* Welcome Message */ }
            <div className="flex justify-center items-center font-bold p-3">
                { user && <p className="text-2xl md:text-3xl">Welcome, { user.displayName || "User" } 🎊</p> }
            </div>

            {/* Client Call Image (Responsive) */ }
            <div className="flex justify-center items-center p-5">
                <img src={ client_Call } alt="Client Call" className="w-full max-w-[900px]" />
            </div>

            {/* Patient Info Form */ }
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Patient Info</h2>
                <form onSubmit={ infoHandleSubmit } className="bg-white p-6 shadow rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Patient Info Section */ }
                    <div className="p-4 border rounded-lg">
                        <label className="block font-semibold">Patient Name</label>
                        <input
                            type="text"
                            name="name"
                            value={ infoData.name }
                            onChange={ infoHandlePage }
                            className="w-full p-2 border rounded mt-1"
                            placeholder="Enter name"
                        />

                        <label className="block mt-3 font-semibold">Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            value={ infoData.dob }
                            onChange={ infoHandlePage }
                            className="w-full p-2 border rounded mt-1"
                        />

                        <label className="block mt-3 font-semibold">Blood Type</label>
                        <input
                            type="text"
                            name="bloodType"
                            value={ infoData.bloodType }
                            onChange={ infoHandlePage }
                            className="w-full p-2 border rounded mt-1"
                            placeholder="Enter blood type"
                        />

                        <label className="block mt-3 font-semibold">Height</label>
                        <input
                            type="text"
                            name="height"
                            value={ infoData.height }
                            onChange={ infoHandlePage }
                            className="w-full p-2 border rounded mt-1"
                            placeholder="Enter height"
                        />

                        <label className="block mt-3 font-semibold">Weight</label>
                        <input
                            type="text"
                            name="weight"
                            value={ infoData.weight }
                            onChange={ infoHandlePage }
                            className="w-full p-2 border rounded mt-1"
                            placeholder="Enter weight"
                        />
                    </div>

                    {/* Complaints Section */ }
                    <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold mb-2">Complaints:</h3>
                        <div className="overflow-auto max-h-60">
                            { infoData.complaints.map((complaint, index) => (
                                <input
                                    key={ index }
                                    type="text"
                                    value={ complaint }
                                    onChange={ (e) => {
                                        const newComplaints = [...infoData.complaints];
                                        newComplaints[index] = e.target.value;
                                        setInfoData({ ...infoData, complaints: newComplaints });
                                    } }
                                    className="w-full p-2 border rounded mt-1"
                                    placeholder={ `Complaint ${index + 1}` }
                                />
                            )) }
                        </div>
                    </div>

                    {/* Files Section */ }
                    <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold mb-2">Files:</h3>
                        <div className="overflow-auto max-h-60">
                            { infoData.files.map((file, index) => (
                                <input
                                    key={ index }
                                    type="text"
                                    value={ file }
                                    onChange={ (e) => {
                                        const newFiles = [...infoData.files];
                                        newFiles[index] = e.target.value;
                                        setInfoData({ ...infoData, files: newFiles });
                                    } }
                                    className="w-full p-2 border rounded mt-1"
                                    placeholder={ `File ${index + 1}` }
                                />
                            )) }
                        </div>
                    </div>

                    {/* Submit Button */ }
                    <div className="md:col-span-3 flex justify-end">
                        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ConsultPage;
