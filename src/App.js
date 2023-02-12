import React, { useEffect, useState } from 'react';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import './App.scss';
import { Link } from 'react-router-dom';
import 'normalize.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Page from './Page';
import { Button } from '@mui/material';
import LastMainSection from './components/main/LastMainSection';
import N1 from './components/main/pages/N1';
import Page1 from './components/main/pages/Page1';
import Page2 from './components/main/pages/Page2';
import Page3 from './components/main/pages/Page3';
import Page4 from './components/main/pages/Page4';
import Page5 from './components/main/pages/Page5';
import Page6 from './components/main/pages/Page6';
import { useTranslation } from 'react-i18next';
import ScrollToTop from './components/ScrollToTop';
import Heart from './components/fxo/Heart';
import half from './fxo-img/half.png'
import Popup from './components/popup/Popup';
import Heart1 from './components/fxo/Heart1';

function App() {
  const [posts, setPosts] = useState( [
    {id: 1,
      img1:'./img/A.png',
      img:'/img/Rectangle\ 8\ \(1\).png',
      title:'Кипр ',
      content: 'Курица, томаты,красный перец зелень соус “Мимино” гурзинские приправы'
     },
     {id: 2,
     
       img:'./img/Rectangle\ 8\ \(2\).png',
       title:'ОАЭ ',
       content: 'Курица, томаты,красный перец зелень соус “Мимино” гурзинские приправы'
      },
      {id: 3,
       
       img:'./img/Rectangle\ 8\ \(3\).png',
      title:'Россия ',
      content: 'Курица, томаты,красный перец зелень соус “Мимино” гурзинские приправы'
      },
      {id: 4,
       
        img:'./img/Rectangle\ 9\.png',
       title:'Португалия ',
       content: 'Курица, томаты,красный перец зелень соус “Мимино” гурзинские приправы'
       },
       {id: 5,
       
        img:'./img/Rectangle\ 8\ \(4\).png',
       title:'Индонезия',
       content: 'Курица, томаты,красный перец зелень соус “Мимино” гурзинские приправы'
       },
       {id: 6,
      
        img:'/img/Rectangle\ 9\.png',
       title:'Новая страна скоро',
       content: 'Курица, томаты,красный перец зелень соус “Мимино” гурзинские приправы'
       }
  ])
  let [ok, setok] = useState({color:'black'})
  let okk = () => {
     setok({color:'while '})
  }
  const { t, i18n } = useTranslation();


  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const changebtns = <>
  <Button  sx={{
                fontSize:'1.3vw',
                lineHeight:'0',
                width:'5vw',
                minWidth:'3vw',
                padding:'1vw'
                }} onClick={() => changeLanguage("en")}>EN</Button>
   <Button sx={{fontSize:'1.3vw',
             lineHeight:'0',
             width:'5vw',
             minWidth:'3vw',
             padding:'1vw'
            }} onClick={() => changeLanguage("ru")}>RU</Button>
 
  </> 
 return (
    <div className="App">
     
     <BrowserRouter>
     <ScrollToTop/>
     <Header/>
      <Heart1  style={{
      position:'absolute',
      top:'2vw',
      left:'10vw',
      zIndex: '9995'
     }}/>
      <Heart1  style={{
      position:'absolute',
      top:'10vw',
      left:'90vw',
      zIndex: '9995'
     }}/>
      <Heart  style={{
      position:'absolute',
      top:'15vw',
      left:'70vw',
      zIndex: '9995'
     }}/>
     <Heart  style={{
      position:'absolute',
      top:'7vw',
      left:'23vw',
      zIndex: '9995'
     }}/>
     <Heart  style={{
      position:'absolute',
      top:'30vw',
      left:'0vw',
      zIndex: '9995'
     }}/>
     <Heart1  style={{
      position:'absolute',
      top:'30vw',
      left:'25vw',
      zIndex: '9995'
     }}/>
      <Heart1  style={{
      position:'absolute',
      top:'40vw',
      left:'80vw',
      zIndex: '9995'
     }}/>
      <Heart1  style={{
      position:'absolute',
      top:'50vw',
      left:'10vw',
      zIndex: '9995'
     }}/>
      <Heart  style={{
      position:'absolute',
      top:'70vw',
      left:'30vw',
      zIndex: '9995'
     }}/>
      <Heart1  style={{
      position:'absolute',
      top:'0vw',
      left:'63vw',
      zIndex: '9995'
     }}/>
      <Heart1  style={{
      position:'absolute',
      top:'90vw',
      left:'0vw',
      zIndex: '9995'
     }}/>
      <Heart  style={{
      position:'absolute',
      top:'70vw',
      left:'83vw',
      zIndex: '9995'
     }}/>
      <Heart1  style={{
      position:'absolute',
      top:'60vw',
      left:'72vw',
      zIndex: '9995'
     }}/>
      <Heart1  style={{
      position:'absolute',
      top:'80vw',
      left:'67vw',
      zIndex: '9995'
     }}/>
      <Heart1  style={{
      position:'absolute',
      top:'90vw',
      left:'33vw',
      zIndex: '9995'
     }}/>

    <Popup buttonText={<><img  src={half}/> <p> XO , click me :)</p></>}/>
    
   
     <Heart  style={{
        zIndex: '9995'
     }}/>
     <Page1 posts={posts}  />
     
  
    
     
  
   
  </BrowserRouter>
      
   
    </div>
  );
}

export default App;