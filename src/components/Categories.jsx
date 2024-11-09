import { Box, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import Kids from '../mui1/kids.jpeg'
import Men from '../mui1/men.jpeg'
import Women from '../mui1/women.jpeg'

 const StyleBox = styled(Box)({
    height:200,
    width:'100%',
    cursor:'pointer',
    backgroundSize:'cover',
    backgroundPosition:'center center',
    backgroundRepeat:'no-repeat'
 })
 
 const StyledTypography = styled(Typography)({
    margin:'25% 50px 25% 50px',
    background:'white',
    opacity:'0.8'
 })
const Categories = () => {
  return (
    <Box>
      <Stack direction={{xs:'column',sm:'row'}} spacing={{xs:1,sm:2,md:4}} mt={5}>
        <StyleBox sx={{backgroundImage:`url(${Kids})`}}><StyledTypography align='center' variant='h3'>Kids</StyledTypography></StyleBox>
        <StyleBox sx={{backgroundImage:`url(${Men})`}}><StyledTypography align='center' variant='h3'>Men</StyledTypography></StyleBox>
        <StyleBox sx={{backgroundImage:`url(${Women})`}}><StyledTypography align='center' variant='h3'>Women</StyledTypography></StyleBox>
      </Stack>
    </Box>
  )
}

export default Categories
