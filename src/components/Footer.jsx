import React from 'react'
import { Card } from '@mui/material'

const Footer = () => {
  return (
    <Card sx={{position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      backgroundColor: "gray",
      color:'white',
      textAlign: 'center'}} >


    Im a footer
    </Card>
  )
}

export default Footer