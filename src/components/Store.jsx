import React from 'react';

const Store = () => {
    const products = [
        {
            imgUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/399848/01/fnd/IND/fmt/png/PUMA-Evoke-Layup-Men's-Sneakers",
            title: "PUMA Evoke Layup Men's Sneakers",
            price: "₹2,999",
            link: "https://in.puma.com/in/en/pd/puma-evoke-layup-mens-sneakers/399848?swatch=01"
        },
        {
            imgUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/399848/02/fnd/IND/fmt/png/PUMA-Evoke Layup Men's Sneakers",
            title: "PUMA Evoke Layup Men's Sneakers",
            price: "₹3,299",
            link: "https://in.puma.com/in/en/pd/puma-evoke-layup-mens-sneakers/399848?swatch=02"
        },
        {
            imgUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/394371/01/fnd/IND/fmt/png/Smashic-Unisex-Sneakers",
            title: "Smashic Unisex Sneakers",
            price: "₹2,019",
            link: "https://in.puma.com/in/en/pd/smashic-unisex-sneakers/394371?swatch=01"
        },
        {
            imgUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/395829/01/sv01/fnd/IND/fmt/png/Carina-Slim-Perf-Women's-Sneakers",
            title: "Carina Slim Perf Women's Sneakers",
            price: "₹2,249",
            link: "https://in.puma.com/in/en/pd/carina-slim-perf-womens-sneakers/395829?swatch=01"
        },
        {
            imgUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/194774/21/fnd/IND/fmt/png/Rift-Slip-On-Pop-Kids'-Shoes",
            title: "Rift Slip On Pop Kids' Shoes",
            price: "₹2,399",
            link: "https://in.puma.com/in/en/pd/rift-slip-on-pop-kids-shoes/194774?swatch=21"
        },
        {
            imgUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107734/02/fnd/AUS/fmt/png/FUTURE-7-PLAY-FG/AG-Youth-Football-Boots",
            title: "FUTURE 7 PLAY FG/AG Youth Football Boots",
            price: "₹3,599",
            link: "https://in.puma.com/in/en/pd/future-7-play-fg-ag-youth-football-boots/107734?swatch=02"
        },
    ];

    return (
        <div className='store'>
            <div className="title m-2">
                <h1 className='font-bold text-4xl text-center'>Welcome to our Store</h1>
            </div>
            <div className="cardContainer flex flex-wrap justify-center">
                {products.map((product, index) => (
                    <div key={index} className="card m-5 max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-between">
                        <img className="w-full object-cover" src={product.imgUrl} alt="Image Not Found" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{product.title}</div>
                            <p className="text-gray-700 text-base">Price: {product.price}</p>
                        </div>
                        <div className="px-6 py-4 text-center">
                            <a href={product.link} className="btn btn-primary inline-block px-4 py-2 bg-black text-white rounded hover:bg-white hover:text-black border border-black transition duration-300">View Product</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Store;
