import React from 'react'
import { Card } from '@mui/material'

const Cards = () => {
  return (
    <div>
      <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
        im a card
      </Card>
    </div>

  )
}

export default Cards