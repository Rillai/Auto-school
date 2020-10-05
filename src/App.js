import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Header } from './components/header/header';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/nav/navbar';
import { MainPage } from './components/pages/main-page/main-page';
import { Services } from './components/pages/services/services';
import { Costs } from './components/pages/costs/costs';
import { Contacts } from './components/pages/contarcts/contacts';
import { Review } from './components/pages/review/review';
import { Filial } from './components/pages/filials/filials';
import { Students } from './components/pages/students/students';
import { ModalWindow } from './components/pages/modal';
import { Category } from './components/pages/services/categories/category/category';
import { OnlineStuding } from './components/pages/Online-studing';
import { AddServices } from './components/pages/students/addServices';
import { About } from './components/pages/about/about';

const App = (props) => {
  let [isShown, setIsShown] = useState(false);
  const toggleFIeldset = () => setIsShown(!isShown);
  return (
    <div className='app-wrapper' id='top'>
      {isShown ? <ModalWindow toggleFIeldset={toggleFIeldset} /> : null}
      <div className="Background">
        <Header toggleFIeldset={toggleFIeldset} />
      </div>
      <Navbar toggleFIeldset={toggleFIeldset} />
      <div className='app-wrapper-content '>
        <Route path='/' exact render={() => <MainPage toggleFIeldset={toggleFIeldset} />} />
        <Route path='/about' exact render={() => <About />} />
        <Route path='/services' exact render={() => <Services toggleFIeldset={toggleFIeldset} />} />
        <Route path='/category' render={() => <Category toggleFIeldset={toggleFIeldset} />} />
        <Route path='/costs' exact render={() => <Costs toggleFIeldset={toggleFIeldset} />} />
        <Route path='/contacts' exact render={() => <Contacts toggleFIeldset={toggleFIeldset} />} />
        <Route path='/review' exact render={() => <Review toggleFIeldset={toggleFIeldset} />} />
        <Route path='/filials' exact render={() => <Filial toggleFIeldset={toggleFIeldset} />} />
        <Route path='/students' exact render={() => <Students toggleFIeldset={toggleFIeldset} />} />
        <Route path='/onlineStuding' exact render={() => <OnlineStuding toggleFIeldset={toggleFIeldset} />} />
        <Route path='/addServices' render={() => <AddServices toggleFIeldset={toggleFIeldset} />} />
      </div>
      <Footer />
    </div>
  );
}
export default App;
