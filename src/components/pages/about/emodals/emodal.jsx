import React, { useState } from 'react'
export function Emodal(p) {
    let [emodal, setModal] = useState(false);
    const toggleFIeldset = () => setModal(!emodal);
    return (<div className='margin'>
        <p className='emodal' onClick={toggleFIeldset}>{p.v}</p>
        {emodal ?
            <div>
                {p.t}
            </div>
            : null}
    </div>
    )
}