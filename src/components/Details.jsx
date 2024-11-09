import { Box, CardMedia, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Room from '../mui1/Room.jpeg'
import CardImage from '../mui1/pwomen.jpeg'
import Rightbar from './Rightbar'

const Details = () => {
  return (
    <Box>
      <Box sx={{backgroundImage:`url(${Room})`,backgroundPosition:'center',backgroundSize:'cover',height:'250px'}}>
        <Typography align='center' color='black' variant='h2' sx={{fontWeight:900, padding:10}}>Clicked Poste Title</Typography>
      </Box>
      <Container>
        <hr/>
        <Stack direction={{xs:'column',dm:'row'}} spacing={{xs:1, sm:2, dm:8}} mt={8}>
            <Box flex={3} sx={{padding:'18px 100px 100px 100px'}}>
                <Typography m={4} align='center' color='gray' variant='body1' sx={{fontWeight:900}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero obcaecati alias omnis 
                    tempora mollitia soluta aperiam a modi quia cum, ratione nam, praesentium, harum nisi aliquam beatae maxime ab facere error ullam sit!
                     Facilis porro nihil numquam, assumenda necessitatibus repellendus!
                </Typography>
                <CardMedia component={'img'} height='300px' image={CardImage}/>
                <Typography align='center' variant='h4' mt={2}>wait for it</Typography>
                <Typography m={4} align='center' color='gray' variant='body1' sx={{fontWeight:900}}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est provident sint sequi nesciunt 
                    animi voluptas similique necessitatibus incidunt cupiditate, praesentium inventore? Praesentium,
                     at expedita, dolore nemo facere repellendus hic tempore similique dignissimos cum molestias.
                      Corrupti, explicabo illo! Dolores amet dolorum maxime fuga tenetur nostrum id unde accusamus
                       temporibus molestiae. Unde id debitis velit sunt libero dolor voluptatum veniam eius, exercitationem 
                       asperiores quam qui consectetur ex adipisci fuga atque laudantium, natus doloremque provident sed 
                       cupiditate quo placeat. Consequatur dolorem ut fuga placeat molestias. Tempore sequi esse excepturi doloribus obcaecati 
                    nam, rem aut dolorem soluta, quis provident quam aperiam ducimus eveniet quidem?
                </Typography>
            </Box>
           {/* <Box flex={1}>
                <Rightbar/>
            </Box>*/}
        </Stack>
      </Container>
    </Box>
  )
}

export default Details
