import { Box, TextField, Typography } from '@mui/material';
import React from 'react'
import './popup.scss'
import '../fxo/fxo.scss'
import hin from './img/hin.png'
import '../main/pages/pages.scss'
import hinn from './img/hinn.png'
import icon1 from './img/icon1.png'
import icon2 from './img/icon2.png'
import icon3 from './img/icon3.png'
import icon4 from './img/icon4.png'
import sot from './img/Group 30.png'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import val from '../../fxo-img/val.png'

export const Popup = ({buttonText,className}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name,setName] = React.useState('')
  const [nam,setNam] = React.useState('')
  const [tel,setTel] = React.useState('')
  const [num,setNum] = React.useState('')

  const [nameer,setNameer] = React.useState(false)
  const [teler,setTeler] = React.useState(false)
  const [numer,setNumer] = React.useState(false)

   const err = (e) => {
    
        if (name == e.target.value , tel == e.target.value ,num == e.target.value) {
          setNam('')
    }
    else {
      setNam('')
    }
  }
  const click = (e) => {
  
    e.preventDefault()
    if (name == '',tel == '',num== '') {
       setNam(<Typography
       textAlign='center'
       color='error'
       border='1px solid red'
    
       marginBottom='1vw'
      
       padding='0.5vw'

       >Одно или несколько полей содержат ошибочные данные. Пожалуйста, проверьте их и попробуйте ещё раз.</Typography>)
    }

     
     
   
    setTeler(false)
    setNameer(false)
    setNumer(false)

    if (name == '') {
      setNameer(true)
    }
    if (tel == '') {
      setTeler(true)
    }
    if (num == '') {
      setNumer(true)
    }
   
  
  

 
 }
 const { t, i18n } = useTranslation();
  return (
    <div id='contacts' className='contacts'>
    
      
           
       
            
                <Button 
              
                onClick={handleOpen}

                 variant='outlined' className='half' style={{
                    transition: 'all ease 5s'
                }}>{buttonText}</Button>
           
          
            <div>
     
      <Modal
       
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='popup'  sx={{
          
           maxWidth:'inherit',
           position: 'absolute' ,
           top: '50%',
           left: '50%',
           transform: 'translate(-50%, -50%)',
           width: '80vw',
           
           
           
        }}>
          <Typography
       
           textAlign='center' m=' 0 auto' id="modal-modal-title" variant="h6" component="h2">
         
          </Typography>
          <img className='val' src={val} alt="" />
          <button onClick={() => {setOpen(false)}} className='close-modal-btn'>+</button>
           <p className='modal-text'> I LOVE YOU <br></br> MY LITLLE PRINCESS</p>
        </Box>
           
      </Modal>
    </div>
    </div>
        
  )
}
export default Popup;
