import React from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom';

export const Navbar = (props) => {
    return <nav className="nav">
        <nav class="mobile-menu container">
            <div className='logoandbutton-mobile'>
                <NavLink to='/'><img className="Logo" alt="" src={require('../../assets/img/Circle-5+top.png')} /></NavLink>
                <button onClick={props.toggleFIeldset} className='ButtonRed button'>Записаться в автошколу</button>
            </div>
            <input type="checkbox" id="checkbox" class="mobile-menu__checkbox" />
            <label for="checkbox" class="mobile-menu__btn"><div class="mobile-menu__icon"></div></label>
            <div class="mobile-menu__container">
                <ul class="mobile-menu__list">
                    <NavLink className="mobile-menu__item" to='/about'>Об Автошколе</NavLink >
                    <NavLink className="mobile-menu__item" to='/services'>Услуги</NavLink >
                    <NavLink className="mobile-menu__item" to='/addServices'>Доп. услуги</NavLink >
                    <NavLink className="mobile-menu__item" to='/costs'>Цены</NavLink >
                    <NavLink className="mobile-menu__item" to='/filials'>Филиалы</NavLink >
                    <NavLink className="mobile-menu__item" to='/students'>Ученикам</NavLink >
                    <NavLink className="mobile-menu__item" to='/onlineStuding'>Онлайн-обучение</NavLink >
                    <NavLink className="mobile-menu__item" to='/review'>Отзывы</NavLink >
                    <NavLink className="mobile-menu__item" to='/contacts'>Контакты</NavLink >
                    <p className="Contacts_Container_Logo mob-cont">
                        <a href="https://ok.ru/group/64328421867572"><img className="Contacts_Logo" alt="" src={require('../../assets/img/odnoklassniki-logo.png')} /></a>
                        <a href="https://vk.com/avtoshkola_5plus"><img className="Contacts_Logo" alt="" src={require('../../assets/img/vk-logo.png')} /></a>
                        <a href="https://www.instagram.com/avtoshkola5plus/"><img className="Contacts_Logo" alt="" src={require('../../assets/img/instagram-logo.png')} /></a>
                    </p>
                </ul>
            </div>
        </nav>
        <div class="nav_wrapper">
            <NavLink className="nav_link" to='/about'>Об Автошколе</NavLink >
            <NavLink className="nav_link" to='/services'>Услуги</NavLink >
            <NavLink className="nav_link" to='/addServices'>Доп. услуги</NavLink >
            <NavLink className="nav_link" to='/costs'>Цены</NavLink >
            <NavLink className="nav_link" to='/filials'>Филиалы</NavLink >
            <NavLink className="nav_link" to='/students'>Ученикам</NavLink >
            <NavLink className="nav_link" to='/onlineStuding'>Онлайн-обучение</NavLink >
            <NavLink className="nav_link" to='/review'>Отзывы</NavLink >
            <NavLink className="nav_link" to='/contacts'>Контакты</NavLink >
        </div>
    </nav>
}