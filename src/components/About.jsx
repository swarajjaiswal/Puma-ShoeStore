import React from 'react';
import Footer from './Footer';


const About = () => {
    return (
        <>

            <div className=' min-h-screen overflow-hidden'>
                <div className="container mx-auto px-0">
                    <div className='flex flex-col my-10 font-extrabold text-left'>
                        <span className='text-6xl md:text-8xl lg:text-9xl leading-tight about-text'>WE</span>
                        <span className='text-6xl md:text-8xl lg:text-9xl leading-tight about-text'>SERVE</span>
                        <span className='text-6xl md:text-8xl lg:text-9xl leading-tight about-text'>ATHLETES*</span>
                    </div>
                    <span className='block mx-auto mt-6 text-xl md:text-2xl lg:text-3xl italic font-bold p-3 text-left athelete-text'>
                        *If you have a body, you are an athlete
                    </span>

                    <div className="relative w-full mt-10 h-64 md:h-80 lg:h-96 bg-cover bg-center rounded-lg shadow-lg overflow-hidden" style={{ backgroundImage: "url('https://imgs.search.brave.com/y9QeAaDHRILkjJjLPlicq8vrCaVza4m-vue9NIKuh1g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NTg1Mjcx/NTg2NjQtNTYwMjI1/ZGM5YWE4P3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/T1h4OGMyNWxZV3Rs/Y25OOFpXNThNSHg4/TUh4OGZEQT0')" }}>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col md:flex-row justify-between items-center p-10 md:p-20 text-white z-10 text-center">
                            <div className="flex flex-col items-center mb-4 md:mb-0 text-white">
                                <h2 className='text-lg font-extrabold md:text-2xl'>Open positions</h2>
                                <h1 className='text-2xl font-bold md:text-4xl'>1244</h1>
                            </div>
                            <div className="flex flex-col items-center mb-4 md:mb-0 text-white">
                                <h2 className='text-lg font-extrabold md:text-2xl'>Locations</h2>
                                <h1 className='text-2xl font-bold md:text-4xl'>348</h1>
                            </div>
                            <div className="flex flex-col items-center mb-4 md:mb-0 text-white">
                                <h2 className='text-lg font-extrabold md:text-2xl'>Countries</h2>
                                <h1 className='text-2xl font-bold md:text-4xl'>51</h1>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default About;
