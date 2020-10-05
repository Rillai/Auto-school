import React, { useState } from 'react';
import './category.css';
import { Filials } from '../../../main-page/filials/filials';
import { OurServicesTop } from '../../../main-page/our-services/our-services-top';
import Gallery from 'react-grid-gallery';
import { A } from '../blocks/A';
import { B } from '../blocks/B';
import { C } from '../blocks/C';
import { CE } from '../blocks/CE';
import { BE } from '../blocks/BE';
import { D } from '../blocks/D';
import { Route } from 'react-router-dom';
import Axios from 'axios';


const IMAGES =
    [{
        src: '/gallery/image1.png',
        thumbnail: '/gallery/image1.png',
        thumbnailWidth: 225,
        thumbnailHeight: 155,
    },
    {
        src: '/gallery/image2.png',
        thumbnail: '/gallery/image2.png',
        thumbnailWidth: 225,
        thumbnailHeight: 155,
    },
    {
        src: '/gallery/image3.png',
        thumbnail: '/gallery/image3.png',
        thumbnailWidth: 225,
        thumbnailHeight: 155
    },
    {
        src: '/gallery/image4.png',
        thumbnail: '/gallery/image4.png',
        thumbnailWidth: 225,
        thumbnailHeight: 155,
    },
    {
        src: '/gallery/image5.png',
        thumbnail: '/gallery/image5.png',
        thumbnailWidth: 225,
        thumbnailHeight: 155,
    },
    {
        src: '/gallery/image6.png',
        thumbnail: '/gallery/image6.png',
        thumbnailWidth: 225,
        thumbnailHeight: 155
    }]
