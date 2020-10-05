import React from 'react';
import { NavLink } from 'react-router-dom';
import './our-services.css';
export const OurServicesBottom = (props) => {
    function scrollTop(){
        const el = document.getElementById('top');
        el.scrollIntoView();
      }
    return <ul class="OurServices_Bottom container">
        <div onClick={scrollTop} class="OurServices_Bottom_Wrapper">
            <NavLink to='services'><img alt="" src={require('../../../../assets/img/ABC-Triangle.png')} />
                <li className='OurServices_Bottom_Text'>Обучение водителей (всe категории) </li>
            </NavLink>
            <span className='point'>⬤</span>
            <NavLink to='addServices/1'><img alt="" src={require('../../../../assets/img/driving-license.png')} />
                <li className="OurServices_Bottom_Text">Спецдисциплины</li>
            </NavLink>
            <span className='point'>⬤</span>
            <NavLink to='addServices/2'><img alt="" src={require('../../../../assets/img/wheelchair.png')} />
                <li className="OurServices_Bottom_Text">Обучение инвалидов</li>
            </NavLink>
            <span className='point'>⬤</span>
            <NavLink to='addServices/3'><img alt="" src={require('../../../../assets/img/Restoring-driver-skills.png')} />
                <li className="OurServices_Bottom_Text">Восстановление навыков вождения</li>
            </NavLink>
            <span className='point'>⬤</span>
            <NavLink to='addServices/4'><img alt="" src={require('../../../../assets/img/car-pedals.png')} />
                <li className="OurServices_Bottom_Text">Дублирующие педали</li>
            </NavLink>
            <span className='point'>⬤</span>
            <NavLink to='addServices/5'><img alt="" src={require('../../../../assets/img/traffic.png')} />
                <li className="OurServices_Bottom_Text">Ручное управление</li>
            </NavLink>
        </div>
    </ul>
}