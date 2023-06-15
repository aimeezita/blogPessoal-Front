//import React from 'react';
import './Home.css';
import { Grid, Box } from '@material-ui/core'
import { sizing, flexbox, borders } from '@material-ui/system';



export function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='tamanhoPagina'>
                <Grid  alignItems="center" item xs={12} sm={6}>
                    <Box className='imagem' width={450} border={1}  >
                        
                    </Box>
                                  

                </Grid>
                <Grid item container xs={12} sm={6} className='loginBox'>
                    <Grid item></Grid>
                    <Grid item></Grid>
                </Grid>

            </Grid>



            
        </>
    )
}