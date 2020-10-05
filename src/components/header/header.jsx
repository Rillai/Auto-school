import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

export function Header(props) {
    return <header>
        <a href='#top' className='top'><img className="Logo" alt="top" src={require('../../assets/img/top.png')} /></a>
        <div className="Top container">
            <NavLink to='/'><img className="Logo" alt="logo" src={require('../../assets/img/Circle-5+top.png')} /></NavLink>
            <ul className="Top_info">
                <li className="text info_text">ЧУО ДПО "АВТО - КЛАСС"</li>
                <li className="text info_text">ООО "АВТОЛАЙН-ПРОФИ"</li>
                <li className="text info_text">ЧУО ДПО "АВТОШКОЛА - ПРОФИ"</li>
            </ul>
            <div className="Contacts_Block">
                <p className="Contacts"><span className='d768'>Единая справочная служба</span>
                    <a href='tel:733-633' className="textRed" style={{ fontSize: "24px" }}> 733-633</a></p>
                <p className="Contacts"><span className='d768'> Эл. почта:</span>
                    <a href='mailto:uchebnii_centr@mail.ru' className="textRed" style={{ fontSize: "18px" }}> uchebnii_centr@mail.ru</a></p>
                <p className="Contacts_Container_Logo d768">
                    МЫ В СОЦИАЛЬНЫХ СЕТЯХ
                    <a href="https://ok.ru/group/64328421867572"><img className="Contacts_Logo" alt="logo" src={require('../../assets/img/odnoklassniki-logo.png')} /></a>
                    <a href="https://vk.com/avtoshkola_5plus"><img className="Contacts_Logo" alt="logo" src={require('../../assets/img/vk-logo.png')} /></a>
                    <a href="https://www.instagram.com/avtoshkola5plus/"><img className="Contacts_Logo" alt="logo" src={require('../../assets/img/instagram-logo.png')} /></a>
                </p>
                <button className='ButtonRed button' onClick={props.toggleFIeldset}>Записаться в автошколу</button>
            </div>
        </div>
    </header>
}