import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className="header">
        <nav className="nav container">
            <a href="index.html" className='nav__logo'>Faz-B</a>
            <div className="nav__menu">
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                            <li className="uil uil-estate nav__icon"></li>Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <li className="uil uil-user nav__icon"></li> About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <li className="uil uil-file-alt nav__icon"></li> Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <li className="uil uil-briefcase nav__icon"></li> Services
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <li className="uil uil-scenery nav__icon"></li> Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="contact" className="nav__link">
                            <li className="uil uil-message nav__icon"></li> Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header
