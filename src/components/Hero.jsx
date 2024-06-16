import React from 'react';
import { useNavigate } from 'react-router-dom';
import PumaShoe from '../assets/Puma-Shoe.png'


const Main = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/store");
    };

    return (
        <div className="container mx-auto my-2 w-full p-10 flex flex-col lg:flex-row items-center">
            <div className="left flex-1 flex flex-col justify-start items-start p-5 dark-bg">
                <h1 className="font-extrabold text-5xl lg:text-7xl px-3 py-5 gradient-text bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                    YOUR FEET DESERVE THE BEST
                </h1>
                <h3 className="w-full px-3 py-5 text-lg lg:text-xl card-color font-bold ">
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </h3>
                <div className="buttons flex justify-start items-center p-5 gap-4 dark-bg">
                    <button onClick={handleClick} className="bg-red-500 px-6 py-3 text-white text-lg rounded-md shadow-lg hover:bg-red-600 transition duration-300">
                        Shop Now
                    </button>
                    <button className="border-2 border-gray-300 px-6 py-3 text-lg text-gray-300 rounded-md shadow-lg hover:bg-gray-300 hover:text-black transition duration-300">
                        Category
                    </button>
                </div>
                <div className="icons flex px-3 py-5 gap-4 items-center dark-bg">
                    <h4 className="text-gray-200">Also Available On:</h4>
                    <img className="h-7 hover:scale-110 transition duration-300" src="https://imgs.search.brave.com/r00W1uSOCVMbu-8rZCpqAsHtuZiacyWFOr8Snr3c0kE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzcy/OS9QTkcvNTEyL2Zs/aXBrYXJ0X2ljb24t/aWNvbnMuY29tXzYy/NzE4LnBuZw" alt="Nike" />
                    <img className="h-7 hover:scale-110 transition duration-300" src="https://i.pinimg.com/736x/14/cc/e8/14cce80d1e202a64200c92c81e6f0abd.jpg" alt="Amazon" />
                </div>
            </div>
            <div className="right flex-1 flex justify-center items-start mb-16"> 
                <img className="max-w-full h-auto object-cover shadow-lg rounded-lg" src={PumaShoe} alt="Shoes" />
            </div>
        </div>
    );
};

export default Main;
