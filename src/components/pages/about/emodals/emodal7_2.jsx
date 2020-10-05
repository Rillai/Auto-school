import React, { useState } from 'react'
export function Emodal7_2(p) {
    let [emodal, setModal] = useState(false);
    const toggleFIeldset = () => setModal(!emodal);
    return (<div className='margin noborder'>
        <p className='emodal' onClick={toggleFIeldset}>Материально-техническое обеспечение и оснащенность образовательного процесса</p>
        {emodal ?
            <div className='security'>
                <h1>Материально-техническое обеспечение и оснащенность образовательного процесса</h1>
                <p>Имеется доступ к информационным системам и информационно-телекоммуникационным сетям.</p>
                <p><strong>Электронные образовательные ресурсы:</strong></p>
                <p>Интерактивная мультимедийная программа для подготовки водителей транспортных средств «Автополис-Медиа».</p>
                <section className='docs'>
                    <a href='/docs/Приказ о проведении практических занятий по обучению вождению.rar' download><img className="Contacts_Logo" alt="file" src={require('../../../../assets/img/pdf-file.png')} />Приказ о проведении практических занятий по обучению вождению</a>
                    <a href='/docs/Договор_мед.обслуж.rar' download><img className="Contacts_Logo" alt="file" src={require('../../../../assets/img/pdf-file.png')} />Договор медицинского обслуживания</a>
                    <a href='/docs/дог.питания.zip' download><img className="Contacts_Logo" alt="file" src={require('../../../../assets/img/pdf-file.png')} />Договор организации питания</a>
                    <a href='/docs/Оборудование учебного кабинета №1 Автолайн-профи.pdf' download><img className="Contacts_Logo" alt="file" src={require('../../../../assets/img/pdf-file.png')} />Оборудование учебного кабинета №1 Автолайн-профи</a>
                </section>
                <table>
                    <tr>
                        <th>№ </th><th>По какому адресу осуществления образовательной деятельности находится оборудованный учебный кабинет</th><th>Площадь (кв. м)</th><th>Количество посадочных мест</th>
                    </tr>
                    <tr>
                        <td>1</td><td>Ульяновская обл., г.Димитровград, ул. Мориса Тореза, д.9</td><td>53,59 кв.м</td><td>30</td>
                    </tr>
                </table>
            </div>
            : null}
    </div>
    )
}