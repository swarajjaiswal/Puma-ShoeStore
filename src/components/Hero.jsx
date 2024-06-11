import React from 'react';

const Main = () => {
    return (
        <div className="container mx-auto my-2 w-full bg-gray-100 p-10 flex flex-col lg:flex-row items-center">
            <div className="left flex-1 flex flex-col justify-start items-start p-5">
                <h1 className="font-bold text-5xl lg:text-7xl px-3 py-5 text-blue-800">YOUR FEET DESERVE THE BEST</h1>
                <h3 className="w-full px-3 py-5 text-lg lg:text-xl text-gray-700">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</h3>
                <div className="buttons flex justify-start items-center p-5 gap-4">
                    <button className="bg-red-500 px-4 py-2 text-white text-lg hover:bg-red-600 transition duration-300">Shop Now</button>
                    <button className="border-2 border-black px-4 py-2 text-lg rounded-sm hover:bg-black hover:text-white transition duration-300">Category</button>
                </div>
                <div className="icons flex px-3 py-5 gap-4 items-center">
                    <h4 className="text-gray-600">Also Available On:</h4>
                    <img className="h-7 hover:scale-110 transition duration-300" src="https://imgs.search.brave.com/r00W1uSOCVMbu-8rZCpqAsHtuZiacyWFOr8Snr3c0kE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzcy/OS9QTkcvNTEyL2Zs/aXBrYXJ0X2ljb24t/aWNvbnMuY29tXzYy/NzE4LnBuZw" alt="Nike" />
                    <img className="h-7 hover:scale-110 transition duration-300" src="https://imgs.search.brave.com/7_OhxkfbDDuKGv-6ga3i4NDNz-S_GO4H4MBG_De7E8M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9hbWF6b24t/aWNvbi0yNTZ4MjE2/LW95NjI4YXE3LnBu/Zw" alt="Amazon" />
                </div>
            </div>
            <div className="right flex-1 flex justify-center items-start lg:ml-10 mt-10  lg:mt-[-85px]">
                <img className="max-w-full h-auto object-cover shadow-lg rounded-lg" src="https://imgs.search.brave.com/4L5mZ8K6UPIQBJaggdZIWKOXqZaUdIwxFMkSx_9Eylc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWdl/bmcuamFncmFuLmNv/bS9pbWFnZXMvMjAy/My9mZWIvUHVtYSUy/MHdoaXRlJTIwc2hv/ZXMlMjAyMTY3NTc0/NTI1MDgyMi5qcGc" alt="Shoes" />
            </div>
        </div>
    );
};

export default Main;
