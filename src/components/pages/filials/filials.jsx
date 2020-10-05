import React, { useState } from 'react';
import './filials.css';
import { NavLink } from 'react-router-dom';
import { OurServicesTop } from '../main-page/our-services/our-services-top';
import { YMaps, Map } from 'react-yandex-maps';

export function Filial(props) {
    let [coordinats, setCoordinats] = useState([54.333993, 48.373946]);
    let [zoom, setZoom] = useState([19]);
    let [isShown, setIsShown] = useState(true);
    const toggleFIeldset = () => setIsShown(!isShown);
    return (<div className='page'>
        <div className='category_Links container'>
            <NavLink to="/">Главная /</NavLink >
            <NavLink className="textBlue" to="/review">Филиалы</NavLink >
        </div>
        <h1 className='filials_header'>Филиалы</h1>
        <div className='page_blocks'>
            <div className='filials_main1'>
                <div className="filials_Wrapper container">
                    <h2 className="filials_h2_main">г.Ульяновск</h2>
                    <div className="filials_Container">
                        <ul className="filials_Text first_filial">
                        <h2>Ленинский район</h2>
                    <li><p>ул.Гончарова,дом&nbsp;23 <br className='mobiled1200' />(кривой дом,&nbsp;7&nbsp;э.)<br /> тел. 8-917-618-55-55 <br/> 733-633</p></li>
                    <li><p>ул.Урицкого, дом&nbsp;23 <br /> тел. 46-07-07</p></li>
                    <li><p>ул.Юности, дом&nbsp;5, <br /> офис 407 <br/>тел. 46-95-31</p></li>
                            <a className="filials_Button mobile1200" onClick={() => setCoordinats([54.333993, 48.373946])}>Выбрать филиал</a>
                        </ul>
                        <hr />
                        <ul className="filials_Text mobile1200">
                            <h2>Заволжский район</h2>
                            <li><p>ул. Шоферов, дом 2 офис 20, э.2<br /> тел. 712-322</p></li>
                            <a className="filials_Button" onClick={() => setCoordinats([54.334823, 48.479749])}>Выбрать филиал</a>
                        </ul>
                        <hr className='mobile1200' />
                        <ul className="filials_Text mobile1200">
                            <h2>Засвияжский район</h2>
                            <li><p>ул. Рябикова, дом 75<br /> тел. 766-740</p></li>
                            <a className="filials_Button" onClick={() => setCoordinats([54.272320, 48.288498])}>Выбрать филиал</a>
                        </ul>
                        <hr className='mobile1200' />
                        <ul className="filials_Text mobile1200">
                            <h2>Железнодорожный район</h2>
                            <li><p>ул. Луначарского 18, 1 этаж<br /> тел. 733-580</p></li>
                            <a className="filials_Button" onClick={() => setCoordinats([54.262766, 48.333620])}>Выбрать филиал</a>
                        </ul>
                        <div className='mobiled1200 flex-column-mobile'>
                            <ul className="filials_Text border">
                                <h2>Заволжский район</h2>
                                <li><p>ул. Шоферов, дом 20<br /> тел. 712-322</p></li>
                            </ul>
                            <ul className="filials_Text border">
                                <h2>Засвияжский район</h2>
                                <li><p>ул. Рябикова, дом 75<br /> тел. 766-740</p></li>
                            </ul>
                            <ul className="filials_Text">
                                <h2>Железнодорожный район</h2>
                                <li><p>ул. Луначарского 18, 1 этаж<br /> тел. 733-580</p></li>
                            </ul>
                        </div>
                    </div>
                    <a className="filials_Button filials_Button_mobile" onClick={() => { setCoordinats([54.262766, 48.333620]) }}>Выбрать&nbsp;филиал</a>
                </div>
            </div>
            <div className="filials_main2">
                <div className="filials_Wrapper container">
                    <h2 className="filials_h2_main">Ульяновская область</h2>
                    <div className="filials_Container">
                        <ul className="filials_Text_2">
                        <h2>Сенгилеевский район, пос. Силикатный</h2>
                        <li><p>тел. 8-917-618-55-55</p></li>
                            <a className="filials_Button little" onClick={() => setCoordinats([53.989993, 48.331509])}>Выбрать филиал</a>
                        </ul>
                        <hr />
                        <ul className="filials_Text_2">
                            <h2>Дмитровград</h2>
                            <li><p>ул.Куйбышева, дом 32,<br className='d380' /> тел. 8-937-452-40-93</p>
                                <p>ул.Мориса Тореза 9,<br className='d380' /> тел. 8-927-612-01-69</p></li>
                            <a className="filials_Button little" onClick={() => setCoordinats([54.199301, 49.633671])}>Выбрать филиал</a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='position_relative'>
            {isShown ? <div className='filials_map_wrapper' onClick={toggleFIeldset} />
                : <div className='exit' onClick={toggleFIeldset}>X</div>}
            <YMaps>
                <Map className='filials_map' state={{ center: coordinats, zoom: zoom }} />
            </YMaps>
            <h2 className='filials_h2'>Мы работаем во всех районах города, чтобы вы могли выбрать удобный вариант</h2>
        </div>
        <OurServicesTop toggleFIeldset={props.toggleFIeldset} />
    </div>)
}