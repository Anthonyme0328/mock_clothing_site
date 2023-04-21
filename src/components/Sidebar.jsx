import React from 'react'
import { Button, Badge } from '@mui/material'
import SegmentIcon from '@mui/icons-material/Segment';

const Sidebar = () => {
  let i = 0
  return (

        <Badge
        sx={{float: 'right'}}
        badgeContent={i} 
        color='secondary' 
        showZero
        overlap='circular'
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >  
    <Button 
    variant='contained' 
    color='primary' 
    sx={{
      width: "2em", 
      height: '2em', 
      color: 'lightblue', 
      float: 'right', 
      m: '1em 1em 1em 0em'
      }}
    >

        <SegmentIcon />
      
    </Button>
    </Badge>
    
  )
}

export default Sidebar