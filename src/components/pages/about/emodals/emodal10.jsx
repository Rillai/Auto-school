import React, { useState } from 'react'
export function Emodal10(p) {
    let [emodal, setModal] = useState(false);
    const toggleFIeldset = () => setModal(!emodal);
    return (<div className='margin noborder'>
        <p className='emodal' onClick={toggleFIeldset}>{p.v}</p>
        {emodal ? <div><section className='docs'>
            <a href={p.href} download ><img className="Contacts_Logo" alt="file" src={require('../../../../assets/img/pdf-file.png')} />{p.v}</a>
        </section></div> : null}
    </div>
    )
}