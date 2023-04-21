import React, { useContext } from 'react'
import { addToCart } from '../helpers/Context'

import { Grid, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import c1 from '../images/c1.jpg'
import c2 from '../images/c2.jpg'
import c3 from '../images/c3.jpg'
import c4 from '../images/c4.jpg'
import c5 from '../images/c5.jpg'
import c6 from '../images/c6.jpg'
import c7 from '../images/c7.jpg'
import c8 from '../images/c8.jpg'
import c9 from '../images/c9.jpg'
import c10 from '../images/c10.jpg'
import c11 from '../images/c11.jpg'
import c12 from '../images/c12.jpg'
import c13 from '../images/c13.jpg'
import c14 from '../images/c14.jpg'
import c15 from '../images/c15.jpg'
import c16 from '../images/c16.jpg'
import c17 from '../images/c17.jpg'
import c18 from '../images/c18.jpg'
import c19 from '../images/c19.jpg'
import c20 from '../images/c20.jpg'
import c21 from '../images/c21.jpg'
import c22 from '../images/c22.jpg'



const MainBody = () => {
  const {cartValue, setCartValue} = useContext(addToCart)
 
  return (
    <Grid container spacing={2}>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c1} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography>
              Im a Card
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              click me
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c2} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography>
              Im a Card
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              click me
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c3} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography>
              Im a Card
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              click me
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c4} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography>
              Im a Card
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              click me
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c5} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography>
              Im a Card
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              click me
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c6} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography>
              Im a Card
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              click me
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c7} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography>
              Im a Card
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              click me
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c8} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography>
              Im a Card
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              click me
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c9} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography>
              Im a Card
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              click me
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c10} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography>
              Im a Card
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              click me
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c11} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography>
              Im a Card
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              click me
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c12} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography>
              Im a Card
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              click me
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c13} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography>
              Im a Card
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              click me
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c14} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography>
              Im a Card
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              click me
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c15} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography>
              Im a Card
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              click me
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c16} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography>
              Im a Card
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              click me
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c17} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography>
              Im a Card
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              click me
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c18} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography>
              Im a Card
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              click me
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c19} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography>
              Im a Card
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              click me
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c20} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography>
              Im a Card
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              click me
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c21} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography>
              Im a Card
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              click me
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c22} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography>
              Im a Card
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              click me
            </Button>
          </CardActions>
        </Card>
      </Grid>
      
    </Grid>
  )
}

export default MainBody