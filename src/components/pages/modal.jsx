import Axios from 'axios';
import React, { useState } from 'react'
import './modal.css';
export function ModalWindow(props) {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('+7');
    let [button, setButton] = useState('Оставить заявку');
    let [disabled, setDisabled] = useState(false);
    function handleSubmit(event) {
        event.preventDefault();
        console.log([name, email])
        Axios.post('/send.php', [{ name: name }, { email: email }])
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        setEmail('')
        setName('')
        setButton('Отправленно!');
        setDisabled(true)
        event.preventDefault();
    }
    return (
        <div className='ModalWindow'>
            <form className='formOnStuding ModalWindowForm' onSubmit={handleSubmit}>
                <div className='close' onClick={props.toggleFIeldset}>✘</div>
                <h2>Заполните форму на обучение</h2>
                <p>Оставьте заявку прямо сейчас, мы свяжемся с вами!</p>
                <input className='formOnStuding_input' id='name' maxLength='50' placeholder='Ваше имя' value={name} onChange={(e) => setName(e.target.value)} />
                <input className='formOnStuding_input' maxLength='12' id='number' placeholder='Контактный телефон' value={email} onChange={(e) => setEmail(e.target.value)} />
                <select className='formOnStuding_input select'>
                    <option disabled='yes' selected='yes' hidden='yes'>Выберите филиал</option>
                    <option>Ленинский район</option>
                    <option>Заволжский район</option>
                    <option>Засвияжский район</option>
                    <option>Железнодорожный район</option>
                    <option>Сенгилеевский район, пос. Селикатный</option>
                    <option>Дмитровград</option>
                </select>
                <select className='formOnStuding_input select'>
                    <option disabled='yes' selected='yes' hidden='yes'>Выберите категорию</option>
                    <option>Категория A</option>
                    <option>Категория B</option>
                    <option>Категория C</option>
                    <option>Категория D</option>
                    <option>Категория BE</option>
                    <option>Категория CE</option>
                </select>
                <button type='submit' className='Category_Button' disabled={disabled}>{button}</button>
            </form>
        </div>
    );
}