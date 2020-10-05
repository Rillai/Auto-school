import React, { useState } from 'react'
export function Emodal2_1(p) {
    let [emodal, setModal] = useState(false);
    const toggleFIeldset = () => setModal(!emodal);
    return (<div className='margin noborder'>
        <p className='emodal' onClick={toggleFIeldset}>{p.v}</p>
        {emodal ?
                <table>
                    <tr>
                        <td>Руководитель структурного подразделения:</td><td>{p.t1}</td>
                    </tr>
                    <tr>
                        <td>Место нахождения:</td><td>{p.t2}</td>
                    </tr>
                    <tr>
                        <td>Телефон:</td><td>{p.t3}{p.d === 1 ? <>{p.t33}</> : null}</td>
                    </tr>
                    <tr>
                        <td>Сайт:</td><td>{p.t4}</td>
                    </tr>
                    <tr>
                        <td>E-mail:</td><td>{p.t5}</td>
                    </tr>
                </table>
            : null}
    </div>
    )
}