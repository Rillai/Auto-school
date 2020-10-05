import React from 'react';
import './our-services.css';
export const OurServicesTop = (props) => {
    return <div class="CurServices">
        <div class="OurServices_Top">
            <h2>Наши услуги</h2>
        </div>
        <div class="OurServices_Wrapper">
            <div class="OurServices_Content container">
                <div class="OurServices_Block"><span class="OurServices_Span_Text">Стоимость обучения <span
                    class="OurServices_Span_Text2">10&nbsp;000</span>&nbsp;рублей</span>
                    <p class="OurServices_Span_Text3">теоретическая часть</p>
                </div>
                <div class="OurServices_CategoryOfRights">
                    <span>Выбор категории<br className='b575' /> прав</span>
                    <div>A</div>
                    <div>B</div>
                    <div>C</div>
                    <div>D</div>
                    <div>BE</div>
                    <div>CE</div>
                </div>
                <ul class="OurServices_Container">
                    <li><div><span class="OurServices_Text">Теория</span>
                        <img alt="" class='OurService_Img' src={require('../../../../assets/img/form.png')} />
                    </div>
                        Онлайн / в классе</li>
                    <li><div><span class="OurServices_Text">Практика</span>
                        <img className='OurService_Img' alt="" src={require('../../../../assets/img/steering-wheel.png')} />
                    </div>
                        300р.(60 мин.)</li>
                    <li><div><span class="OurServices_Text">Бензин</span>
                        <img alt="" className='OurService_Img' src={require('../../../../assets/img/dippel-oil.png')} />
                    </div>Включен<br className='b768' /> в стоимость<br className='b768' /> вождения</li>
                </ul>
                <div class="OurServices_Container_Transport container">
                    <div>
                        <img alt="" src={require('../../../../assets/img/elips/moto.png')} />
                        <img alt="" src={require('../../../../assets/img/elips/Ael.png')} />
                    </div>
                    <div>
                        <img alt="" src={require('../../../../assets/img/elips/car.png')} />
                        <img alt="" src={require('../../../../assets/img/elips/B.png')} />
                    </div>
                    <div>
                        <img alt="" src={require('../../../../assets/img/elips/truck.png')} />
                        <img alt="" src={require('../../../../assets/img/elips/Cel.png')} />
                    </div>
                    <div>
                        <img alt="" src={require('../../../../assets/img/elips/bus.png')} />
                        <img alt="" src={require('../../../../assets/img/elips/Del.png')} />
                    </div>
                    <div>
                        <img alt="" className='minwidth' src={require('../../../../assets/img/elips/car1.png')} />
                        <img alt="" src={require('../../../../assets/img/elips/BE.png')} />
                    </div>
                    <div>
                        <img alt="" src={require('../../../../assets/img/elips/car2.png')} />
                        <img alt="" src={require('../../../../assets/img/elips/CEel.png')} />
                    </div>
                    <div className='d992'>
                        <img alt="" src={require('../../../../assets/img/elips/moto.png')} />
                        <img alt="" src={require('../../../../assets/img/elips/Ael.png')} />
                    </div>
                </div>
                <a className="OurServices_StartTraining" href="#" onClick={props.toggleFIeldset}>Начать обучение</a>
                <p class="OurServices_RedText d575">Хочешь учиться на 5+?&nbsp;&nbsp;&nbsp;&nbsp;Тогда приходи к нам!</p>
            </div>
        </div>
    </div>
}