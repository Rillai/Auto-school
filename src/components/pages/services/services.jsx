import React from 'react';
import './services.css';
import { NavLink } from 'react-router-dom';
import { Filials } from '../main-page/filials/filials';
import { OurServicesBottom } from '../main-page/our-services/our-services-bottom';

export const Services = (props) => {
    return (<div className='services'>
        <div className='category_Links container'>
            <NavLink to="/">Главная /</NavLink >
            <NavLink className="textBlue" to="/services"> Услуги</NavLink >
        </div>
        <h1 className='services_h contacts_header'>Услуги</h1>
        <div className='services_container container'>
            <NavLink className="category_link" to='/category/a'>
                <img alt="" src={require('../../../assets/img/services_a.png')} />
                <div className='block'><div className='category-a' />Категория A</div >
            </NavLink>
            <NavLink className="category_link" to='/category/b'>
                <img alt="" src={require('../../../assets/img/services_b.png')} />
                <div className='block'><div className='category-b' />Категория B <br/>(механика/автомат)</div >
            </NavLink>
            <NavLink className="category_link" to='/category/c'>
                <img alt="" src={require('../../../assets/img/services_c.png')} />
                <div className='block'><div className='category-c' />Категория C</div >
            </NavLink>
            <NavLink className="category_link" to='/category/d'>
                <img alt="" src={require('../../../assets/img/services_d.png')} />
                <div className='block'><div className='category-d' />Категория D</div >
            </NavLink>
            <NavLink className="category_link" to='/category/be'>
                <img alt="" src={require('../../../assets/img/services_be.png')} />
                <div className='block'><div className='category-be' />Категория BE</div >
            </NavLink>
            <NavLink className="category_link" to='/category/ce'>
                <img alt="" src={require('../../../assets/img/services_ce.png')} />
                <div className='block'><div className='category-ce' />Категория CE</div >
            </NavLink>
        </div>
        <div className='actionAndStuding container'>
            <div className='action'>
                <h2 className='services_h'>Акции!</h2>
                <table className='action_table'>
                    <tr>
                        <td className='action_td'><strong><span className='textRed td_red'>Студентам!</span><br />
                        При предъявлении
                        студенческого билета
                        скидка 1000 рублей!</strong></td>
                        <td className='action_td'><strong><span className='textRed td_red'>Скидка 3000 рублей</span><br />
                        всем, кто заключает
                        договор в свой День
                        Рождения!</strong></td>
                    </tr>
                </table>
                <a href='#' className='Category_Button'onClick={props.toggleFIeldset}>Участвовать в акции</a>
            </div>
            <div className='studing'>
                <h2 className=''>Хочешь учиться на 5+? Тогда приходи к нам!</h2>
                <p>Автошкола “Учим на 5+” приглашает Вас пройти профессиональные курсы вождения транспортных средств всех категорий (A, B, С, D, BE, CE).
                Наша автошкола располагает многообразием автомобилей, адаптированных под обучение начинающих водителей.  Сертифицированные инструкторы с многолетним опытом подробно объясняют тонкости управления транспортным средством в дорожных условиях, а все программы обучения и маршруты одобрены ГИБДД. При желании ученик может пройти упражнения на тренажере, что помогает получить опыт вождения в спокойной обстановке кабинета, а потом отточить приобретенные навыки в городских условиях.
                </p>
                <a href='#' className='Category_Button'onClick={props.toggleFIeldset}>Начать обучение</a>
            </div>
        </div>
        <OurServicesBottom toggleFIeldset={props.toggleFIeldset}/>
        <Filials toggleFIeldset={props.toggleFIeldset}/>
    </div>)
}