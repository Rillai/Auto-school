import React from 'react';
import './content.css';

export const Content = (props) => {
    return <div class="Content container">
        <div class="Content_Container">
            <ul class="Content_Ul_Container">
                <h1 class="Content_Learn_Text">Получите права уже этой осенью!</h1>
                <li class="Content_Ul"><img alt="" src={require('../../../../assets/img/placeholder.png')} />
                    <span class="Content_Ul_Text">10 филиалов по Ульяновской области</span></li>
                <li class="Content_Ul"><img alt="" src={require('../../../../assets/img/Communication.png')} />
                    <span class="Content_Ul_Text">Опытные инструкторы</span></li>
                <li class="Content_Ul"><img alt="" src={require('../../../../assets/img/File.png')} />
                    <span class="Content_Ul_Text">Гарантия сдачи экзамена 90%</span></li>
            </ul>
            <div class="Content_Learn">
                <img alt="" src={require('../../../../assets/img/5+.png')} />
            </div>
        </div>
        <div class="Content_Action">
            <div class="Content_Action_Wrapper">
                <div class="Content_Action_Container">
                    <h2 class="Content_Action_Text">Антикризисное предложение</h2>
                    <p className='Content_Action_Text'>Цена действительна до 31 октября!!!</p>
                    <p class="Content_Action_Text_Caps Content_Action_Text">Стоимость обучения категории в <br/><span
                        class="Content_Action_Text_Cost">9.900</span> <strong className='uncaps'>рублей</strong></p>
                    <p class="flex"><span className='Content_Action_Text'>Успей записаться по выгодной цене и начать обучение не выходя из дома</span>
                    <img alt="clock" className='clock' src={require('../../../../assets/clock.gif')} />
                    </p>
                </div>
            </div>
        </div>
    </div>
}