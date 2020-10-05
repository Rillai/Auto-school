import React from 'react';
import { Content } from './content/content';
import { OurServicesTop } from './our-services/our-services-top';
import { OnNote } from './on-note/on-note';
import { Filials } from './filials/filials';
import { OurServicesBottom } from './our-services/our-services-bottom';

export const MainPage = (props) => {
    return (<div>
        <div className='contentbg'>
        <Content />
        </div>
        <OurServicesTop toggleFIeldset={props.toggleFIeldset}/>
        <OurServicesBottom />
        <OnNote />
        <Filials toggleFIeldset={props.toggleFIeldset}/>
    </div>)
}