import React from 'react';
import './header.css'
import imkognito from '../image/1640528669_3-abrakadabra-fun-p-serii-chelovek-na-avu-3.jpg'
const Header = () => {
    return (
        <div>

                <div className="container">
                    <div className="header-navbar">
                        <div className="navbar-left">
                            <h2 style={{color:'white'}}>resume</h2>
                        </div>
                        <ul className="navbar-right">
                            <li><a href="#about">about</a></li>
                            <li><a href="#skills">skills</a></li>
                            <li><a href="#contacts">contacts</a></li>

                        </ul>
                    </div>
                    <div className="header-main">
                        <div className="header-main-left">
                            <img src={imkognito} alt=""/>
                                <h2>I'm <strong> Kvitko Ernest</strong></h2>
                                <h3> I'm student</h3>
                        </div>
                        <div style={{color:'white'}} className="header-main-right">
                            <div className="hello">HELLO!</div>
                            <h2>smth about me:</h2>
                            <div className="about">
                                <p>I'm 15 years old student, who is studying in Bilimkana school and <br/> I wanna
                                    be <strong>back-end</strong> specialist</p>
                            </div>
                            <ul className="info">
                                <li>
                                    <p>age: <dfn>15</dfn></p>
                                </li>
                                <li>
                                    <p>address: <dfn>not far from here</dfn></p>
                                </li>
                                <li>
                                    <p>email: <dfn>zoom66001@gmail.com</dfn></p>
                                </li>
                                <li>
                                    <p>phone number: <dfn>+996 704 676 715</dfn></p>
                                </li>
                                <li><p>birthday: <dfn>11 of June</dfn></p></li>
                            </ul>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default Header;