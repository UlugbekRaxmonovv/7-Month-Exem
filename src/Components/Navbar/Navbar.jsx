import React, { useState } from 'react';
import './Navbar.scss';
import rasm1 from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import { MdBorderColor } from "react-icons/md";
import { useSelector } from 'react-redux';
import {useTranslation} from "react-i18next"
import '../../i18n.js';

const Navbar = () => {
   let {t,i18n} = useTranslation()
    const [menu, setMenu] = useState(false);
    let wishlist = useSelector(s => s.heart.value)
    const carts = useSelector(state => state.cart.value);
    console.log(wishlist);
    

    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="navbar_top">
                        <div className="navbar_top_link">
                            <select name="language" id="language-select">
                                <option value="en">En</option>
                                <option value="ru">Rus</option>
                                <option value="uz">Uzb</option>
                            </select>
                            <select name="currency" id="currency-select">
                                <option value="usd">USD</option>
                                <option value="sum">SUM</option>
                            </select>
                        </div>
                        <div className="nav">
                            <div className="link">
                                <Link to="/login"><FaRegUser /></Link>
                            </div>
                            <div className="link">
                                <Link to="/card"><FiShoppingCart /></Link>
                                <span>{carts.length}</span>
                            </div>
                            <div className="link">
                                <Link to="/wishlist"><FaRegHeart /></Link>
                                <span>{wishlist.length}</span>
                            </div>
                            <div className="link">
                                <div className="icon_all">
                                <MdBorderColor />
                                </div>
                                <p>{t("items")}</p>
                            </div>
                            <div className="link">
                                <span className='span'>$0.00</span>
                                <IoSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header>
                <div className="container">
                    <nav>
                        <div className="logo">
                            <Link to="/"><img src={rasm1} alt="Logo" /></Link>
                        </div>
                        <ul className={`Ul_li ${menu ? "show" : ""}`}>
                            <li><Link to="/">{t("navbar.home")}</Link></li>
                            <li><Link to="/">{t("navbar.bags")}</Link></li>
                            <li><Link to="/">{t("navbar.sneakers")}</Link></li>
                            <li><Link to="/">{t("navbar.belt")}</Link></li>
                            <li><Link to="/contact">{t("navbar.contact")}</Link></li>
                        </ul>
                        <TbMenuDeep onClick={() => setMenu(!menu)} className='menu' />
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
