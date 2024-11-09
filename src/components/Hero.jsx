import { Box, Typography } from '@mui/material'
import React from 'react'
import RoomImg from '../mui1/room2.jpg'

const Hero = () => {
  return (
    <Box>
      <Typography variant='h3' align='center' sx={{fontWeight:'900px'}}>
        Fashions <b style={{color:'red'}}>Blog</b>
      </Typography>
      <Typography variant='body2' align='center' sx={{fontWeight:100}} mb={2}>
        We make you look better of you!
      </Typography>
      <Box sx={{
        backgroundImage:`url(${RoomImg})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundAttachment:'fixed',
        backgroundRepeat:'no-repeat',
        backgroundColor:'black',
        width:'100%',
        height:600,
        display:'flex',
        justifyContent:'center'
      }}>
        <Box sx={{width:{xs:'100%',sm:'50%',md:'40%'},padding:{xs:3,sm:2,md:20}}}>
        <Box sx={{backgroundColor:'white',opacity:'0.8'}}>
            <Typography variant='h6' color='tomato' pt={8} align='center'>Trending Styles</Typography>
            <Typography variant='h4' align='center'>Life is boring without fashion!</Typography>
            <Typography variant='body1' pb={8} pt={2}>
                We love to change your style.
            </Typography>
        </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero
