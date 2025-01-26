import { FaBars } from "react-icons/fa";
import { navLinks } from "../constants";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../logo/logo.png';
const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="navbar">



            <div className="nav-links">

                {navLinks.map(nav => (
                    <NavLink to={nav.link} key={nav.id} className="link">{nav.id}</NavLink>
                ))}
            </div>
            <div className="menu-icons">
                <FaBars
                    onClick={() => {
                        setToggle(prev => !prev);
                    }}
                />
            </div>
            <div className={`${toggle ? 'show' : 'hidden'}`}>
                {navLinks.map(nav => (
                    <NavLink to={nav.link} key={nav.id}>{nav.id}</NavLink>
                ))}
            </div>
            <img
                src={logo}
                alt="Logo"
                style={{
                    width: '80px',
                    height: 'auto',
                    borderRadius: '50%',
                    animation: 'spin 3s linear infinite'
                }}
            />

            <style>
                {`
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
            </style>

        </nav>
    );
}

export default Navbar;