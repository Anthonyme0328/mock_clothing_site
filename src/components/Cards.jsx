import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'


const Cards = () => {
  return (
    <div>
      <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
        <CardMedia src={'images/c1.jpg'} component='img'/>
        <CardContent>
          <Typography>
            Im a Card
          </Typography>
        </CardContent>
        <CardActions>
          <Button color='primary' variant='contained' sx={{width: '100%'}}>
            click me
          </Button>
        </CardActions>
      </Card>
    </div>

  )
}

export default Cards