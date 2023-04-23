import React, {useContext} from 'react'
import { Button, Badge } from '@mui/material'
import SegmentIcon from '@mui/icons-material/Segment';
import { addToCart } from '../helpers/Context'
import Dials from './Dials';


const Sidebar = () => {
  const {cartValue, setCartValue} = useContext(addToCart)

  return (

        <Badge
        sx={{float: 'right'}}
        badgeContent={cartValue} 
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
    {/* <Dials /> */}
    </Badge>
    
  )
}

export default Sidebar