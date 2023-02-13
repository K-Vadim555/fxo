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
import mem3 from './fxo-img/mem3.jpg'
import mem2 from './fxo-img/mem2.jpg'
import mem1 from './fxo-img/mem1.jpg'
import Name from './components/fxo/Name';

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
      top:'42vw',
      left:'0vw',
      zIndex: '9995'
     }}/>
     <Heart1  style={{
      position:'absolute',
      top:'38vw',
      left:'25vw',
      zIndex: '9995'
     }}/>
      <Heart1  style={{
      position:'absolute',
      top:'30vw',
      left:'85vw',
      zIndex: '9995'
     }}/>
      <Heart1  style={{
      position:'absolute',
      top:'58vw',
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
      top:'95vw',
      left:'67vw',
      zIndex: '9995'
     }}/>
      <Heart1  style={{
      position:'absolute',
      top:'90vw',
      left:'33vw',
      zIndex: '9995'
     }}/>
     <img style={{
         width:'15vw',
         position:'absolute',
         zIndex: '1195',
      top:'7vw',
      left:'70vw',
     }} src={mem3}/>
      <img style={{
      width:'35vw',
      zIndex: '1195',
      position:'absolute',
      top:'23vw',
      left:'3vw',
    }} src={mem2}/>
    <Name  text={'XO'}
      style={{
      color:'red',
      fontSize:'3vw',
      position:'absolute',
      top:'36vw',
      zIndex:'1196',
      left:'25vw',
      width:'fit-content'
      }}/>
      <Name  text={'KB'}
      style={{
      color:'red',
      fontSize:'2.5vw',
      position:'absolute',
      top:'38.5vw',
      zIndex:'1196',
      left:'25vw',
      width:'fit-content'
      }}/>
     <img style={{
      width:'40vw',
      zIndex: '1195',
      position:'absolute',
      top:'46.5vw',
      left:'56vw',
    }} src={mem1}/>
    <Name
      text={'XO'}
      style={{
      color:'red',
      fontSize:'7vw',
      position:'absolute',
      top:'7vw',
      left:'85vw',
      width:'fit-content'
    }}/>
         <Name  text={'XO'}
      style={{
      color:'red',
      fontSize:'3vw',
      position:'absolute',
      top:'51vw',
      zIndex:'1196',
      left:'64vw',
      width:'fit-content'
      }}/>
      <Name  text={'KB'}
      style={{
      color:'red',
      fontSize:'2.5vw',
      position:'absolute',
      top:'49vw',
      zIndex:'1196',
      left:'62vw',
      width:'fit-content'
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