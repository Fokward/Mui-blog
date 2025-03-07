import { Box, Stack, Typography,styled } from '@mui/material'
import React from 'react'
import {Facebook, Instagram, Twitter} from '@mui/icons-material'

const SocialBox=styled(Box)({
    display:'flex',
    gap:10,
    color:'white'
})
const Footer = () => {
  return (
    <Box sx={{background:'black', height:'300px'}}>
      <Stack direction={{xs:'row',sm:'row',md:'row'}} p={7}>
        <Box flex={1}>
            <Typography color='white' align='center'>Contact Us</Typography>
            <Typography color='white' align='center'>of squamate reptiles, with over 6,000 species</Typography>
            <Typography color='white' align='center'>Continents except Antarcti</Typography>
            <Typography color='white' align='center'>ranging across</Typography>
        </Box>
        <Box flex={1}>
            <Typography color='white' align='center'>Data policies</Typography>
            <Typography color='white' align='center'>Cookies</Typography>
            <Typography color='white' align='center'>Data safety</Typography>
        </Box>
        <Box flex={1}>
            <Typography color='white' align='center' >
                Categories
            </Typography>
            <Typography color='white' align='center' >
                Kids
            </Typography>
            <Typography color='white' align='center' >
                Women
            </Typography>
            <Typography color='white' align='center' >
                Men
            </Typography>
        </Box>
        <Box>
        <Typography color='white' align='center'>
                Follow Us
            </Typography>
         <SocialBox>
            <Facebook/>
            <Instagram/>
            <Twitter/>
          </SocialBox>
        </Box>
      </Stack>
    </Box>
  )
}

export default Footer
