import React, { useState } from 'react'
import Axios from 'axios';

export function Reservation() {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [message, setMessage] = useState('');
    let [button, setButton] = useState('Оставить отзыв');
    let [disabled, setDisabled] = useState(false);
    function handleSubmit (event){
        event.preventDefault();
        if(!email==''){
        console.log([name,email])
        Axios.post('/send.php',[{name:name}, {email:email}, {message:message}])
                .then(function(response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
                setEmail('')
                setName('')
                setButton('Отправленно!');
                setDisabled(true)
                setMessage('')
    }}
    return (
        <form className='formOnReview' onSubmit={handleSubmit}>
            <h2>Оставить отзыв</h2>
            <div className='space_betweem'>
                <div>
                    <img alt="user" src={require('../../../assets/img/user.png')} />
                    <input placeholder='Ваше имя' maxLength='50' type="text" name="name" required="" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <img alt="mail" src={require('../../../assets/img/mail.png')} />
                    <input placeholder='Ваш E-mail' maxLength='50' type="email" name="email" required="" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </div>
            <textarea name='massage' maxLength='500' value={message} onChange={(e) => setMessage(e.target.value)}/>
            <input type='submit' className='Category_Button' disabled={disabled} value={button} />
        </form>)
}