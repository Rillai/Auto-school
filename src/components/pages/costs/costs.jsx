import React from 'react';
import './costs.css';
import { NavLink } from 'react-router-dom';
import { Filials } from '../main-page/filials/filials';
import { OurServicesTop } from '../main-page/our-services/our-services-top';

export const Costs = (props) => {
    return (<div className='services'>
        <div className='category_Links container'>
            <NavLink to="/">Главная /</NavLink >
            <NavLink className="textBlue" to="/costs">Цены</NavLink >
        </div>
        <h1 className='margin-top-40px'>Цены</h1>
        <section className='section_costs container'>
            <div className='flex-container-between'>
                <div className='calendar_container'>
                    <img alt="" src={require('../../../assets/img/calendar.png')} />
                    <div className='calendar_container_p'>
                        <p>Информация обновлена:</p>
                        <p className='textRed'>04 января 2020 года</p>
                    </div>
                </div>
                <div className='margin-bottom'>
                    <div className='file'>
                        <img alt="" src={require('../../../assets/img/pdf-file.png')} />
                    </div>
                    <strong><a href='/' download=''>Приказ о стоимости обучения</a></strong>
                </div>
            </div>
            <table className='table_costs'>
                <tr className='table_top'><td className='table_top'><span className='d440'>Номер</span></td><td className='table_top'>Услуга</td><td className='table_top'>Цена<br />(руб.)</td></tr>
                <tr><td>1</td><td><span className='textBlue'>Подготовка</span> водителей на категорию  "А"</td><td>8000*</td></tr>
                <tr><td>2</td><td><span className='textBlue'>Подготовка</span> водителей на категорию  «М» и "A1"</td><td>6000*</td></tr>
                <tr><td>3</td><td><span className='textBlue'>Профессиональная подготовка</span> водителей ТС категории «В» с МКП</td><td>10000*</td></tr>
                <tr><td>4</td><td><span className='textBlue'>Профессиональная подготовка</span> водителей ТС категории «В» с АКП</td><td>10000*</td></tr>
                <tr><td>5</td><td><span className='textBlue'>Профессиональная подготовка</span> водителей ТС категории «В» с учетом ГСМ механика/автомат</td><td>25000/26000</td></tr>
                <tr><td>6</td><td><span className='textBlue'>Профессиональная подготовка</span> водителей ТС категории «C»</td><td>12000*</td></tr>
            </table>
            <table className='table_costs'>
                <tr><td>7</td><td><span className='textАzure'>Переподготовка</span> водителей на категорию с «В» на  «D»</td><td>12000*</td></tr>
                <tr><td>8</td><td><span className='textАzure'>Переподготовка</span> водителей на категорию с «C» на  «D»</td><td>12000*</td></tr>
                <tr><td>9</td><td><span className='textАzure'>Переподготовка</span> водителей на категорию с «В» на «С»</td><td>12000*</td></tr>
                <tr><td>10</td><td><span className='textАzure'>Переподготовка</span> водителей на категорию с «С» на «В»</td><td>10000*</td></tr>
                <tr><td>11</td><td><span className='textАzure'>Переподготовка</span> водителей на категорию с «В» на  «Е»</td><td>12000*</td></tr>
                <tr><td>12</td><td><span className='textАzure'>Переподготовка</span> водителей на категорию с «С» на «Е»</td><td>12000*</td></tr>
            </table>
            <table className='table_costs'>
                <tr><td>13</td><td><span className='textАzure'>Профессиональная переподготовка</span> с присвоением квалификации ответственного за безопасность дорожного движения в объеме 256 часов</td><td>Договорная</td></tr>
                <tr><td>14</td><td><span className='textАzure'>Профессиональная переподготовка</span> контролеров технического состояния автотранспортных средств в объеме 252 часа</td><td>Договорная</td></tr>
                <tr><td>15</td><td><span className='textАzure'>Профессиональная переподготовка</span> с присвоением квалификации диспетчера автомобильного и городского наземного электрического транспорта в объеме 253 часа</td><td>Договорная</td></tr>
                <tr><td>16</td><td><span className='textBlue'>Подготовка</span> наставников водителей автомобилей, 32 часа</td><td>1000</td></tr>
                <tr><td>17</td><td>Повышение квалификации водителей для работы на ГБА, 40 часов</td><td>400</td></tr>
                <tr><td>18</td><td>Ежегодные занятия с водителями ТС, 20 часов</td><td>300</td></tr>
            </table>
            <table className='table_costs'>
                <tr><td>19</td><td><span className='textАzure'>Переподготовка</span> специалистов для приобретения квалификации по вопросам безопасности перевозки опасных грузов, 268 часов</td><td>Договорная</td></tr>
                <tr><td>20</td><td><span className='textАzure'>Переподготовка</span> водителей для перевозки опасного груза</td><td>Договорная</td></tr>
                <tr><td>21</td><td>Ответственный за перевозку опасного груза, 60 часов</td><td>Договорная</td></tr>
            </table>
            <table className='table_costs'>
                <tr><td>22</td><td>Программа повышения квалификации преподавателей и мастеров
                производственного обучения вождению по подготовке водителей
                транспортных средств, не имеющих базового педагогического образования по
                                    программе:  «Педагогика и методика профессионального обучения», 250 часов</td><td>Договорная</td></tr>
                <tr><td>23</td><td>Повышение квалификации мастеров производственного обучения вождению транспортных средств, 145 часов</td><td>Договорная</td></tr>
                <tr><td>24</td><td><span className='textBlue'>Подготовка</span> водителей к управлению ТС, оборудованными устройствами для подачи специальных световых и звуковых сигналов, 36 часов</td><td>Договорная</td></tr>
                <tr><td>25</td><td>Повышение квалификации преподавателей, осуществляющих подготовку водителей ТС, 106 часов</td><td>Договорная</td></tr>
                <tr><td>26</td><td><span className='textBlue'>Подготовка и переподготовка</span> специалистов по безопасности движения на автомобильном и городском электротранспорте в объеме 48 часов</td><td>Договорная</td></tr>
                <tr><td>27</td><td><span className='textBlue'>Квалификационная подготовка</span> по организации перевозок автомобильным транспортом в пределах Российской Федерации в объеме 82 часа</td><td>Договорная</td></tr>
            </table>
            <table className='table_costs'>
                <tr><td>28</td><td><span className='textDarkRed'>Восстановление утраченных навыков по вождению:</span><br /> водителей на категорию  "А"</td><td>500**</td></tr>
                <tr><td>29</td><td><span className='textDarkRed'>Восстановление утраченных навыков по вождению:</span><br /> водителей ТС категории «В» с МКП</td><td>500</td></tr>
                <tr><td>30</td><td><span className='textDarkRed'>Восстановление утраченных навыков по вождению:</span><br /> водителей ТС категории «В» с АКП</td><td>500</td></tr>
                <tr><td>31</td><td><span className='textDarkRed'>Восстановление утраченных навыков по вождению:</span><br /> водителей ТС категории «C» с АКП</td><td>800</td></tr>
                <tr><td>32</td><td><span className='textDarkRed'>Восстановление утраченных навыков по вождению:</span><br /> водителей ТС категории «D» с АКП</td><td>1000</td></tr>
                <tr><td>33</td><td><span className='textDarkRed'>Восстановление утраченных навыков по вождению:</span><br /> водителей ТС категории «BE» с АКП</td><td>600</td></tr>
                <tr><td>34</td><td><span className='textDarkRed'>Восстановление утраченных навыков по вождению:</span><br /> водителей ТС категории «CE» с АКП</td><td>1000</td></tr>
            </table>
            <table className='table_costs'>
                <tr><td>36</td><td><span className='textLightRed'>Обучение вождению курсантов:</span><br /> водителей на категорию  "А"</td><td>250</td></tr>
                <tr><td>37</td><td><span className='textLightRed'>Обучение вождению курсантов:</span><br /> водителей ТС категории «В» с МКП</td><td>300</td></tr>
                <tr><td>38</td><td><span className='textLightRed'>Обучение вождению курсантов:</span><br /> водителей ТС категории «В» с АКП</td><td>325</td></tr>
                <tr><td>40</td><td><span className='textLightRed'>Обучение вождению курсантов:</span><br /> водителей на категорию  "C"</td><td>400</td></tr>
                <tr><td>41</td><td><span className='textLightRed'>Обучение вождению курсантов:</span><br /> водителей на категорию  "D"</td><td>600</td></tr>
                <tr><td>42</td><td><span className='textLightRed'>Обучение вождению курсантов:</span><br /> водителей на категорию  "BE"</td><td>300</td></tr>
                <tr><td>43</td><td><span className='textLightRed'>Обучение вождению курсантов:</span><br /> водителей на категорию  "CE"</td><td>500</td></tr>
            </table>
            <table className='table_costs'>
                <tr><td>44</td><td><span className='textOrange'>Выдача дубликата удостоверения:</span><br /> - Категории «А», «В», «С», «D», «Е»</td><td>1000</td></tr>
                <tr><td>45</td><td><span className='textOrange'>Выдача дубликата удостоверения:</span><br />- Спец. программы: «ТМ», «ГБА», «ВН»</td><td>100</td></tr>
                <tr><td>46</td><td><span className='textOrange'>Выдача дубликата удостоверения:</span><br /> - Спец. программы: «БД», «КТ», «ДС»"</td><td>500</td></tr>
            </table>
            <table className='table_costs'>
                <tr><td>47</td><td>Предоставление л/а автомобиля на пересдачу экзамена в ГИБДД кат «В»</td><td>1 этап 1000**</td></tr>
                <tr><td>48</td><td>Предоставление г/а автомобиля на пересдачу экзамена в ГИБДД кат «ВЕ»</td><td>1 этап 1100**</td></tr>
                <tr><td>49</td><td>Предоставление мотоцикла на пересдачу экзамена в ГИБДД кат «A»</td><td>1 этап 300**</td></tr>
                <tr><td>50</td><td>Предоставление г/а автомобиля на пересдачу экзамена в ГИБДД кат «С»</td><td>1 этап 1100**</td></tr>
                <tr><td>51</td><td>Предоставление г/а автомобиля на пересдачу экзамена в ГИБДД кат «СЕ»</td><td>1 этап 1100**</td></tr>
                <tr><td>52</td><td>Предоставление автобуса на пересдачу экзамена в ГИБДД кат «D»</td><td>1 этап 1100**</td></tr>
                <tr><td>53</td><td>Предоставление л/а автомобиля на пересдачу экзамена в ГИБДД кат «B» для курсантов сторонних автошкол</td><td>1 этап 1500**</td></tr>
                <tr><td>54</td><td>Предоставление автомобиля на пересдачу экзамена в ГИБДД кат «BЕ» для курсантов сторонних автошкол</td><td>1 этап 1500**</td></tr>
                <tr><td>55</td><td>Предоставление мотоцикла на пересдачу экзамена в ГИБДД кат «A» для курсантов сторонних автошкол</td><td>1 этап 1000**</td></tr>
                <tr><td>56</td><td>Предоставление г/а автомобиля на пересдачу экзамена в ГИБДД кат «С» для курсантов сторонних автошкол </td><td>1 этап 1500**</td></tr>
                <tr><td>57</td><td>Предоставление г/а автомобиля на пересдачу экзамена в ГИБДД кат «СЕ» для курсантов сторонних автошкол </td><td>1 этап 1500**</td></tr>
                <tr><td>58</td><td>Предоставление автобуса на пересдачу экзамена В ГИБДД кат «D» для курсантов сторонних автошкол</td><td>1 этап 1500**</td></tr>
            </table>
            <table className='table_costs'>
                <tr><td>59</td><td><span className='textBlue'>Прием</span> повторных внутренних экзаменов</td><td>100</td></tr>
            </table>
            <p className='textRed cost_p margin-top-40px'>*- стоимость обучения указана без учета стоимости ГСМ</p>
            <p className='textRed cost_p margin-bottom-50px'>**-стоимость обучения указана с учетом стоимости ГСМ</p>
            <a className="OurServices_StartTraining" onClick={props.toggleFIeldset} href="#">Начать обучение</a>
        </section>
        <OurServicesTop toggleFIeldset={props.toggleFIeldset}/>
        <Filials toggleFIeldset={props.toggleFIeldset}/>
    </div>)
}