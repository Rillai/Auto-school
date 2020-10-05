import React, { useState } from 'react'
export function Emodal7_3(p) {
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
                    <a href='/docs/Приказ_о_проведении_практических_занятий.pdf' download><img className="Contacts_Logo" alt="file" src={require('../../../../assets/img/pdf-file.png')} />Объекты для проведения практических занятий</a>
                    <a href='/docs/Договор_организации_питания.pdf' download><img className="Contacts_Logo" alt="file" src={require('../../../../assets/img/pdf-file.png')} />Договор организации питания</a>
                </section>
                <table>
                    <tr>
                        <th>№ </th><th>По какому адресу осуществления образовательной деятельности находится оборудованный учебный кабинет</th><th>Площадь (кв. м)</th><th>Количество посадочных мест</th>
                    </tr>
                    <tr>
                        <td>1</td><td>г.Димитровград, ул.Куйбышева д.32</td><td>61,70</td><td>30</td>
                    </tr>
                </table>
            </div>
            : null}
    </div>
    )
}