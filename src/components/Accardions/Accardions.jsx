import React, {useState} from 'react';
import { Link , useParams } from "react-router-dom";
import '../main/pages/pages.scss'
import '../Accaordion2/accaordionPage.scss'
import ico from '../../img/ICO.svg'
import icon from '../../img/ICON (1).svg'
import icon2 from '../../img/ICON (2).svg'
import icon3 from '../../img/ICON (3).svg'
import icon4 from '../../img/ICON (4).svg'
import icon5 from '../../img/ICON (5).svg'
import img1 from '../../img/A.png'
import photo from '../../img/PHOTO.png'

import fon from '../../img/Rectangle 20.png'
import fonPublic from '../../img/BLUR_BG.png'
import sec1 from '../../img/Rectangle 21.png'
import sec2 from '../../img/ИНФОРМАЦИЯ СКОРО.png'
import hotel from '../../fxo-img/comrat.jpg'
import { useTranslation } from 'react-i18next';
import Acc from '../Accaordion2/Acc';
import Popup from '../popup/Popup';
import XO from '../../fxo-img/XO.jpg'
import KB from '../../fxo-img/KB.jpg'
import y1 from '../../fxo-img/y1.jpg'
import y2 from '../../fxo-img/y2.jpg'
import y3 from '../../fxo-img/y3.jpg'
import y4 from '../../fxo-img/y4.jpg'

export default function Accardions() {
            {/*---------------- функция , чтобы открывать сохдаваемые посты  -------------------------*/ }
            let params = useParams()
            let getpostid = (id, posts) => {
               
            }
            
        
        
             const { t, i18n } = useTranslation();
             let [dat, setdat] = useState([
                {
                    id:1, 
                    data:'8 ЯНВАРЯ',
                    img:'',
                    title:'ПЕРВОЕ СОБЫТИЕ',
                    content:'4rc',
        
                },
                {
                    id:2,
                    img:'',
                    data:'25 ФЕВРАЛЯ ',
                    title:'ВТОРОЕ СОБЫТИЕ',
                    content:'c4rc4',
        
                },
                {
                    id:3,
                    img:'',
                    data:'21 СЕНТЯБРЯ',
                    title:'ТРЕТЬЕ СОБЫТИЕ',
                    content:'c4rc4',
        
                },
                {
                    id:4,
                    img:'',
                    data:'21 СЕНТЯБРЯ',
                 
                    title:'ЧЕТВЕРТОЕ СОБЫТИЕ',
                    content:'c4rc4',
        
                },
                {
                    id:5,
                    img:'',
                    data:'13 ФЕВРАЛЯ 2023',
                    title:'ПЯТОЕ СОБЫТИЕ',
                    content:'',
        
                },
               
                
             ])
             let l = dat.map(da => 
                <div key={da.id} className="public">
                  <div className="">
                    <p className='public-data'>{t(da.data)}</p> 
                  </div>
                     
                  
               
               
                <div className="public-div2"> 
                 <p className='public-title'>{t(da.title)}</p>
               
                </div>
                
                </div>
                
                )
  return (
   
          <div  className="accordions">
                <Acc
                 style={'acc'}
             title={'История'}
             content={<>
             {l}
             </>}
             img={ico}
            
                />
                 <Acc
                  style={'acc'}
             title={t('artists')}
             content={<div className='fon-wr'>
             <img className='fon' src={KB}></img>
             <img className='fon' src={XO}></img>
             </div>}
             img={icon}
            
                />
                   <Acc
                    style={'acc'}
             title={'Билеты в ...'}
             content={<>
             <p className='ticet-title'>Билеты в пронто заказаны на 15:00 </p>
                <p className='ticet-content'>Буду ждать</p>
             
             
             </>}
             img={icon2}
            
                />
                   <Acc
                    style={'acc'}
             title={'РАСПИСАНИЕ'}
             content={
             <div className='rasp'>
               <p>15:00 - PRONTO</p> 
               <p>17:00 - КАУФЛЭЭЭЭЭЭНД ЗА пончиками</p> 
               <p>19:00 - TOM-TOM</p> 
               <p>20:00 - evya/acasa/home</p> 
               <p>22:00 - Вадим спит</p> 
             </div>}
             img={icon3}
            
                />
                   <Acc
                    style={'acc'}
             title={t('ACCOMMODATION')}
             content={<div className='get-hotel'>  <div className='hotel'>

                <img className='hotel-logo' src={hotel} alt="" />
                <div className="hotel-text">
                    <div className="">
                           <p className="title1">НАЗВАНИЕ ОТЕЛЯ</p>
                    <p className="content1">КОМРАТ</p>
                    </div>
                    <div className="">
                           <p className="title1">{t('price')}</p>
                    <p className="content1">бесценно</p>
                    </div>
                    <div className="">
                           <p className="title1">PROMO CODE</p>
                    <p className="content1">ялпуг</p>
                    </div>
                 
                </div>
               
             </div> 
           
             <div className="photos">
             <img src={y1} alt="" />
             <img src={y2} alt="" />
             <img src={y3} alt="" />
             <img src={y4} alt="" />
             </div>
             </div>
           }
             img={icon4}
            
                />

       
            </div>   
   
  )
}
