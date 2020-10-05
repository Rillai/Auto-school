import React, { useState } from 'react'
export function Emodal3(p) {
    let [emodal, setModal] = useState(false);
    const toggleFIeldset = () => setModal(!emodal);
    let doc = p.docs.filter(p => p.id <= 5).map(p => <a href={p.href} download><img className="Contacts_Logo" alt="file" src={require('../../../../assets/img/pdf-file.png')} />{p.name}</a>);
    let doc1 = p.docs.filter(p => p.id > 5 && p.id < 19).map(p => <a href={p.href} download><img className="Contacts_Logo" alt="file" src={require('../../../../assets/img/pdf-file.png')} />{p.name}</a>);
    let doc2 = p.docs.filter(p => p.id > 18 && p.id < 20).map(p => <a href={p.href} download><img className="Contacts_Logo" alt="file" src={require('../../../../assets/img/pdf-file.png')} />{p.name}</a>);
    let doc3 = p.docs.filter(p => p.id > 19).map(p => <a href={p.href} download><img className="Contacts_Logo" alt="file" src={require('../../../../assets/img/pdf-file.png')} />{p.name}</a>);
    return (<div className='margin'>
        <p className='emodal' onClick={toggleFIeldset}>{p.v}</p>
        {emodal ?
            <div>
                <section className='docs'>
                    {doc}
                    <div>
                        {doc1}
                    </div>
                    {doc2}
                    <div>
                        {doc3}
                    </div>
                </section>
            </div>
            : null}
    </div>
    )
}