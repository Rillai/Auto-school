import React, { useState } from 'react';
import './review.css';
import { NavLink } from 'react-router-dom';
import { Filials } from '../main-page/filials/filials';
import { OurServicesTop } from '../main-page/our-services/our-services-top';
import { Reservation } from './form';

export function Review(props) {
    const [count, setCount] = useState(1);
    function scrollTop(e) {
        const el = document.getElementById('review');
        el.scrollIntoView();
        setCount(e)
    }
    return (<div className='services'>
        <div className='category_Links container' id='review'>
            <NavLink to="/">Главная /</NavLink >
            <NavLink className="textBlue" to="/review">Отзывы</NavLink >
        </div>
        <h1 className='contacts_header'>Отзывы</h1>
        <section className='section_costs container'>
            <div className='review-and-photo_wrapper width_100'>
                <div className='review'>
                    <div className='review_wrapper'>
                        {count === 1 ? <div className='review_list_main'>
                            <div className='review_block_main'>
                                <div className='review_header'>
                                    <strong>ВЕНЕРА</strong>
                                    <b>15.08.2020 12:13</b>
                                </div>
                                <div className='content text_18px'>
                                    По советам знакомых я выбрала Автошколу 5+
                                    О чем ни сколько не жалею! Очень хочу выразить свою благодарность Екатерине Сергеевне, спасибо Вам за ВСЁ! И у Вас очень приятный голос))
                                    Еще очень главный человечек который встретился мне -это МОЙ ИНСТРУКТОР ВОДЯКОВ АНДРЕЙ! Хочу сказать что я пришла полный
                                    " ноль" к нему. Андрей вдохновил меня, были комплексы , неуверенность в себе(зачем я пошла учиться, да у меня ничего не получиться) АНДРЕЙ СПАСИБО ВАМ! ВЫ настоящий УЧИТЕЛЬ,терпелив, корректен во всем, всегда идет на помощь))) Теория и площадку я сдала с 1 раза, город с
                                    3 раза.
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="star" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="star" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="star" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="star" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="star" src={require('../../../assets/img/patric.png')} />
                                </div>
                            </div>
                            <div className='review_block_main'>
                                <div className='review_header'>
                                    <strong>Анастасия</strong>
                                    <b>14.08.2020 22:19</b>
                                </div>
                                <div className='content text_18px'>
                                    Лучшая автошкола!
                                    Когда настало время выбора, мой выбор пал на автошколу «5+». За весь период обучения я ни разу не пожалела, что выбрала именно её!
                                    Отдельное спасибо хочется сказать преподавателю теории-Екатерине Сергеевне, которая легко и понятно преподносит материал, объясняет всё очень доходчиво, разбирая все нюансы, что очень важно! Если у меня и были моменты, которые я не совсем понимала, то Екатерина Сергеевна всегда помогала и объясняла дополнительно.
                                    И, конечно же, хочу выразить огромную благодарность, лучшему инструктору - Соболеву Евгению. Могу с уверенностью сказать, что Евгений - профессионал своего дела!!! Я счастлива, что попала именно к нему! Более терпеливого, доброго и позитивного человека, я не встречала!)
                                    На каждое занятие я ходила как на праздник и с нетерпением ждала следующего! Спасибо за поддержку и веру в мои силы!)
                                    Ну и как результат качественного обучения, все экзамены были сданы с первого раза. Спасибо!
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                </div>
                            </div>
                            <div className='review_block_main'>
                                <div className='review_header'>
                                    <strong>Мадина</strong>
                                    <b>10.07.2020 11:36</b>
                                </div>
                                <div className='content text_18px'>
                                    Обучалась в автошколе в г. Димитровград на ул. Мориса - Тореза. Хочу сказать спасибо огромное учителю Римме Дмитриевне, инструктору Шавкету Виниахметовичу и секретарю Светлане. Спасибо большое за трату вашего времени и за вклад знаний. ?
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                </div>
                            </div>
                            <div className='review_block_main'>
                                <div className='review_header'>
                                    <strong>Николай(Грек)</strong>
                                    <b>22.05.2020 12:39</b>
                                </div>
                                <div className='content text_18px'>
                                    Я обучался в автошколе на ул. Шофёров. Пошёл туда по рекомендации знакомых и ни о чем не жалею. Административный состав доходчиво и качественно объясняют по любым вопросам обучения. Советую эту школу. Особое внимание хочу уделить инструктору Игорю Юрьевичу Заборову, который очень терпеливо относился к моим ошибкам за рулем и смогнаучить водить автомобиль. Он был уверен , что в сможем , верил в нас и подбадривал, настраивал что все у нас получится, все сможем! Мастер своего дела. С ним легко осваиваются все трудности , которые были при вождении. Профессионал с большим стажем. Всем рекомендую. Также благодарен инструкторам Андрею, Евгению, Сергею и Валерию, с кем мне приходилось покататься. Всем Респект!
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                </div>
                            </div>
                        </div> : null}
                        {count === 2 ? <div className='review_list_main'>
                            <div className='review_block_main'>
                                <div className='review_header'>
                                    <strong>Лена А.</strong>
                                    <b>21.05.2020 10:59</b>
                                </div>
                                <div className='content text_18px'>
                                    Проходила обучение с ноября 19г по январь 20г в филлиале на ул.Луначарского. Очень понравилась работа преподователя теории Екатерины Сергеевны: все правила, спорные и непонятные ситуации разбирала ( в т.ч. объясняла в индивидуальном порядке, затрачивая свое личное время после занятий). После обучения прошли внутренние тестироние (3 теста без ошибок) и получили допуск к сдаче теории и площадки в ГАИ. На всех этапах обучения (сдача экз, подготовка документов, консультирование) сопровождали сотрудники автошколы . Все экзамены были сданы с первой попытки, что говорит о качественной организации учебного процесса и заинтересованности в отличном результате. Отдельно хочется выразить благодарность инструктору по вождению Соболеву Евгению! Отличный профессионал своего дела, спокойный, уравновешенный,с хорошим чуством юмора, терпеливый, не молчит-обращает внимание на все ошибки и недочеты-сразу их комментирует, разъясняет как нужно правильно делать, в качестве закрепления теории давал ссылки на видео по устройству а/м, правильности и своевременности маневров и их обозначений и тп. Отличная автошкола, профессионалы в своем деле, спасибо!
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="star" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="star" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="star" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="star" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="star" src={require('../../../assets/img/patric.png')} />
                                </div>
                            </div>
                            <div className='review_block_main'>
                                <div className='review_header'>
                                    <strong>Елена</strong>
                                    <b>20.05.2020 19:02</b>
                                </div>
                                <div className='content text_18px'>
                                    Проходила обучения на Луначарского, огромное спасибо Екатерине Сергеевне за теорию (которая была сдана в гаи с первой попытки). Особая благодарнасть инструктору Соболеву Евгению за участие , терпение, юмор, доброту!
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                </div>
                            </div>
                            <div className='review_block_main'>
                                <div className='review_header'>
                                    <strong>Надежда</strong>
                                    <b>15.05.2020 13:32</b>
                                </div>
                                <div className='content text_18px'>
                                    Хочу выразить огромную благодарность автошколе в г. Димитровграде (на ул. Мориса Тореза). Светлане за доброжелательность, за терпение и информационную поддержку на весь период обучения. Педагогу Сергею Захаровичу за подробное и понятное объяснение правил ПДД и подготовку к теоретической части экзамена. Инструктору по вождению Эльдару Ронасовичу за бесконечное терпение и обучение меня за рулём. Спасибо.
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                </div>
                            </div>
                            <div className='review_block_main'>
                                <div className='review_header'>
                                    <strong>Елена</strong>
                                    <b>13.04.2020 23:54</b>
                                </div>
                                <div className='content text_18px'>
                                    Об этой школе могу писать и рассказывать много и с удовольствием! Училась на ул.Гончарова. С первой встречи (Алена привет!) и до сдачи экзаменов полное сопровождение. Очень продуманная система обучения, вождение начинается через две недели после начала теоретической части, это просто супер! Преподаватель ПДД Михаил Николаевич , спасибо огромное Вам, ну очень доходчиво и с юмором объяснял, пояснял, не уставая повторять иногда раз по 10!!!!(погонял, конечно, нас ...каждое занятие завершалось опросом! но все во благо) и старший инструктор по вождению Николай Ибраков, благодарю от души!!! (помнишь, как я на эстакаде при сдаче нажала по газам?надо же быть таким выдержанным! ) выше всяких похвал! Все экзамены сдала с первого раза, вот уж точно, автошкола на 5+. Думаю, это весомый аргумент , говорящий о высоком уровне этой АвтоШколы. Тут хочется поблагодарить весь коллектив и руководство Школы. Успехов и процветания тебе АВТО-КЛАСС!!! И, кстати, есть вкусные скидки. Рекомендую однозначно!
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                </div>
                            </div>
                        </div> : null}
                        {count === 3 ? <div className='review_list_main'>
                            <div className='review_block_main'>
                                <div className='review_header'>
                                    <strong>Александр</strong>
                                    <b>09.04.2020 13:29</b>
                                </div>
                                <div className='content text_18px'>
                                    Основным критерием выбора автошколы была возможность заниматься онлайн. Всё же смотреть обучающие ролики дома по вечерам оказалось для меня во много раз удобнее, чем отдельно ездить в общественном транспорте на лекции, отрываясь от работы. Сдав теорию с первого раза, в эффективности онлайн обучения не было никаких сомнений. Другое дело - практика. Хочется поблагодарить своего инструктора за его терпение. Стерпеть все мои ошибки на дороге, неумелые движения - как минимум не легко. В итоге, рад, что бесчисленные часы были не напрасны, все экзамены получилось сдать с первого раза. Автошкола предоставила все необходимые условия для того, чтобы начать водить автомобиль. Больше всего порадовало доброе отношение к курсантам - это самое ценное, на мой взгляд. Хотелось бы, конечно, продолжать обучение на более продвинутом уровне. Изучать нюансы управления автомобилем, повышать водительское мастерство. Однако, теперь для меня открыта дорога вперёд, к изучению и отработке профессиональных приёмов вождения. Благодарен автошколе "авто-класс" за то, что помогли сделать самый первый и самый сложный шаг в освоении управления автомобилем в городских условиях.
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                </div>
                            </div>
                            <div className='review_block_main'>
                                <div className='review_header'>
                                    <strong>Bams15</strong>
                                    <b>03.03.2020 19:05</b>
                                </div>
                                <div className='content text_18px'>
                                    Здравствуйте хочу оставить отзыв о автошколе п.Силикатый.я пришел учиться сюда по совету своего друга,он не давно обучался в ней,и порекомендовал ее мне,сказал что там очень ему понравилось.он все сдал чем остался очень доволен, сказал что это благодаря Лейсан Надировне так как она правильно и своевременно давала советы,грамотно разнесла вождения,знаете и я в этом сейчас убеждаюсь.Она очень добрая, спокойная-что нужно нам ученикам.У меня не все получается но она так объяснит что кажется что нет ничего у нее не возможного!Это придает уверенности в учебе и в дальнейшей сдаче экзаменов! СПАСИБО ЕЙ БОЛЬШОЕ!Вот есть ещё ЛЮДИ в наше не простое время!
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                </div>
                            </div>
                            <div className='review_block_main'>
                                <div className='review_header'>
                                    <strong>Полина</strong>
                                    <b>14.02.2020 16:34</b>
                                </div>
                                <div className='content text_18px'>
                                    Хочу выразить огромную благодарность автошколе 5+ в городе Димитровграде!Светлане за ее доброжелательность и четкое разъяснение всех заданных вопросов. Сергею Захаровичу за доступное объяснение теоретической части . И отдельное спасибо своему инструктору Александру Александровичу ,за терпение ,спокойствие,доброту ,отзывчивость и конечно же за знания в практике вождения ! Спасибо вам огромное !
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                </div>
                            </div>
                            <div className='review_block_main'>
                                <div className='review_header'>
                                    <strong>Иван</strong>
                                    <b>31.01.2020 19:09</b>
                                </div>
                                <div className='content text_18px'>
                                    Вчера сдал последний экзамен на права категории B. Хочу сказать огромное спасибо сотрудникам автошколы за то, что смогли обучить меня, хоть это и было нелегко. Учился я в филиале на Луначарского 18, преподаватель теоретической части, Валерий Владимирович (фамилию запамятовал к сожалению) очень хорошо и доступно объяснял все нюансы ПДД. Благодаря ему я смог сдать теоретический экзамен с первой попытки. Огромное спасибо инструкторам Евгению Соболеву, с которым я начинал практику вождения, и Игорю Заборову, с которым заканчивал, за то, что смогли помочь мне преодолеть страх перед автомобилем и научиться оценивать ситуацию на дороге. Они проделали огромную работу и смогли дать мне хорошие навыки управления автомобилем. До сих пор помню, как на первых занятиях я с испуганными глазами, вцепившись в руль и вдавив педаль газа до упора скатывался задом с эстакады. Для сравнения - экзамен в городе я сдавал в снегопад, на покрытой снегом и льдом дороге, и сдал, так что их усилия не пропали зря.
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                </div>
                            </div>
                        </div> : null}
                        {count === 4 ? <div className='review_list_main'>
                            <div className='review_block_main'>
                                <div className='review_header'>
                                    <strong>Никита</strong>
                                    <b>30.01.2020 22:46</b>
                                </div>
                                <div className='content text_18px'>
                                    Я хочу оставить свой отзыв и благодарность инструктору
                                    Игуменову Сергею Анатольевичу.
                                    Он профессионал своего дела! С ним легко и просто, и все понятно, и ничуть не страшно!
                                    Сергей Анатольевич очень ответственный. Он научил меня водить почти с нуля, не бояться машины и чувствовать себя спокойно за рулем. Каждого занятия ждал с нетерпением, ведь очень важно заниматься с желанием, а Сергей Анатольевич действительно на уроках создает дружескую и позитивную атмосферу. Ни разу не сорвался и не повысил голос, хотя поводов было немало. Несмотря на постоянную подстраховку, дает достаточную свободу в управлении автомобилем и принятии решений. Сергей Анатольевич терпеливо объясняет и учит преодолевать все допущенные ошибки, начиная от дорожных ситуаций и до того, что делать на заправке! Объясняет все очень доходчиво, повторяет до тех пор, пока уже не начнешь без подсказок правильно "видеть" дорогу, входить в повороты, замечать знаки, препятствия. Что очень важно, он верит в своих учеников. Благодаря ему я сдал все экзамены. Так что, если Вам необходимо научиться вождению смело - идите на обучение к Сергею Анатольевичу, не пожалеете никогда, будете только благодарны!!!
                                    Сергей Анатольевич! Удачи Вам, ровных дорог и способных учеников!
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                </div>
                            </div>
                            <div className='review_block_main'>
                                <div className='review_header'>
                                    <strong>Диана</strong>
                                    <b>23.01.2020 15:38</b>
                                </div>
                                <div className='content text_18px'>
                                    Спасибо автошколе 5+,название соответствует действительности,крутые преподаватели,спасибо Римме Дмитриевне,очень грамотно и доступно преподаёт теоритическую часть,Огромное спасибо Багаутдинову Шавкету за его терпение,профессионал своего дела,доходчиво обучает навыкам вождения,в общем всё понравилось,всё отлично,все только сюда ??
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                </div>
                            </div>
                            <div className='review_block_main'>
                                <div className='review_header'>
                                    <strong>Ангелина</strong>
                                    <b>17.01.2020 10:34</b>
                                </div>
                                <div className='content text_18px'>
                                    Училась в филиале на Луначарского ,Получила сегодня права , и это все благодаря Автошколе «5+»
                                    А точнее её замечательному преподавателю Екатерине Сергеевне , и самому лучшему инструктору Водякову Андрею Сергеевичу !
                                    Спасибо им огромное за их труд , нервы , знания ,которые они ежедневно вкладывают в своих учеников ! Всем рекомендую именно эту автошколу ! Вы лучшие !
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                </div>
                            </div>
                            <div className='review_block_main'>
                                <div className='review_header'>
                                    <strong>качевский иван</strong>
                                    <b>26.10.2019 16:08</b>
                                </div>
                                <div className='content text_18px'>
                                    Добрый день.Хотел сказать всем огромное спасибо, за отличную подготовку. Спасибо Вам!Учусь в заволжском районе ул.Шоферов 2.Хочу выразить огромную благодарность своему инструктору по вождению Игуменову Сергею.Сергей не давал возможности усомниться в своих силах, не смотря на то, что не всё получалось сразу. Всегда чувствовалась его поддержка! Так же на занятиях мы закрепляли полученные знания на теоретической части, но уже на реальной дороге, что способствовало моему успешному изучению материала. Индивидуальный подход к каждому учащемуся (вывод сделан на основании переговоров с другими учениками Сергея) сделал период обучения легким. Всегда можно было подстроить занятия под свой график (в моем случае это очень важно).Спасибо!
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                </div>
                            </div>
                        </div> : null}
                        {count === 5 ? <div className='review_list_main'>
                            <div className='review_block_main'>
                                <div className='review_header'>
                                    <strong>Ольга</strong>
                                    <b>17.10.2019 21:49</b>
                                </div>
                                <div className='content text_18px'>
                                    Я отучилась в автошколе 5+.Инструктор Соболев Евгений Алексеевич ☝️- мастер своего дела,объяснял все возможные ситуации,которые могут возникнуть во время вождения на машине,теоретические вопросы проходили каждый день,разбирали ошибки и ситуации.Всё было по доброму,от этого человека исходила уверенность в меня,приятно видеть когда во мне "неуверенного чайника" верят. Вот и началось вождение,сначала площадка,а потом город. Соболев Евгений Алексеевич такой весёлый,в меру добрый,если не косячишь человек.Для меня -каждый день вождения это был праздник!Он был уверен,что я все смогу,верил в меня и подбадривал,потому что были и слёзы,некоторые моменты не получались,а он настраивал,что ВСЁ ПОЛУЧИТСЯ,ВСЁ СМОГУ!Это самый лучший инструктор!Мастер своего дела!Строгость и доброта в одном человеке!С ним легко осваиваются всё трудности,которые были при вождении в машине.А ещё Он смог настроить меня,в момент мандража,перед экзаменом!))Я Благодарна о таком учении!)) От души,спасибо,за такого отличного мастера!))
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                </div>
                            </div>
                            <div className='review_block_main'>
                                <div className='review_header'>
                                    <strong>Ирина Бурова</strong>
                                    <b>05.10.2019 12:54</b>
                                </div>
                                <div className='content text_18px'>
                                Обучалась в филиале на Луначарского, замечательная Автошкола! Хочу выразить благодарность методисту Ларисе Николаевне, за индивидуальный подход, умение всегда подобрать удобное время для занятий и слова поддержки. Но самый большой вклад в моё обучение внёс мой инструктор Евгений Соболев! Спокойный, уравновешенный, всегда разбавит занятие юмором и умением внушить уверенность в себе за рулём! С ним я не боялась совершать ошибок на дороге, каждую ошибку Евгений подробно разбирает и объясняет на месте! Всегда найдет удобное время для занятий, не смотря на свой перезагруженный график! Обучение вождению, с таким инструктором, становится одним удовольствием! 
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                </div>
                            </div>
                            <div className='review_block_main'>
                                <div className='review_header'>
                                    <strong>Ольга Четкасова</strong>
                                    <b>16.09.2019 11:35</b>
                                </div>
                                <div className='content text_18px'>
                                Отучилась в этой автошколе, впечатления только положительные! Не пожалела,что пришла именно сюда. Огромное спасибо моему преподавателю по теории Римме Дмитриевне, все грамотно и четко объясняла, разбирала различные ситуации на дорогах. И, конечно же, огромное спасибо моему инструктору по вождению - Багаутдинову Шавкету, за его безграничное терпение, за умение все доходчиво объяснить на дороге и поддержку. Так же хочется поблагодарить Сергея Вениаминовича за его профессионализм ))) Вы лучшие!!!!!! 
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                </div>
                            </div>
                            <div className='review_block_main'>
                                <div className='review_header'>
                                    <strong>Анастасия</strong>
                                    <b>29.08.2019 13:33</b>
                                </div>
                                <div className='content text_18px'>
                                Хочу сказать большое спасибо за обучение, в особенности хочу поблагодарить своего инструктора Ирину Леонидовну !!!! Обучает вождению на 5+, индивидуальный подход. Я в восторге, очень рекомендую!
С уважением Колесникова Анастасия! 
                                </div>
                                <div className='review_footer'>
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                    <img className='review_img' alt="" src={require('../../../assets/img/patric.png')} />
                                </div>
                            </div>
                        </div> : null}
                        <div className='review_bottom review_bottom_main'>
                            <span onClick={() => scrollTop(1)}>1</span>
                            <span onClick={() => scrollTop(2)}>2</span>
                            <span onClick={() => scrollTop(3)}>3</span>
                            <span onClick={() => scrollTop(4)}>4</span>
                            <span onClick={() => scrollTop(5)}>5</span>
                        </div>
                    </div>
                </div>
            </div>
            <Reservation />
        </section>
        <div className='awards_container'>
            <div className='container'>
                <img alt="award" src={require('../../../assets/img/award_1.png')} />
                <img alt="award" src={require('../../../assets/img/award_2.png')} />
                <img alt="award" src={require('../../../assets/img/award_3.png')} />
            </div>
        </div>
        <OurServicesTop toggleFIeldset={props.toggleFIeldset} />
        <Filials toggleFIeldset={props.toggleFIeldset} />
    </div>)
}