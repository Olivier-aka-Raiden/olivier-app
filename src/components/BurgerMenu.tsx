import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { scrollWithOffset } from '../services/scrollToElement.service';

interface BurgerMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, toggleMenu }) => {
    return (
        <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
            <button className="close-menu" onClick={toggleMenu}>
                &times;
            </button>
            <ul className="burger-menu-list">
                <li>
                    <Link scroll={el => scrollWithOffset(el)} to="#about" onClick={toggleMenu}>
                        <div role="button" className="menu-button">
                            About
                        </div>
                    </Link>
                </li>
                <li>
                    <Link scroll={el => scrollWithOffset(el)} to="#projects" onClick={toggleMenu}>
                        <div role="button" className="menu-button">
                            Projects
                        </div>
                    </Link>
                </li>
                <li>
                    <Link scroll={el => scrollWithOffset(el)} to="#ai-work" onClick={toggleMenu}>
                        <div role="button" className="menu-button">
                            AI Work
                        </div>
                    </Link>
                </li>
                <li>
                    <Link scroll={el => scrollWithOffset(el)} to="#contact" onClick={toggleMenu}>
                        <div role="button" className="menu-button">
                            Contact
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default BurgerMenu;