import { useState } from 'react';
import logo from '../assets/imgs/logo.png'
import { RxHamburgerMenu } from "react-icons/rx";

export default function AppHeader({ contant, isAdmin, handleChange, isOpen, setIsOpen }) {

    return (
        <div className="app-header" >
            {!isOpen ?
                <div className='hamburger' onClick={() => setIsOpen(!isOpen)}>
                    <RxHamburgerMenu />
                </div>
                : ''
            }

            <div className="logo">
                <img src={logo} />
            </div>
            <div className={isOpen ? "menu open" : "menu"}>
                {!isAdmin ?
                    <div className="nav-bar">
                        {contant.map((title, index) => (
                            <span key={index} className="nav-btn">{title}</span>
                        ))}
                    </div>
                    :
                    <div className="nav-bar">
                        {contant.map((title, index) => (
                            <input
                                key={index}
                                className="nav-btn"
                                value={title}
                                onChange={(e) => handleChange(e, index, 'header')}
                            />
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}