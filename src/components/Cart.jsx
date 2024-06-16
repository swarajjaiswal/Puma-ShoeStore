import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItem, increment, decrement } from '../redux/cartSlice';
import { FaPlus, FaMinus } from "react-icons/fa";
import Footer from './Footer'

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveIfZero = (itemId) => {
        const item = cart.items.find(item => item.id === itemId);
        if (item && item.quantity === 0) {
            dispatch(removeItem(itemId));
        }
    };

    const totalBill = cart.items.reduce((total, item) => {
        const price = parseFloat(item.price.replace('₹', '').replace(',', ''));
        return total + (price * item.quantity);
    }, 0);

    return (
        <>
            <div className='Cart bg-black w-full min-h-screen  p-4 md:p-8'>
                <div className='flex flex-col md:flex-row items-center justify-between border-b-2 pb-4'>
                    <h1 className='text-3xl text-white md:text-4xl lg:text-5xl mt-2 font-extrabold'>Cart Details</h1>
                    {cart.items.length > 0 && (
                        <div className='flex justify-end mt-4 md:mt-0'>
                            <button
                                onClick={() => dispatch(clearCart())}
                                className='bg-black m-2 text-white p-2 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300'>
                                Clear Cart
                            </button>
                        </div>
                    )}
                </div>

                {cart.items.length > 0 ? (
                    cart.items.map((item) => {
                        if (item.quantity === 0) {
                            return null;
                        }

                        return (
                            <div key={item.id} style={{ background: 'linear-gradient(90deg, #0f0c29 0%, #302b63 50%, #24243e 100%)' }}
                                className="cart-details mx-auto my-5 w-full md:w-11/12 lg:w-4/5 flex flex-col md:flex-row justify-between items-center  p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
                            >
                                <img className='h-32 md:h-36 lg:h-48 rounded-lg' src={item.imgUrl} alt={item.title} />
                                <div className='flex flex-col md:flex-row items-center justify-between w-full mt-4 md:mt-0 md:ml-4'>
                                    <h1 className='font-bold text-lg md:text-xl'>{item.title}</h1>
                                    <h2 className='font-bold text-lg md:text-xl mt-2 md:mt-0 text-green-600'>{item.price}</h2>
                                    <div className='flex items-center gap-5'>
                                        <button
                                            onClick={() => { dispatch(decrement(item.id)); handleRemoveIfZero(item.id); }}
                                            className='px-2 py-1 rounded-full border border-gray-300 shadow-sm hover:bg-gray-200 transition duration-200'>
                                            <FaMinus />
                                        </button>
                                        <span className='mx-2 font-semibold'>{item.quantity}</span>
                                        <button
                                            onClick={() => dispatch(increment(item.id))}
                                            className='px-2 py-1 rounded-full border border-gray-300 shadow-sm hover:bg-gray-200 transition duration-200'>
                                            <FaPlus />
                                        </button>
                                    </div>
                                    <div className='flex mt-2 md:mt-0'>
                                        <button
                                            onClick={() => dispatch(removeItem(item.id))}
                                            className='bg-red-500 px-2 py-1 text-white hover:bg-red-400 transition duration-300 rounded-lg shadow-lg'>
                                            Remove Item
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <h1 className='text-center text-white text-2xl md:text-3xl lg:text-4xl mt-20'>Your cart is empty</h1>
                )}
                <div className='mt-10 p-6  text-white rounded-lg shadow-lg' style={{ background: 'linear-gradient(90deg, #ff0057 0%, #673ab7 34%, #3f51b5 40%, #ff5722 68%, #e91e63 80%, #f44336 100%)' }}>
                    <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-bold'>
                        Total Bill: <span className='text-yellow-300'>₹{totalBill.toFixed(2)}</span>
                    </h1>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Cart;