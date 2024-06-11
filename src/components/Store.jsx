import React from 'react';

const Store = () => {
    return (
        <div className='store'>
            <div className="title m-2">
                <h1 className='font-bold text-4xl text-center'>Welcome to our Store</h1>
            </div>
            <div className="cardContainer flex flex-wrap justify-center">

                <div className="card m-5 max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/399848/01/fnd/IND/fmt/png/PUMA-Evoke-Layup-Men's-Sneakers" alt="Puma Evoke Layup Men's Sneakers" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">PUMA Evoke Layup Men's Sneakers</div>
                        <p className="text-gray-700 text-base">Price: ₹2,999</p>
                    </div>
                    <div className="px-6 py-4">
                        <a href="https://in.puma.com/in/en/pd/puma-evoke-layup-mens-sneakers/399848?swatch=01" className="btn btn-primary">View Product</a>
                    </div>
                </div>


                <div className="card m-5 max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/399848/02/fnd/IND/fmt/png/PUMA-Evoke-Layup-Men's-Sneakers" alt="Puma Evoke Layup Men's Sneakers" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">PUMA Evoke Layup Men's Sneakers</div>
                        <p className="text-gray-700 text-base">Price: ₹3,299</p>
                    </div>
                    <div className="px-6 py-4">
                        <a href="https://in.puma.com/in/en/pd/puma-evoke-layup-mens-sneakers/399848?swatch=02" className="btn btn-primary">View Product</a>
                    </div>
                </div>


                <div className="card m-5 max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/394371/01/fnd/IND/fmt/png/Smashic-Unisex-Sneakers" alt="Smashic Unisex Sneakers" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Smashic Unisex Sneakers</div>
                        <p className="text-gray-700 text-base">Price: ₹2,019</p>
                    </div>
                    <div className="px-6 py-4">
                        <a href="https://in.puma.com/in/en/pd/smashic-unisex-sneakers/394371?swatch=01" className="btn btn-primary">View Product</a>
                    </div>
                </div>


                <div className="card m-5 max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/395829/01/sv01/fnd/IND/fmt/png/Carina-Slim-Perf-Women's-Sneakers" alt="Carina Slim Perf Women's Sneakers" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Carina Slim Perf Women's Sneakers</div>
                        <p className="text-gray-700 text-base">Price: ₹2,249</p>
                    </div>
                    <div className="px-6 py-4">
                        <a href="https://in.puma.com/in/en/pd/carina-slim-perf-womens-sneakers/395829?swatch=01" className="btn btn-primary">View Product</a>
                    </div>
                </div>


                <div className="card m-5 max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/194774/21/fnd/IND/fmt/png/Rift-Slip-On-Pop-Kids'-Shoes" alt="Rift Slip On Pop Kids' Shoes" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Rift Slip On Pop Kids' Shoes</div>
                        <p className="text-gray-700 text-base">Price: ₹2,399</p>
                    </div>
                    <div className="px-6 py-4">
                        <a href="https://in.puma.com/in/en/pd/rift-slip-on-pop-kids-shoes/194774?swatch=21" className="btn btn-primary">View Product</a>
                    </div>
                </div>


                <div className="card m-5 max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107734/02/fnd/AUS/fmt/png/FUTURE-7-PLAY-FG/AG-Youth-Football-Boots" alt="FUTURE 7 PLAY FG/AG Youth Football Boots" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">FUTURE 7 PLAY FG/AG Youth Football Boots</div>
                        <p className="text-gray-700 text-base">Price: ₹3,599</p>
                    </div>
                    <div className="px-6 py-4">
                        <a href="https://in.puma.com/in/en/pd/future-7-play-fg-ag-youth-football-boots/107734?swatch=02" className="btn btn-primary">View Product</a>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Store;
