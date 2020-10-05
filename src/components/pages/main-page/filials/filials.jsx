import React, { useState } from 'react';
import './filials.css';

export const Filials = (props) => {
    let [isShown, setIsShown] = useState(true);
    const toggleFIeldset = () => setIsShown(!isShown);
    return <div className="filials">
        {isShown ? <div className="filials_Wrapper container">
            <h1 className="filials_H1">Филиалы в <span className='filials_H1_Span'>г.Ульяновск</span> / 
            <span onClick={toggleFIeldset} className='spanpointer'> Ульяновская область</span></h1>
            <div className="filials_Container">
                <ul className="filials_Text first_filial">
                    <h2>Ленинский район</h2>
                    <li><p>ул.Гончарова,дом&nbsp;23 <br className='mobiled1200' />(кривой дом,&nbsp;7&nbsp;э.)<br /> тел. 8-917-618-55-55 <br/> 733-633</p></li>
                    <li><p>ул.Урицкого, дом&nbsp;23 <br /> тел. 46-07-07</p></li>
                    <li><p>ул.Юности, дом&nbsp;5, <br /> офис 407 <br/>тел. 46-95-31</p></li>
                    <a className="filials_Button mobile1200" onClick={props.toggleFIeldset} >Выбрать&nbsp;филиал</a>
                </ul>
                <hr />
                <ul className="filials_Text mobile1200">
                    <h2>Заволжский район</h2>
                    <li><p>ул. Шоферов, дом 2 офис 20, э.2<br /> тел. 712-322</p></li>
                    <a className="filials_Button" onClick={props.toggleFIeldset}>Выбрать&nbsp;филиал</a>
                </ul>
                <hr className='mobile1200' />
                <ul className="filials_Text mobile1200">
                    <h2>Засвияжский район</h2>
                    <li><p>ул. Рябикова, дом 75<br /> тел. 766-740</p></li>
                    <a className="filials_Button" onClick={props.toggleFIeldset}>Выбрать&nbsp;филиал</a>
                </ul>
                <hr className='mobile1200' />
                <ul className="filials_Text mobile1200">
                    <h2>Железнодорожный район</h2>
                    <li><p>ул. Луначарского 18, 1 этаж<br /> тел. 733-580</p></li>
                    <a className="filials_Button" onClick={props.toggleFIeldset}>Выбрать&nbsp;филиал</a>
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
            <a className="filials_Button filials_Button_mobile" onClick={props.toggleFIeldset}>Выбрать&nbsp;филиал</a>
        </div>
            : <div className="filials_Wrapper container">
                <h1 className="filials_H1">Филиалы в <span onClick={toggleFIeldset} className='spanpointer'>г.Ульяновск</span> / <span className="filials_H1_Span">Ульяновская область</span></h1>
                <div className="filials_Container">
                    <ul className="filials_Text_2">
                        <h2>Сенгилеевский район, пос. Силикатный</h2>
                        <li><p>тел. 8-917-618-55-55</p></li>
                        <a className="filials_Button little" onClick={props.toggleFIeldset}>Выбрать&nbsp;филиал</a>
                    </ul>
                    <hr />
                    <ul className="filials_Text_2">
                        <h2>Дмитровград</h2>
                        <li><p>ул.Куйбышева, дом 32,<br className='d380' /> тел. 8-937-452-40-93</p>
                                <p>ул.Мориса Тореза 9,<br className='d380' /> тел. 8-927-612-01-69</p></li>
                        <a className="filials_Button little" onClick={props.toggleFIeldset}>Выбрать&nbsp;филиал</a>
                    </ul>
                </div>
            </div>}
    </div>
}