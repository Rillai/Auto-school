import React from 'react';
import './on-note.css';

export const OnNote = (props) => {
    return <div class="OnNote">
        <div class="OnNote_Top">
            <h1>На заметку ученику</h1>
        </div>
        <div class="OnNote_Wrapper container">
            <video className='video' loop controls>
                <source src="/avtoshkola_5+.mp4" type="video/mp4" />
            </video>
            <div class="OnNote_Container">
                <div class="OnNote_TextAlignCenter">
                    <h3>Акции</h3><br />
                    <img alt="" src={require('../../../../assets/img/Free-trial-lesson.png')} />&nbsp;&nbsp;&nbsp;
                    <img alt="" src={require('../../../../assets/img/Online-test.png')} />
                    <h3>Возьми на заметку</h3><br />
                    <img className='kartinka' alt="" src={require('../../../../assets/img/Practical_exam.png')} />
                </div>
                <h3 class="OnNote_Contacts_Logo">Мы в социальных сетях
                    <a href="https://ok.ru/group/64328421867572"><img alt="" src={require('../../../../assets/img/odnoklassniki-logo.png')} /></a>
                    <a href="https://vk.com/avtoshkola_5plus"><img alt="" src={require('../../../../assets/img/vk-logo.png')} /></a>
                    <a href="https://www.instagram.com/avtoshkola5plus/"><img alt="" src={require('../../../../assets/img/instagram-logo.png')} /></a>
                </h3>
            </div>
        </div>
    </div>
}