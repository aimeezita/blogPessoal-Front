import React from 'react';
import './Navbar.css';
import Mokonas from '../../../assets/4_Tsubasa_Mokonas_ying_yang_editado_800x.png'
import { Box,Typography } from '@mui/material';
import { flexbox } from '@material-ui/system';



export function Navbar(){
 return(
    <>
    <Box display="flex"  className="navbar">
    <Box className='logo' display="flex" alignItems="center">
        <img src={Mokonas} alt="mokonas" className='mokonasLogo' />
    </Box>
    <Box  display="flex" justifyContent="flex-end"  alignItems="center" className='menu' >
        
        <Typography className='fonte'>Inicio</Typography>
        <Typography className='fonte'>Login</Typography>
        <Typography className='fonte'>Cadastro</Typography>
    </Box>
    </Box>
    </>
 )
      
      }