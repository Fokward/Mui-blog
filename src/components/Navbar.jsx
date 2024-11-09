import React from 'react'
import {AppBar, Toolbar, Box, styled, Typography, InputBase, Menu, MenuItem} from '@mui/material'
import {Facebook, Instagram, Menu as MenuIcon, Twitter} from '@mui/icons-material'
import { useState } from 'react'

const StyledToolbar=styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between'
})
const SocialBox=styled(Box)({
    display:'flex',
    gap:10
})
const MenuBox=styled(Box)({
    display:'flex',
    gap:30
})
const SearchBox=styled(Box)({
    display:'flex',
    gap:5
})
const MenuItems=[{Name:'Home',Link:'/#'},{Name:'Portfolio',Link:'/#'},{Name:'Products',Link:'/#'},{Name:'Blog',Link:'/#'},{Name:'Contact Us',Link:'/#'}]

const Navbar = () => {
    const[open,setOpen]=useState(false)
  return (
    <AppBar sx={{background:'black'}} position='static'>
      <StyledToolbar>
        <SocialBox>
            <Facebook/>
            <Instagram/>
            <Twitter/>
        </SocialBox>
        <MenuBox sx={{display:{xs:'none',sm:'none',md:'flex'}}}>
            {
                MenuItems.map((items)=>(
                    <Typography sx={{cursor:'pointer',fontSize:'14px'}}>{items.Name}</Typography>
                ))
            }
        </MenuBox>
        <SearchBox><InputBase placeholder='Search...' sx={{color:'white'}}/></SearchBox>
        <MenuIcon sx={{color:'white',display:{xs:'block',sm:'block',md:'none'}}} onClick={()=>setOpen(true)}/>
      </StyledToolbar>
      <Menu
        id="basic-menu"
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
            vertical:'top',
            horizontal:'right'
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Box sx={{width:'250px',height:'30vh',paddingTop:'30px'}}>
        {
                MenuItems.map((items)=>(
                    <MenuItem sx={{cursor:'pointer',fontSize:'14px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'17px'}}>
                        {items.Name}</MenuItem>
                ))
            }
        </Box>
      </Menu>
    </AppBar>
  )
}

export default Navbar
