import React from 'react';
import { NavLink } from 'react-router-dom';

export const D = (props) => {
    return <div><div class="categoryB">
        <div className='category_Top container'>
            <div className='category_Links'>
                <NavLink className="" to="/">Главная /</NavLink >
                <NavLink className="" to="/services"> Услуги /</NavLink >
                <NavLink className="textBlue" to='/category/d'> Категория D</NavLink >
            </div>
            <h1 className='category_h1'>Обучение категории D<br /> в автошколе "Учим на 5+"</h1>
            <div className='category_Bottom'>
                <ul className='category_box'>
                <li className='liflex'><span className='bigFont'>D</span><div className='textblock'>ПРАВА<br /> КАТЕГОРИИ</div></li>
                    <li><img className='drive-license' alt="Водительское удостоверение" src={require('../../../../../assets/img/Driver-license.png')} />
                        <h3>Новые задачи билетов</h3>
                        <div className='Category_File_container'>
                            <a download href='/' className='file'>
                                <img alt="" src={require('../../../../../assets/img/pdf-file.png')} />
                            </a>
                            <a download href='/' className='file'>
                                <img alt="" src={require('../../../../../assets/img/pdf-file.png')} />
                            </a>
                        </div>
                    </li>
                </ul>
                <ul className='cost_box'>
                    <li><h2>Стоимость обучения</h2></li>
                    <li className='text'>Профессиональная подготовка<br /> водителей ТС категории &raquo;D&raquo;</li>
                    <li><table className='cost_box_table'>
                        <tr>
                            <td className='bor cost'>12 000</td>
                            <td className='bor cost'>12 000</td>
                        </tr>
                        <tr>
                            <td className='bor '>с В на D</td>
                            <td className='bor'>с С на D</td>
                        </tr>
                    </table></li>
                    <li> <a className='Category_Button d901' onClick={props.toggleFIeldset}>ЗАПИСАТЬСЯ В АВТОШКОЛУ</a></li>
                    <li className='borderBlue margin_bottom_10px d901'><strong className='textRed'>Всем будущим нашим ученикам!</strong><br />
                        Скидка Дружная компания,при<br />
                        единовременном подписании<br />
                        договора на обучение компанией из<br />
                        трех и более человек скидка <br />
                        каждому 1000 рублей.
                        </li>
                </ul>
                <ul className='lessons_box'>
                    <li><h2>Практические занятия<br /> по вождению</h2><br />
                    <b>600 руб.</b> за 60 минут</li>
                    <li><div className='redBox'> Неограниченное кол-во занятий по маршруту гибдд без доплат!</div><br />
                        <a href='' className='AdditionalLessons_Url'>Дополнительные занятия с инструктором</a></li>
                    <li className='borderBlue d901'><strong className='textRed'>И это еще не всё!</strong> Скидка без<br />
                    расрочки. При единовременной <br />
                    оплате за теоретический курс, скидка<br />
                    1000 рублейе</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
}