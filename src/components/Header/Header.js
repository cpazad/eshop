import React from 'react';
import logo  from './eshoplogo.png';
import './Header.css';

const Header = () => {
    return (
        <>
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <img className="logo" src= { logo } alt="Company Logo" />
                    </div>
                </div>
            </div>
            
        </header>
        <nav className="menu">
            <div className="container">
                <row>
                    <col-md-12>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#shop">Shop</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact US</a></li>
                            
                        </ul>
                    </col-md-12>
                </row>
            </div>
        </nav>
        </>
        
    )
}

export default Header;
