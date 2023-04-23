import React, {useState} from 'react'
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import SegmentIcon from '@mui/icons-material/Segment';


const Dials = () => {
  const actions = [
    { icon: <ShoppingCartIcon />, name: 'Cart' },
    { icon: <ContactPageIcon />, name: 'Contact Us' },
    { icon: <HelpCenterIcon />, name: 'About' },
  ];


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <SpeedDial
    sx={{m: '1em 1em 1em 0em'}}
    ariaLabel="Speeddial popup navigation"
    icon={<SegmentIcon />}
    onClose={handleClose}
    onOpen={handleOpen}
    open={open}
    direction='down'
  >
    {actions.map((action) => (
      <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
        tooltipOpen
        onClick={handleClose}
      />
    ))}
  </SpeedDial>
  )
}

export default Dials