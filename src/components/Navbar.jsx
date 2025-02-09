import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {styles} from '../styles';
import {navLinks} from '../constants';
import {logo, menu, close} from '../assets';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={`{styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-suto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                    }}>
                        <img src={logo} alt="logo" className="w-9 h-10 object-contain" />
                        <p className="text-white text-[18px] font-bold cursor-pointer">Alan <span className="sm:block hidden">| Qilun Chen</span></p>
                </Link>
                <ul className="list-none hidden sm:flex items-flow gap-10">
                    {navLinks.map((Link) => (
                        <li
                            key={Link.id}
                            className={`${
                                active === Link.title
                                ? 'text-white'
                                : 'text-secondary'
                            }hover:text-white text-[18px] front-medium cursor-pointer`}
                            onClick={() => setActive(Link.title)}
                        >
                            <a href={`#${Link.id}`}>{Link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ?　close:menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-x1`}>
                        <ul className="list-none flex justify-center items-start flex-col gap-4">
                            {navLinks.map((Link) => (
                                <li
                                    key={Link.id}
                                    className={`${
                                        active === Link.title
                                        ? 'text-white'
                                        : 'text-secondary'
                                        }hover:text-white text-[18px] front-medium cursor-pointer`}
                                    onClick={() => setActive(Link.title)}
                                >
                            <a href={`#${Link.id}`}>{Link.title}</a>
                        </li>
                    ))}
                </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;