import React from 'react';
import { useNavigate } from 'react-router-dom';
import embeddedSystemsImage from '../assets/backendimg.png'; // Ensure the image path is correct

const Checkout = () => {
    const navigate = useNavigate();

    const handleCloseClick = () => {
        navigate('/frontend-form');
    };

    return (
        <div className="bg-gray-100 p-4 md:p-10">
            <div className="max-w-full md:max-w-6xl mx-auto bg-white text-black shadow-lg rounded-lg overflow-hidden">
                <div className="flex flex-row md:flex-row items-center justify-between p-4 md:p-6 border-b border-gray-200">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Checkout</h1>
                    <button 
                        onClick={handleCloseClick}
                        className="bg-green-500 w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center hover:bg-green-700"
                    >
                        <span className="text-black text-lg md:text-2xl">X</span>
                    </button>
                </div>
                <div className="p-4 md:p-6">
                    <h2 className="text-xl md:text-2xl font-bold text-[#28b463] mb-4">Embedded Systems</h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <img 
                            src={embeddedSystemsImage} 
                            alt="Embedded Systems" 
                            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6" 
                        />
                        <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold mb-4">This internship includes</h3>
                            <div className="flex flex-col md:flex-row md:flex-wrap">
                                <div className="flex items-center mb-4 md:w-1/2">
                                    <i className="fas fa-chalkboard-teacher text-lg md:text-xl mr-2"></i>
                                    <span>Mentorship by Industry Experts</span>
                                </div>
                                <div className="flex items-center mb-4 md:w-1/2">
                                    <i className="fa fa-users text-lg md:text-xl mr-2" aria-hidden="true"></i>
                                    <span>Real-Time working exposure</span>
                                </div>
                                <div className="flex items-center mb-4 md:w-1/2">
                                    <i className="fa fa-trophy text-lg md:text-xl mr-2" aria-hidden="true"></i>
                                    <span>Certificate of Completion</span>
                                </div>
                                <div className="flex items-center mb-4 md:w-1/2">
                                    <i className="fas fa-file-alt text-lg md:text-xl mr-2"></i>
                                    <span>Professionally curated documentation</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative flex flex-col items-end mt-4 md:mt-0 md:pl-6">
                            <div className="absolute left-0 top-0 h-full w-0.5 bg-dashed bg-gray-400 hidden md:block"></div>
                            <p className="text-lg md:text-xl font-semibold">Total Price<i className="fas fa-chevron-down text-sm md:text-base p-1"></i></p>
                            <p className="text-xl md:text-3xl font-bold mr-[32px]">₹1180</p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-6 md:mt-8">
                        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;