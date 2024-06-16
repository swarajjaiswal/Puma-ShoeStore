import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, increment } from '../redux/cartSlice';

const Store = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const products = [
        {
            id: 1,
            imgUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/399848/01/fnd/IND/fmt/png/PUMA-Evoke-Layup-Men's-Sneakers",
            title: "PUMA Evoke Layup Men's Sneakers",
            price: "₹2,999",
            link: "https://in.puma.com/in/en/pd/puma-evoke-layup-mens-sneakers/399848?swatch=01"
        },
        {
            id: 2,
            imgUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/399848/02/fnd/IND/fmt/png/PUMA-Evoke Layup Men's Sneakers",
            title: "PUMA Layup Men's Sneakers",
            price: "₹3,299",
            link: "https://in.puma.com/in/en/pd/puma-evoke-layup-mens-sneakers/399848?swatch=02"
        },
        {
            id: 3,
            imgUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/394371/01/fnd/IND/fmt/png/Smashic-Unisex-Sneakers",
            title: "Smashic Unisex Layup Sneakers",
            price: "₹2,019",
            link: "https://in.puma.com/in/en/pd/smashic-unisex-sneakers/394371?swatch=01"
        },
        {
            id: 4,
            imgUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/395829/01/sv01/fnd/IND/fmt/png/Carina-Slim-Perf-Women's-Sneakers",
            title: "Carina Slim Perf Women's Sneakers",
            price: "₹2,249",
            link: "https://in.puma.com/in/en/pd/carina-slim-perf-womens-sneakers/395829?swatch=01"
        },
        {
            id: 5,
            imgUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/194774/21/fnd/IND/fmt/png/Rift-Slip-On-Pop-Kids'-Shoes",
            title: "Rift Slip On Kids' Navy-Lime Shoes",
            price: "₹2,399",
            link: "https://in.puma.com/in/en/pd/rift-slip-on-pop-kids-shoes/194774?swatch=21"
        },
        {
            id: 6,
            imgUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107734/02/fnd/AUS/fmt/png/FUTURE-7-PLAY-FG/AG-Youth-Football-Boots",
            title: "FUTURE 7 PLAY Youth Football Boots",
            price: "₹3,599",
            link: "https://in.puma.com/in/en/pd/future-7-play-fg-ag-youth-football-boots/107734?swatch=02"
        },
        {
            id: 7,
            imgUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/378453/01/sv01/fnd/AUS/fmt/png/Deviate-NITRO%E2%84%A2-Elite-2-'Marathon-Series'-Men's-Running-Shoes",
            title: "NITRO™ Elite 2 Men's Running Shoes",
            price: "₹18,999",
            link: "https://in.puma.com/in/en/pd/deviate-nitro%E2%84%A2-elite-2-marathon-series-mens-running-shoes/378453?swatch=01"
        },
        {
            id: 8,
            imgUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/391819/02/sv01/fnd/IND/fmt/png/Shuffle-Mid-one8-Better-V2-Men's-Sneakers",
            title: "Shuffle Mid one8 V2 Men's Sneakers",
            price: "₹4,899",
            link: "https://in.puma.com/in/en/pd/shuffle-mid-one8-better-v2-mens-sneakers/391819?swatch=02"
        }
    ];

    const handleClick = () => {
        alert("Item added to Cart Successfully");
    };

    const isItemInCart = (productId) => {
        return cart.items.some(item => item.id === productId && item.quantity > 0);
    };

    return (
        <div className='store container px-5 mx-auto py-8' >
            <h1 className='text-3xl font-extrabold text-center mb-8 gradient-text'>Welcome to our Store</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" >
                {products.map((product) => (
                    <div key={product.id} className="rounded-lg overflow-hidden shadow-lg hover:transition-transform transform hover:scale-105 duration-300 cursor-pointer" >
                        <div className=" text-white " style={{ background: 'linear-gradient(90deg, #0f0c29 0%, #302b63 50%, #24243e 100%)' }}>
                            <img className="w-full h-56 object-cover" src={product.imgUrl} alt="Product" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                                <p className="text-gray-200 mb-2">{product.price}</p>
                                <div className="flex justify-center">
                                    <a href={product.link} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm uppercase tracking-wide hover:bg-gray-700 transition duration-300">View Product</a>
                                </div>
                            </div>
                            </div>
                            <button
                            onClick={() => { handleClick(); dispatch(addItem(product)); dispatch(increment()); }}
                            disabled={isItemInCart(product.id)}
                            className={`w-full mt-4 mb-4 font-semibold text-white px-4 py-2 rounded-full text-sm uppercase focus:outline-none ${isItemInCart(product.id) ? 'opacity-50 cursor-not-allowed' : 'bg-gradient-to-b from-indigo-600 to-indigo-800 hover:from-indigo-800 hover:to-indigo-900 hover:shadow-lg'}`}
                        >
                            {isItemInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Store;
