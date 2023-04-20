import React from 'react'
import { Button } from '@mui/material'
import SegmentIcon from '@mui/icons-material/Segment';

const Sidebar = () => {
  return (
    <Button 
    variant='contained' 
    color='primary' 
    sx={{
      width: "2em", 
      height: '2em', 
      color: 'lightblue', 
      float: 'right', 
      m: '.5em .5em .5em 0em'
      }}
    >
      <SegmentIcon />
    </Button>
    
  )
}

export default Sidebar