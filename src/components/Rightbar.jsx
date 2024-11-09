import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import postImg1 from '../mui1/image1.webp'
import postImg2 from '../mui1/image2.jpeg'
import postImg3 from '../mui1/image3.jpeg'
import postImg4 from '../mui1/image4.jpeg'
import Card from './Card'
import CardImage from '../mui1/pwomen.jpeg'

const Rightbar = () => {
  return (
    <Box>
        <Typography bgcolor={'black'} color='white' align='center'>
            Most Popular
        </Typography>
      <List sx={{ width: '100%', height:'100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-end">
        <ListItemAvatar>
          <Avatar sx={{height:80,width:80}} variant='square' alt="Remy Sharp" src={postImg1} />
        </ListItemAvatar>
        <ListItemText
          secondary=
            
              {" — I'll be in your neighborhood doing errands this…"}
        />
      </ListItem>
      <ListItem alignItems="flex-end">
        <ListItemAvatar>
          <Avatar sx={{height:80,width:80}} variant='square' alt="Remy Sharp" src={postImg2} />
        </ListItemAvatar>
        <ListItemText
          secondary=
            
              {" — I'll be in your neighborhood doing errands this…"}
        />
      </ListItem>
      <ListItem alignItems="flex-end">
        <ListItemAvatar>
          <Avatar sx={{height:80,width:80}} variant='square' alt="Remy Sharp" src={postImg3} />
        </ListItemAvatar>
        <ListItemText
          secondary=
            
              {" — I'll be in your neighborhood doing errands this…"}
        />
      </ListItem>
      <ListItem alignItems="flex-end">
        <ListItemAvatar >
          <Avatar sx={{height:80,width:80}} variant='square' alt="Remy Sharp" src={postImg4}  />
        </ListItemAvatar>
        <ListItemText
          secondary=
            
              {" — I'll be in your neighborhood doing errands this…"}
        />
      </ListItem>
      <Divider variant='insent' component={'li'}/>
    </List>
    <Typography bgcolor={'black'} color='white' align='center'>
            About Us
    </Typography>
    <Card CardImage={CardImage}/>
    </Box>
  )
}

export default Rightbar
