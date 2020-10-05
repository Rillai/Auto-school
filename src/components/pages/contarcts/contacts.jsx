import React from 'react';
import './contacts.css';
import { NavLink } from 'react-router-dom';
import { Filials } from '../main-page/filials/filials';
import { OurServicesTop } from '../main-page/our-services/our-services-top';

export const Contacts = (props) => {
    return (<div className='services'>
        <div className='category_Links container'>
            <NavLink to="/">Главная /</NavLink >
            <NavLink className="textBlue" to="/contacts">Контакты</NavLink >
        </div>
        <h1 className='contacts_header'>Контакты</h1>
        <section className='section_costs container space-around'>
            <div>
                <h2>Единая справочная служба:</h2>
                <a href='' type='number' href='+733633'><img alt='' src={require('../../../assets/img/number.png')} /></a>
            </div>
            <div>
                <h2>Электронная почта:</h2>
                <a className='textRed bigText' type='email' href='uchebnii_centr@mail.ru'>uchebnii_centr@mail.ru</a>
            </div>
        </section>
        <Filials toggleFIeldset={props.toggleFIeldset}/>
        <OurServicesTop toggleFIeldset={props.toggleFIeldset}/>
    </div>)
}