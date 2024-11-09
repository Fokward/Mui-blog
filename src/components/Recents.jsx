import { Box,  Grid} from '@mui/material'
import React from 'react'
import CardImage from '../mui1/pwomen.jpeg'
import postImg1 from '../mui1/image1.webp'
import postImg2 from '../mui1/image2.jpeg'
import postImg3 from '../mui1/image3.jpeg'
import postImg4 from '../mui1/image4.jpeg'
import Card from './Card'

const Recents = () => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{xs:1,sm:2,md:1}}>
        <Grid item >
           <Card CardImage={CardImage}/>
        </Grid>
        <Grid item md={6} xs={12} >
            <Card CardImage={postImg1}/>
        </Grid>
        <Grid item md={6} xs={12} >
            <Card CardImage={postImg2}/>
        </Grid>
        <Grid item md={6} xs={12} >
            <Card CardImage={postImg3}/>
        </Grid>
        <Grid item md={6} xs={12} >
            <Card CardImage={postImg4}/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Recents
