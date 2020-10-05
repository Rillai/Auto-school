import React, { useState } from 'react'
import { Emodal2_1 } from './emodal2_1';
export function Emodal2(p) {
    let [emodal, setModal] = useState(false);
    const toggleFIeldset = () => setModal(!emodal);
    return (<div className='margin'>
        <p className='emodal' onClick={toggleFIeldset}>{p.v}</p>
        {emodal ?
            <div className='emodal2'>
                <h1>Структура и органы управления образовательной организацией </h1>
                <>
                    <h2>Управление организацией осуществляется директором единолично</h2>
                    <img src={require('../../../../assets/img/Struktura.jpg')} />
                </>
                <strong>{p.n}</strong>
                {p.filials === 1 ? <>
                    <Emodal2_1 v={'г. Димитровград, ул. Мориса Тореза, дом 9'} t1={'Шабаев Марат Ракибович '} t2={'avto.lajn@yandex.ru'} />
                </> : null}
                {p.filials === 2 ? <>
                    <Emodal2_1 v={'ул. Гончарова, д. 23/11'} d={1} t1={'Титова Елена Геннадьевна'} t2={'г. Ульяновск, ул. Гончарова, д. 23/11, 7 этаж'} d={1} t3={'8-917-618-55-55'} t33={'733-633'} t4={'http://avto-shkola.net/'} t5={'uchebnii_centr@mail.ru'} />
                    <Emodal2_1 v={'ул. Луначарского,18'} t1={'Пирогова Лариса Николаевна'} t2={'г. Ульяновск, Луначарского,18'} t3={'733-580'} t4={'http://avto-shkola.net/'} t5={'uchebnii_centr@mail.ru'} />
                    <Emodal2_1 v={'ул. Шоферов, д.2'} t1={'Тузова Алла Николаевна'} t2={'г. Ульяновск, ул. Шоферов, д.2'} t3={'712-322'} t4={'http://avto-shkola.net/'} t5={'uchebnii_centr@mail.ru'} />
                    <Emodal2_1 v={'ул. Юности, д. 5'} t1={'Насырова Фаина Анасовна'} t2={'г. Ульяновск, ул. Юности, д. 5'} t3={'46-95-31'} t4={'http://avto-shkola.net/'} t5={'uchebnii_centr@mail.ru'} />
                    <Emodal2_1 v={'ул. Урицкого, д.23'} t1={'Ивахина Альбина Даниловна'} t2={'ул. Урицкого, д.23 '} t3={'46-07-07'} t4={'http://avto-shkola.net/'} t5={'uchebnii_centr@mail.ru'} />
                    <Emodal2_1 v={'ул. Рябикова, д. 75'} t1={'Фадеева Галина Николаевна'} t2={'ул. Рябикова, д. 75 '} t3={'766-740'} t4={'http://avto-shkola.net/'} t5={'uchebnii_centr@mail.ru'} />
                    <Emodal2_1 v={'р. п. Силикатный, ул. Заводская, д. 1'} t1={'Сарафанова Лейсан Надировна'} t2={'Ульяновская область, Сенгилеевский район, р. п. Силикатный, ул. Заводская, д. 1'} t3={'8-937-452-40-93'} t4={'http://avto-shkola.net/'} t5={'uchebnii_centr@mail.ru'} /> </> : null}
            </div>
            : null}
    </div>
    )
}