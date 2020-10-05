import React, { useState } from 'react'
export function Emodal6(p) {
    let [emodal, setModal] = useState(false);
    const toggleFIeldset = () => setModal(!emodal);
    return (<div className='margin'>
        <p className='emodal' onClick={toggleFIeldset}>{p.v}</p>
        {emodal ?
            <div className='leadership'>
                <h1>Руководство. Педагогический (научно-педагогический) состав </h1>
                <p><strong>Директор:</strong> {p.n}</p>
                <p><strong>Тел:</strong> {p.t}</p>
                <p><strong>Эл.почта:</strong> {p.e}</p>
                <section className='docs'>
                    <a href={p.href1} download><img className="Contacts_Logo" alt="file" src={require('../../../../assets/img/pdf-file.png')} />Сведения о преподавателях учебных предметов</a>
                    <a href={p.href2} download><img className="Contacts_Logo" alt="file" src={require('../../../../assets/img/pdf-file.png')} />Сведения о мастерах производственного обучения</a>
                </section>
            </div>
            : null}
    </div>
    )
}