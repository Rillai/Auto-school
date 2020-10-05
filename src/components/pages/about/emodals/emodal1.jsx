import React, { useState } from 'react'
export function Emodal1(p) {
    let [emodal, setModal] = useState(false);
    const toggleFIeldset = () => setModal(!emodal);
    return (<div className='margin'>
        <p className='emodal' onClick={toggleFIeldset}>{p.v}</p>
        {emodal ?
            <div>
                <table>
                    <tr>
                        <td>Дата создания:</td><td>{p.t1}</td>
                    </tr>
                    <tr>
                        <td>Учредители:</td><td>{p.t2}</td>
                    </tr>
                    <tr>
                        <td>Директор:</td><td>{p.t3}</td>
                    </tr>
                    {p.d === 1 ? <tr>
                        <td>Заместитель директора:</td><td>{p.t33}</td>
                    </tr> : null}
                    <tr>
                        <td>Место нахождения:</td><td>{p.t4}</td>
                    </tr>
                    <tr>
                        <td>Филиалы:</td><td>{p.t5}{p.f === 1 ? <> <br />{p.f2}<br />{p.f3}<br />{p.f4}<br />{p.f5} </> : null} </td>
                    </tr>
                    <tr>
                        <td>Режим работы:</td><td>{p.t6}</td>
                    </tr>
                    <tr>
                        <td>График работы:</td><td>{p.t7}</td>
                    </tr>
                    <tr>
                        <td>Телефон:</td><td>{p.t8}<br />{p.t82}</td>
                    </tr>
                    <tr>
                        <td>Адрес сайта:</td><td>{p.t9}</td>
                    </tr>
                    <tr>
                        <td>Эл.почта:</td><td>{p.t10}</td>
                    </tr>
                </table>
            </div>
            : null}
    </div>
    )
}