import { Box, CardContent, CardMedia, Link, Typography } from '@mui/material'
import React from 'react'

const Card = ({CardImage}) => {
  return (
    <Box>
        <Link href="http://localhost:3000/details" sx={{textDecoration:'none'}}>
       <CardMedia component='img' height='60%' image={CardImage}/>
            <CardContent>
                <Typography gutterBottom component='div' variant='body1' align='center' color='tomato'>PERFUMES</Typography>
                <Typography gutterBottom component='div' variant='h5' align='center'>
                    Wearing this will make everyone love you
                </Typography>
                <Typography gutterBottom component='div' variant='body2' align='center' color='text.secondary'>
                    It's womens love
                </Typography>
                <Typography variant='body2' color='text.secondary' align='center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tempora quas aperiam voluptatum quaerat nihil reprehenderit vitae aut? 
                    Autem beatae obcaecati explicabo tenetur ullam minus nobis rem enim labore illo?
                </Typography>
            </CardContent>
         </Link>
    </Box>
  )
}

export default Card
