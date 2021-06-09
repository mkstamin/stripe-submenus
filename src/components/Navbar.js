import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext } from '../context/context';

const Navbar = () => {
    const { sidebarToggle, submenuOpen } = useContext(AppContext);

    return (
        <nav className="nav">
            <div className="nav-center">
                <div className="nav-header">
                    <img src="./images/logo.svg" alt="logo" className="nav-logo" />
                    <button type="button" className="btn toggle-btn" onClick={sidebarToggle}>
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    <li>
                        <button type="button" className="link-btn" onMouseOver={submenuOpen}>
                            products
                        </button>
                    </li>
                    <li>
                        <button type="button" className="link-btn" onMouseOver={submenuOpen}>
                            developers
                        </button>
                    </li>
                    <li>
                        <button type="button" className="link-btn" onMouseOver={submenuOpen}>
                            company
                        </button>
                    </li>
                </ul>
                <button type="button" className="btn signin-btn">
                    Sign in
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
