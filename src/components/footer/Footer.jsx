import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

export const Footer = (props) => {
    function scrollTop(){
        const el = document.getElementById('top');
        el.scrollIntoView();
      }
    return <footer>
        <div class="Footer">
            <div class="Footer_Wrapper container">
                <img className='Footer_Logo d805' alt="" src={require('../../assets/img/Circle-5+.png')} />
                <ul onClick={scrollTop} className='Footer_Text'>
                    <li><NavLink to='/about'>Об Автошколе</NavLink ></li>
                    <li><NavLink to='/services'>Услуги</NavLink ></li>
                    <li><NavLink to='/costs'>Цены</NavLink ></li>
                    <li><NavLink to='/filials'>Филиалы</NavLink ></li>
                    <li><NavLink to='/students'>Ученикам</NavLink ></li>
                    <li><NavLink to='/onlineStuding'>Онлайн-обучение</NavLink ></li>
                    <li><NavLink to='/review'>Отзывы</NavLink ></li>
                    <li><NavLink to='/contacts'>Контакты</NavLink ></li>
                </ul>
                <ul onClick={scrollTop} className='Footer_Text'>
                    <li><NavLink to='/services'>ОБУЧЕНИЕ ВОДИТЕЛЕЙ<br />
                    (ВСЕ КАТЕГОРИИ)</NavLink></li>
                    <li><NavLink to='/addServices/2'>ОБУЧЕНИЕ ИНВАЛИДОВ</NavLink></li>
                    <li><NavLink to='/addServices/5'>РУЧНОЕ УПРАВЛЕНИ</NavLink></li>
                    <li><NavLink to='/addServices/4'>ДУБЛИРУЮЩИЕ ПЕДАЛИ</NavLink></li>
                    <li><NavLink to='/addServices/1'>СПЕЦДИСЦИПЛИНЫ</NavLink></li>
                    <li><NavLink to='/addServices/3'>ВОССТАНОВЛЕНИЕ<br />
                    НАВЫКОВ ВОЖДЕНИЯ</NavLink></li>
                </ul>
                <ul onClick={scrollTop} className='Footer_Text paddingtop20'>
                    <li><NavLink to='/category/a'>КАТЕГОРИЯ A</NavLink></li>
                    <li><NavLink to='/category/b'>КАТЕГОРИЯ B</NavLink></li>
                    <li><NavLink to='/category/c'>КАТЕГОРИЯ C</NavLink></li>
                    <li><NavLink to='/category/d'>КАТЕГОРИЯ D</NavLink></li>
                    <li><NavLink to='/category/be'>КАТЕГОРИЯ BE</NavLink></li>
                    <li><NavLink to='/category/ce'>КАТЕГОРИЯ CE</NavLink></li>
                </ul>
                <ul className='Contacts_ul paddingtop20'>
                    <p className="Contacts_Container_Logo textWhite d660">
                        Мы в социальных сетях
                        <a href='https://ok.ru/group/64328421867572'><img alt="logo" className="Contacts_Logo" src={require('../../assets/img/ok-logo-white.png')} /></a>
                        <a href='https://vk.com/avtoshkola_5plus'><img alt="logo" className="Contacts_Logo" src={require('../../assets/img/vk-logo-white.png')} /></a>
                        <a href='https://www.instagram.com/avtoshkola5plus/'><img alt="logo" className='Contacts_Logo' src={require('../../assets/img/inst-logo-white.png')} /></a>
                    </p>
                    <li className="Contacts textWhite">Единая справочная служба:
                    733-633</li>
                    <li className="Contacts textWhite">Эл. почта:
                    uchebnii_centr@mail.ru</li>
                    <p className="Contacts_Container_Logo b660">
                        <a href='https://ok.ru/group/64328421867572'><img alt="logo" className="Contacts_Logo" src={require('../../assets/img/ok-logo-white.png')} /></a>
                        <a href='https://vk.com/avtoshkola_5plus'><img alt="logo" className="Contacts_Logo" src={require('../../assets/img/vk-logo-white.png')} /></a>
                        <a href='https://www.instagram.com/avtoshkola5plus/'><img alt="logo" className='Contacts_Logo' src={require('../../assets/img/inst-logo-white.png')} /></a>
                    </p>
                    <li className='b805'> <img className='Footer_Logo_mobile' alt="" src={require('../../assets/img/Circle-5+.png')} /></li>
                </ul>
            </div>
        </div>
        <div className="Footer_Make_And_leed"><a href='https://agatech.ru/'>
            <img alt="" src={require('../../assets/img/make-and-leed.png')} /></a>
        </div>
    </footer>
}