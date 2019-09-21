import React from 'react';
import './Header.css';
import logo from '../../logo.svg';

function Header() {
    return (
        <div className="nav">
            <div className="nav--logo">
                <a href="" className="nav--logo--link">
                    <img src={logo} alt="Home"/>
                </a>
            </div>
            <div className="nav--features">
                <ul className="nav--features--feature">
                    <li>
                        <div><a href="#">Button1</a></div>
                    </li>
                    <li>
                        <div><a href="#">Button2</a></div>
                    </li>
                    <li>
                        <div><a href="#">Button3</a></div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;