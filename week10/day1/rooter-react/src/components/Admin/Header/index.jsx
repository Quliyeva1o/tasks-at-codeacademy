import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



import React from 'react'
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "red" }}   position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
     
          <Button ><Link to={"/admin/addproduct"}>Add Product</Link></Button>
          <Button ><Link to={"/admin"}>Admin Products</Link></Button>
          <Button ><Link to={"/admin/editproduct"}>edit Products</Link></Button>
      
        </Toolbar>
      </AppBar>
    </Box>
    
    </>
  )
}

export default AdminHeader

