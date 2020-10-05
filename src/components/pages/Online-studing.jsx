import React from 'react'
import { OurServicesBottom } from './main-page/our-services/our-services-bottom';
import { OurServicesTop } from './main-page/our-services/our-services-top';
import { Filials } from './main-page/filials/filials';

export function OnlineStuding(props) {
    return (
        <>
            <h1 className='onlineStuding_h1'>Онлайн обучение</h1>
            <form className='formOnStuding ModalWindowForm onlineStuding'>
                <h2>Регистрация на онлайн-обучение</h2>
                <p>Оставьте заявку прямо сейчас, мы свяжемся с вами!</p>
                <input className='formOnStuding_input' id='name' placeholder='Ваше имя' />
                <input className='formOnStuding_input' id='number' placeholder='Контактный телефон' />
                <input className='formOnStuding_input' id='number' placeholder='Ваш e-mail' />
                <input className='formOnStuding_input' id='number' placeholder='Ваш промо-код' />
                <a href='https://cab.autoinline.com/' className='Category_Button'>Получить доступ</a>
            </form>
            <OurServicesTop toggleFIeldset={props.toggleFIeldset} />
            <OurServicesBottom />
            <Filials toggleFIeldset={props.toggleFIeldset}/>
        </>
    )
}