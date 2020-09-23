import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom"

function Header() {
    return (
        <nav className="header">
            {/* logo on the left */}
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/house/house_PNG27.png"
                    alt=""
                />
            </Link>

            <div className="header__nav">

                {/* list */}
                <Link to="/list" className="header__link">
                    <div className="header__option">
                        <span>List</span>
                    </div>
                </Link>

                {/* item2 */}
                <Link to="/item2" className="header__link">
                    <div className="header__option">
                        <span>Item2</span>
                    </div>
                </Link>
                {/* item3 */}
                <Link to="/item3" className="header__link">
                    <div className="header__option">
                        <span>Item3</span>
                    </div>
                </Link>
                {/* item4 */}
                <Link to="/item4" className="header__link">
                    <div className="header__option">
                        <span>Item4</span>
                    </div>
                </Link>
                {/* login */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span>Login</span>
                    </div>
                </Link>
                {/* register */}
                <Link to="/register" className="header__link">
                    <div className="header__option">
                        <span>Register</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
