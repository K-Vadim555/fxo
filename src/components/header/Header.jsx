import React from 'react'
import './Header.scss'
import logo from '../../img/LOGO.svg'
import icon from '../../img/ICON.svg'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Accardion from '../accardion/Accardion';
import { style } from '@mui/system';
import { Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LastMainSection from '../main/LastMainSection';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Acc from '../Accaordion2/Acc';

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  
export default function Header(props) {
    const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const { t, i18n } = useTranslation();
  return (
    <header className='header'>
      
    </header>
  )
}
