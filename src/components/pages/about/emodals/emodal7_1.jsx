import React, { useState } from 'react'
export function Emodal7_1(p) {
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
                <a href='/docs/Оборудовани кабинетов.rar' download><img className="Contacts_Logo" alt="file" src={require('../../../../assets/img/pdf-file.png')} />Оборудование кабинетов</a>
                </section>
                <table>
                    <tr>
                        <th>№ </th><th>По какому адресу осуществления образовательной деятельности находится оборудованный учебный кабинет</th><th>Площадь (кв. м)</th><th>Количество посадочных мест</th>
                    </tr>
                    <tr>
                        <td>1</td><td>ул. Гончарова, д. 23/11, 3 этаж</td><td>60,56</td><td>30</td>
                    </tr>
                    <tr>
                        <td>2</td><td>пр-т Гая 68/33</td><td>110,34</td><td>30</td>
                    </tr>
                    <tr>
                        <td>3</td><td>г. Ульяновск, ул.Урицкого, д.25</td><td> 60 кв.м</td><td>30</td>
                    </tr>
                    <tr>
                        <td>4</td><td>г. Ульяновск, ул.Юности, д.5</td><td>80,4 кв.м</td><td>30</td>
                    </tr>
                    <tr>
                        <td>5</td><td>г. Ульяновск, ул. Рябикова, д.75</td><td>66,46 кв.м</td><td>30</td>
                    </tr>
                    <tr>
                        <td>6</td><td>Ульяновская область, Сенгилеевский район, п.Силикатный</td><td>45 кв.м.</td><td>30</td>
                    </tr>
                </table>
            </div>
            : null}
    </div>
    )
}