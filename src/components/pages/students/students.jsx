import React, { useState } from 'react';
import './students.css';
import { NavLink } from 'react-router-dom';
import { Filials } from '../main-page/filials/filials';
import { OurServicesTop } from '../main-page/our-services/our-services-top';
import Gallery from 'react-grid-gallery';

const IMAGES =
    [{
        src: '/gallery/image1.png',
        thumbnail: '/gallery/image1.png',
        thumbnailWidth: 305,
        thumbnailHeight: 205,
    },
    {
        src: '/gallery/image2.png',
        thumbnail: '/gallery/image2.png',
        thumbnailWidth: 305,
        thumbnailHeight: 205,
    },
    {
        src: '/gallery/image3.png',
        thumbnail: '/gallery/image3.png',
        thumbnailWidth: 305,
        thumbnailHeight: 205,
    },
    {
        src: '/gallery/image4.png',
        thumbnail: '/gallery/image4.png',
        thumbnailWidth: 305,
        thumbnailHeight: 205,
    },
    {
        src: '/gallery/image5.png',
        thumbnail: '/gallery/image5.png',
        thumbnailWidth: 305,
        thumbnailHeight: 205,
    },
    {
        src: '/gallery/image6.png',
        thumbnail: '/gallery/image6.png',
        thumbnailWidth: 305,
        thumbnailHeight: 205,
    }]
