import React, { useEffect } from 'react';

const Popup = ({ message, visible, onClose }) => {
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(onClose, 3000);
            return () => clearTimeout(timer);
        }
    }, [visible, onClose]);

    return (
        <div className={`fixed top-0 left-0 right-0 p-4 bg-green-500 text-white text-center transition-transform duration-500 ${visible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
            <h1>Item Added To Cart Successfully</h1>
        </div>
    );
};

export default Popup;
