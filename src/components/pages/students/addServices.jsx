import React from 'react'
import { NavLink, Route } from 'react-router-dom';
import { OurServicesTop } from '../main-page/our-services/our-services-top';
import { Filials } from '../main-page/filials/filials';
import { S5 } from './s/s5';
import { S2 } from './s/s2';
import { S3 } from './s/s3';
import { S4 } from './s/s4';
import { S1 } from './s/s1';

export function AddServices(props) {
    return (<div className='services'>
        <div className='category_Links container'>
            <NavLink to="/">Главная /</NavLink >
            <NavLink className="textBlue" to="/addServices"> Дополнительные услуги</NavLink >
        </div>
        <h1 className='contacts_header'>Дополнительные услуги</h1>
        <ul class="OurServices_Bottom container">
            <div class="OurServices_Bottom_Wrapper for_students">
                <NavLink to="/services" ><img alt="abc triangle" src={require('../../../assets/img/ABC-Triangle.png')} />
                    <li className='OurServices_Bottom_Text'>Обучение водителей (всe категории) </li>
                </NavLink>
                <span className='point'>⬤</span>
                <NavLink to='/addServices/1'><img alt="driving license" src={require('../../../assets/img/driving-license.png')} />
                    <li className="OurServices_Bottom_Text">Спецдисциплины</li>
                </NavLink>
                <span className='point'>⬤</span>
                <NavLink to='/addServices/2'><img alt=" wheelchair" src={require('../../../assets/img/wheelchair.png')} />
                    <li className="OurServices_Bottom_Text">Обучение инвалидов</li>
                </NavLink>
                <span className='point'>⬤</span>
                <NavLink to='/addServices/3'><img alt="restoring driver skills" src={require('../../../assets/img/Restoring-driver-skills.png')} />
                    <li className="OurServices_Bottom_Text">Восстановление навыков вождения</li>
                </NavLink>
                <span className='point'>⬤</span>
                <NavLink to='/addServices/4'><img alt="car pedals" src={require('../../../assets/img/car-pedals.png')} />
                    <li className="OurServices_Bottom_Text">Дублирующие педали</li>
                </NavLink>
                <span className='point'>⬤</span>
                <NavLink to='/addServices/5'><img alt="traffic" src={require('../../../assets/img/traffic.png')} />
                    <li className="OurServices_Bottom_Text">Ручное управление</li>
                </NavLink>
            </div>
        </ul>
        <Route path='/addServices/1' render={() => <S1 />} />
        <Route path='/addServices/2' render={() => <S2 />} />
        <Route path='/addServices/3' render={() => <S3 />} />
        <Route path='/addServices/4' render={() => <S4 />} />
        <Route path='/addServices/5' render={() => <S5 />} />
        <OurServicesTop toggleFIeldset={props.toggleFIeldset} />
        <Filials toggleFIeldset={props.toggleFIeldset} />
    </div>)
}