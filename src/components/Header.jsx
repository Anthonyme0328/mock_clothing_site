import React from 'react'
import Sidebar from './Sidebar'
import { Card } from '@mui/material'


const Header = () => {
  return (
    <Card sx={{
    mt: 0,
    pt: 0,
    width: '100%',
    backgroundColor: "blue",
    color:'white',
    textAlign: 'center'}} >


  Im a Header


    <Sidebar/>
  </Card>
  )
}

export default Header