export const Category = (props) => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('+7');
    let [button, setButton] = useState('Участвовать в акции');
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
    }
    return <div>
        <Route path='/category/a' exact render={() => <A toggleFIeldset={props.toggleFIeldset} />} />
        <Route path='/category/b' render={() => <B toggleFIeldset={props.toggleFIeldset} />} />
        <Route path='/category/c' render={() => <C toggleFIeldset={props.toggleFIeldset} />} />
        <Route path='/category/d' render={() => <D toggleFIeldset={props.toggleFIeldset} />} />
        <Route path='/category/be' render={() => <BE toggleFIeldset={props.toggleFIeldset} />} />
        <Route path='/category/ce' render={() => <CE toggleFIeldset={props.toggleFIeldset} />} />
        <div className='formOnStuding_block'>
            <form className='formOnStuding' onSubmit={handleSubmit}>
                <h2>Заполните форму на обучение</h2>
                <p>Оставьте заявку прямо сейчас, мы свяжемся с вами!</p>
                <input className='formOnStuding_input' id='name' placeholder='Ваше имя' maxLength='50' type='tel' value={name} onChange={(e) => setName(e.target.value)} />
                <input className='formOnStuding_input' id='number' placeholder='Контактный телефон' maxLength='12' minLength='2' value={email} onChange={(e) => setEmail(e.target.value)} />
                <select className='formOnStuding_input select'>
                    <option disabled='yes' selected='yes' hidden='yes'>Выберите филиал</option>
                    <option>Заволжский район</option>
                    <option>Засвияжский район</option>
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
        <div className='information_block container'>
            <div className='information_block_container'>
                <div className='information_block_top'>
                    <div className='information_action'>
                        <h2>Акции!</h2><br />
                        <table className='category_table'>
                            <td> <span className='textRed'>Студентам!<br /></span>
                            При предъявлении студенческого билета
                            скидка 1000 рублей!</td>
                            <td> <span className='textRed'>Скидка 3000 рублей<br /></span>
                            всем, кто заключает договор в свой День Рождения!</td></table>
                        <a href='#' className='Category_Button' onClick={props.toggleFIeldset}>Учавствовать в акции</a>
                    </div>
                    <div className='data'><h2>Время проведения теоретических занятий:</h2><br />
                        <div className='data_container'>
                            <ul>
                                <li><b>Пн. Ср. или Вт. Чт.</b></li>
                                <li>2 раза в неделю</li>
                                <hr className='data_hr' />
                                <li>утро 9.00 – 12.00</li>
                                <li>вечер 18.30 – 21.30</li>
                                <li>вечер 19.00 – 22.00</li>
                            </ul>
                            <hr className='data_hr' />
                            <ul>
                                <li><b>Сб. или Вс.</b></li>
                                <li>1 раза в неделю</li>
                                <hr className='data_hr' />
                                <li>cб. 15.00 - 20.00</li>
                                <li>вс. 14.00 - 18.00</li>
                            </ul>
                            <hr className='data_hr' />
                            <ul>
                                <li><b>Выходные дни</b></li>
                                <li>2 раза в неделю</li>
                                <hr className='data_hr' />
                                <li>пт.вс. 19.00-22.00</li>
                                <li>сб.вс. 10.00-13.00</li>
                                <li>сб. вс. 11.00-14.00</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='information_block_bottom'><h2>Лицензии</h2>
                    <div className='margin_top_25px'>
                        <img alt="" src={require('../../../../../assets/img/certificat_1.png')} />
                        <img alt="" src={require('../../../../../assets/img/certificat_2.png')} />
                        <img alt="" src={require('../../../../../assets/img/certificat_5.png')} />
                        <img alt="" src={require('../../../../../assets/img/certificat_3.png')} />
                        <img alt="" src={require('../../../../../assets/img/certificat_4.png')} />
                    </div>
                </div>
            </div>
        </div>
        <div className='map_block'>
            <div className='map_block_wrapper'>
                <h2>Наши учебные площадки</h2>
                <div className='map_container container'>
                    <iframe className='map' src="https://yandex.ru/map-widget/v1/?ll=37.624513%2C55.748635&z=13" width="520" height="400" frameborder="0" allowfullscreen="true">GEWGEEEEEEEEEEEE</iframe>
                    <iframe className='map margin-left30' src="https://yandex.ru/map-widget/v1/?ll=37.624513%2C55.748635&z=16" width="520" height="400" frameborder="0" allowfullscreen="true"></iframe>
                </div>
            </div>
        </div>
        <div className='review-and-photo'>
            <div className='review-and-photo_wrapper container'>
                <div className='review'>
                    <h2>Отзывы</h2>
                    <div className='review_wrapper'>
                        <div className='review_list'>
                            <div className='review_block'>
                                <div className='review_header'>
                                    <strong>Ольга</strong>
                                    <b>17.10.2019 21:49</b>
                                </div>
                                <div className='content text_18px'>
                                    Я отучилась в автошколе 5+.Инструктор Соболев Евгений Алексеевич ☝️- мастер своего дела,объяснял все возможные ситуации,которые могут возникнуть во время вождения на машине,теоретические вопросы проходили каждый день,разбирали ошибки и ситуации.Всё было по доброму,от этого человека исходила уверенность в меня,приятно видеть когда во мне "неуверенного чайника" верят. Вот и началось вождение,сначала площадка,а потом город. Соболев Евгений Алексеевич такой весёлый,в меру добрый,если не косячишь человек.Для меня -каждый день вождения это был праздник!Он был уверен,что я все смогу,верил в меня и подбадривал,потому что были и слёзы,некоторые моменты не получались,а он настраивал,что ВСЁ ПОЛУЧИТСЯ,ВСЁ СМОГУ!Это самый лучший инструктор!Мастер своего дела!Строгость и доброта в одном человеке!С ним легко осваиваются всё трудности,которые были при вождении в машине.А ещё Он смог настроить меня,в момент мандража,перед экзаменом!))Я Благодарна о таком учении!)) От души,спасибо,за такого отличного мастера!))
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="" src={require('../../../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../../../assets/img/patric.png')} />
                                </div>
                            </div>
                            <div className='review_block'>
                                <div className='review_header'>
                                    <strong>Ирина Бурова</strong>
                                    <b>05.10.2019 12:54</b>
                                </div>
                                <div className='content text_18px'>
                                    Обучалась в филиале на Луначарского, замечательная Автошкола! Хочу выразить благодарность методисту Ларисе Николаевне, за индивидуальный подход, умение всегда подобрать удобное время для занятий и слова поддержки. Но самый большой вклад в моё обучение внёс мой инструктор Евгений Соболев! Спокойный, уравновешенный, всегда разбавит занятие юмором и умением внушить уверенность в себе за рулём! С ним я не боялась совершать ошибок на дороге, каждую ошибку Евгений подробно разбирает и объясняет на месте! Всегда найдет удобное время для занятий, не смотря на свой перезагруженный график! Обучение вождению, с таким инструктором, становится одним удовольствием!
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="" src={require('../../../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../../../assets/img/patric.png')} />
                                </div>
                            </div>
                            <div className='review_block'>
                                <div className='review_header'>
                                    <strong>Ольга Четкасова</strong>
                                    <b>16.09.2019 11:35</b>
                                </div>
                                <div className='content text_18px'>
                                    Отучилась в этой автошколе, впечатления только положительные! Не пожалела,что пришла именно сюда. Огромное спасибо моему преподавателю по теории Римме Дмитриевне, все грамотно и четко объясняла, разбирала различные ситуации на дорогах. И, конечно же, огромное спасибо моему инструктору по вождению - Багаутдинову Шавкету, за его безграничное терпение, за умение все доходчиво объяснить на дороге и поддержку. Так же хочется поблагодарить Сергея Вениаминовича за его профессионализм ))) Вы лучшие!!!!!!
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="" src={require('../../../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../../../assets/img/patric.png')} />
                                </div>
                            </div>
                            <div className='review_block'>
                                <div className='review_header'>
                                    <strong>Анастасия</strong>
                                    <b>29.08.2019 13:33</b>
                                </div>
                                <div className='content text_18px'>
                                    Хочу сказать большое спасибо за обучение, в особенности хочу поблагодарить своего инструктора Ирину Леонидовну !!!! Обучает вождению на 5+, индивидуальный подход. Я в восторге, очень рекомендую!
                                    С уважением Колесникова Анастасия!
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="" src={require('../../../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../../../assets/img/patric.png')} />
                                </div>
                            </div>
                        </div>
                        <div className='review_bottom' />
                    </div>
                </div>
                <div className='photo margin-left30'>
                    <h2>Фото с обучения</h2>
                    <div className='photos'>
                        <Gallery images={IMAGES} backdropClosesModal={true} />
                    </div>
                </div>
            </div>
        </div>
        <OurServicesTop toggleFIeldset={props.toggleFIeldset} />
        <Filials toggleFIeldset={props.toggleFIeldset} />

    </div>
}