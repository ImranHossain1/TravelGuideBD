import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <div className="container background text-center p-3 rounded-bottom mb-5" >
                <h2 className="fw-bold text-success">Make your travel destination in Bangladesh from Dhaka</h2>
                <h5 className="fw-bold text-danger">Keep exploring the beauty of Bangladesh and enjoy your precious time with different colors of the nation.</h5>
                <h2 className="fw-bold text-success">Total Budget: 50000 Taka</h2>
            </div>
        </div>
    );
};

export default Header;