export function Students(props) {
    let [count, setCount] = useState('student');
    return (<div className='services'>
        <div className='category_Links container'>
            <NavLink to="/">Главная /</NavLink >
            <NavLink className="textBlue" to="/review">Студенты</NavLink >
        </div>
        <h1 className='contacts_header'>Ученикам</h1>
        <ul class="OurServices_Bottom container">
            <div class="OurServices_Bottom_Wrapper for_students">
                <div onClick={() => setCount('student')}><img alt="" src={require('../../../assets/img/test.png')} />
                    <li>5 советов для успешной сдачи экзаменов </li>
                </div>
                <span className='point'>⬤</span>
                <div onClick={() => setCount('documents')}><img alt="" src={require('../../../assets/img/dossier.png')} />
                    <li className="OurServices_Bottom_Text">Документы</li>
                </div>
                <span className='point'>⬤</span>
                <div onClick={() => setCount('maps')}><img alt="" src={require('../../../assets/img/map.png')} />
                    <li className="OurServices_Bottom_Text">Маршутные карты</li>
                </div>
                <span className='point'>⬤</span>
                <div onClick={() => setCount('newstudent')}><img alt="" src={require('../../../assets/img/student.png')} />
                    <li className="OurServices_Bottom_Text">Поступающим</li>
                </div>
                <span className='point'>⬤</span>
                <div onClick={() => setCount('gallery')}><img alt="" src={require('../../../assets/img/camera.png')} />
                    <li className="OurServices_Bottom_Text">Фото с обучения</li>
                </div>
                <span className='point'>⬤</span>
                <NavLink to="/review"><img alt="" src={require('../../../assets/img/review.png')} />
                    <li className="OurServices_Bottom_Text">Отзывы</li>
                </NavLink >
            </div>
        </ul>
        {count === 'student' ? <section>
            <h2 className='services_h'>5 советов для успешной сдачи экзамена по вождению автомобиля</h2>
            <ul className='advice'>
                <li>
                    <div className='container divflex'>
                        <h2>Правило №1. Подготовка к экзамену</h2>
                        <div><span>✔</span> <p>Перед экзаменом нужно хорошо выспаться и накануне воздержаться от алкоголя.</p></div>
                        <div><span>✔</span> <p>Во время экзамена постараться не  нервничать, вести себя спокойно.</p></div>
                        <div><span>✔</span> <p>Не употребляйте в день экзамена успокоительные препараты. Они способны вызывать сонливость и заторможенность реакции.</p></div>
                        <div><span>✔</span> <p>Экзамен нужно сдавать с чистой и свежей головой. Отбросьте все мысли.</p></div>
                        <div><span>✔</span> <p>Если вы плохо себя чувствуете, то лучше перенести экзамен на другой день.</p></div>
                    </div>
                </li>
                <li>
                    <div className='container'>
                        <h2>Правило № 2. Не поддаваться на провокации</h2>
                        <div>
                            <p>Если сдача вождения по городу для вас не проблема, вы прекрасно разбираетесь в правилах ПДД, хорошо знаете местность и с автомобилем на «ты», то можете быть уверенным в успехе. Но это только в том случае, если вам попался добропорядочный экзаменатор. В другом случае вас попытаюсь взять на провокацию. Например, попросят остановиться в неположенном месте или уступить дорогу там, где вы должны проехать первым. Будьте внимательны, не поддавайтесь на провокации.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='container'>
                        <h2>Правило № 3. Не поддаваться панике</h2>
                        <div>
                            <p>Если вам попался не компетентный сотрудник ГИБДД, попросите его быть чуточку вежливее и старайтесь не воспринимать все его оскорбления буквально. Помните, что это всего лишь экзамен! Час и вы сможете забрать свои права, а если вы все примете близко к сердцу, то вам придется еще ни один раз пройти подобную процедуру.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='container'>
                        <h2>Правило № 4. Повторная сдача</h2>
                        <div>
                            <p>Если сдача вождения в ГИБДД не удалась с первого раза — не отчаивайтесь. Попробуйте еще раз почитать правила, попросите своих знакомых или родственников показать вам город, объяснить тонкости. Пусть для вас экзаменатором станет близкий человек. Только не садитесь сами за руль! Иначе вы и ваш путеводитель останетесь без прав.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='container'>
                        <h2>Правило № 5. Дополнительные часы</h2>
                        <div>
                            <p>Если вам с трудом дается вождение, то в нашей автошколе, вы  можете попросить дополнительные часы. Конечно, это не бесплатно, но так вы будете уверенны в своих силах и сможете спокойно сесть за руль автомобиля на сдаче экзамена.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='container divflex'>
                        <h2>Самые главные ошибки, которые допускаются учениками</h2>
                        <div><span>✔</span> <p>не включенные поворотники перед поворотом и не выключенные после него;</p></div>
                        <div><span>✔</span> <p>не включенные фары;</p></div>
                        <div><span>✔</span> <p>путаница с педалями — вместо газа тормоз и наоборот;</p></div>
                        <div><span>✔</span> <p>не используются зеркала;</p></div>
                        <div><span>✔</span> <p>не правильная парковка задним ходом.</p></div>
                        <p className='padding-top'>Эти моменты перед сдачей экзамена нужно пройти несколько раз, чтобы не
                            столкнуться с нарушением одних из самых главных правил ПДД!</p>
                    </div>
                </li>
            </ul>
            <h2 className='services_h'>Если вы уверены в своих силах, то у вас все получится, а наша автошкола вам поможет</h2>
        </section> : null}
        {count === 'documents' ? <section>
            <div className='container'>
                <h2 className='services_h'>Документы</h2>
                <div className='flex-between-doc'>
                    <div>
                        <a href='../../../assets/img/dossier.png' download='' className='width630'>
                            <div className='bg-azure'><img alt="" src={require('../../../assets/img/search.png')} /></div>
                            <p download=''>Бланки заявлений</p>
                        </a>
                        <a href='../../../assets/img/dossier.png' download='' className='width630'>
                            <div className='bg-azure'><img alt="" src={require('../../../assets/img/search.png')} /></div>
                            <p download=''>Бланки экзаменационного листа в ГИБДД</p>
                        </a>
                        <a href='../../../assets/img/dossier.png' download='' className='width630 height135'>
                            <div className='bg-azure'><img alt="" src={require('../../../assets/img/search.png')} /></div>
                            <p download=''>Памятка для пользователей государственными услугами, предоставляемыми в электронном виде УГИБДД УМВД России по Ульяновской области.</p>
                        </a>
                    </div>
                    <div>
                        <a href='../../../assets/img/dossier.png' download='' className='width630'>
                            <div className='bg-azure'><img alt="" src={require('../../../assets/img/search.png')} /></div>
                            <p download=''>Бланк заявления для ГИБДД</p>
                        </a>
                        <a href='../../../assets/img/dossier.png' download='' className='width630'>
                            <div className='bg-azure'><img alt="" src={require('../../../assets/img/search.png')} /></div>
                            <p>Новая методика приема экзаменов в ГИБДД</p>
                        </a>
                    </div>
                </div>
            </div>

        </section> : null}
        {count === 'maps' ? <section className='container'>
            <h2 className='services_h'>Маршутные карты</h2>
            <div className='flex-between'>
                <img alt="" src={require('../../../assets/img/maps/map1.jpg')} />
                <img alt="" src={require('../../../assets/img/maps/map2.jpg')} />
                <img alt="" src={require('../../../assets/img/maps/map3.jpg')} />
                <img alt="" src={require('../../../assets/img/maps/map4.jpg')} />
                <img alt="" src={require('../../../assets/img/maps/map5.jpg')} />
                <img alt="" src={require('../../../assets/img/maps/map6.jpg')} />
            </div>
            <a href='../../../assets/img/maps.pdf' className='download' download=''>Скачать карты в формате pdf</a>
        </section> : null}
        {count === 'newstudent' ? <section>
            <h2 className='services_h'>Поступающим</h2>
            <ul className='advice'>
                <li>
                    <div className='container padding-top'>
                        <strong>Автошкола 5+ осуществляет постоянный набор и обучение кандидатов в водители категории "В".
                        Интенсивность занятий может быть разная, но срок обучения одинаковый 2,5-3 месяца.</strong>
                    </div>
                    <div className='container divflex'>
                        <h2>В обучение входят</h2>
                        <div><span>✔</span> <p>теоретический курс 134 академических часов;</p></div>
                        <div><span>✔</span> <p>практический курс 56 астрономических часов (по 60 минут) МКПП;</p></div>
                        <div><span>✔</span> <p>внутренние экзамены в автошколе;</p></div>
                        <div><span>✔</span> <p>подготовка пакета документов для сдачи экзамена в ГИБДД;</p></div>
                        <div><span>✔</span> <p>сопровождение на экзамен в ГИБДД;</p></div>
                        <div><span>✔</span> <p>фиксированная стоимость обучения (без дополнительных платежей);</p></div>
                        <div><span>✔</span> <p>можно оформить рассрочку с первоначальным взносом от 1 000 рублей.</p></div>
                        <div><span>✔</span> <p>выдача свидетельства по окончанию курса обучения в автошколе;</p></div>
                        <div><span>✔</span> <p>оформление договора об оказании образовательных услуг;</p></div>
                        <div><span>✔</span> <p>полное сопровождение в ГИБДД до получения водительского удостоверения.</p></div>
                    </div>
                </li>
                <li>
                    <div className='container divflex'>
                        <h2>Документы для автошколы</h2>
                        <div><span>✔</span> <p>копия паспорта;</p></div>
                        <div><span>✔</span> <p>медицинская справка установленного образца (оригинал и копию);</p></div>
                        <div><span>✔</span> <p>квитанцию за обучение (предоплата).</p></div>
                    </div>
                </li>
                <li>
                    <div className='container'>
                        <h2>Приём в группу</h2>
                        <div>
                            <p>На основании предъявленных документов, на каждого обучающегося формируется полный пакет документов, необходимый для предоставления в ГИБДД по городу Ульяновску и Ульяновской области. Прием документов в формируемую учебную группу продолжается до момента ее регистрации в ГИБДД. Каждый подавший заявление о приеме обязан пройти медицинское освидетельствование, для определения пригодности по состоянию здоровья к обучению на водителей транспортных средств категории «В».</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='container divflex'>
                        <h2>При поступлении на учебу в автошколу обучающегося знакомят с:</h2>
                        <div><span>✔</span> <p>положением о приеме, обучении, выпуске и отчислении обучающихся и Уставом;</p></div>
                        <div><span>✔</span> <p>лицензией на право осуществления образовательной деятельности;</p></div>
                        <div><span>✔</span> <p>договором на оказание платных образовательных услуг;</p></div>
                        <div><span>✔</span> <p>положением о промежуточной аттестации в образовательной организации;</p></div>
                        <div><span>✔</span> <p>порядком приема экзаменов в ГИБДД;</p></div>
                        <div><span>✔</span> <p>правилами техники безопасности, санитарно-гигиеническими и противопожарными мероприятиями и другими нормами по охране труда.</p></div>
                        <div><span>✔</span> <p>правилами внутреннего распорядка для обучающихся;</p></div>
                        <div><span>✔</span> <p>условиями и порядком оплаты за оказываемые услуги;</p></div>
                        <div><span>✔</span> <p>положением об итоговой аттестации в образовательной организации;</p></div>
                        <div><span>✔</span> <p>учебной программой и планами.</p></div>
                    </div>
                </li>
            </ul>
        </section> : null}
        {count === 'gallery' ? <div>
            <h2 className='services_h'>Фото с обучения</h2>
            <div className='gallery'>
                <Gallery images={IMAGES} backdropClosesModal={true} />
            </div>
        </div> : null}
        <OurServicesTop toggleFIeldset={props.toggleFIeldset}/>
        <Filials toggleFIeldset={props.toggleFIeldset}/>
    </div>)


}