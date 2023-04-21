import React, { useContext } from 'react'
import { addToCart } from '../helpers/Context'

import DropDown from './DropDown'

import { Grid, Button, Card, CardActions, CardContent, CardMedia, Typography, Badge } from '@mui/material'
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
    <Grid container spacing={2} sx={{mb: '5em'}}>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>

        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <Badge
            badgeContent={'Free Shipping'} 
            color='secondary' 
            overlap='circular'
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
          <CardMedia src={c1} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          </Badge> 
          <CardContent>
            <Typography sx={{textDecoration: 'underline yellow'}}>
              Thrasher Cotton Shirt
            </Typography>
            <DropDown />
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>

      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c2} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography sx={{textDecoration: 'underline yellow'}}>
              Jackson Denim Jeans
            </Typography>
            <DropDown />
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
        <Badge
            badgeContent={'Sale'} 
            color='info' 
            overlap='circular'
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
          <CardMedia src={c3} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
        </Badge>
          <CardContent>
            <Typography sx={{textDecoration: 'underline yellow'}}>
              Seafarer Spotted Button Up
            </Typography>
            <DropDown />
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
        <Badge
            badgeContent={'Free Shipping'} 
            color='secondary' 
            overlap='circular'
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
          <CardMedia src={c4} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
        </Badge>
          <CardContent>
            <Typography sx={{textDecoration: 'underline yellow'}}>
              Neko Blast Cotton Shirt
            </Typography>
            <DropDown />
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
        <Badge
            badgeContent={'Sale'} 
            color='info' 
            overlap='circular'
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
          <CardMedia src={c5} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
        </Badge>
          <CardContent>
            <Typography sx={{textDecoration: 'underline yellow'}}>
              Pompeii Denim Jeans
            </Typography>
            <DropDown />
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c6} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography sx={{textDecoration: 'underline yellow'}}>
              Smokers Only Jacket
            </Typography>
            <DropDown />
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c7} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography sx={{textDecoration: 'underline yellow'}}>
              Brawler Denim Jacket
            </Typography>
            <DropDown />
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
        <Badge
            badgeContent={'Free Shipping'} 
            color='secondary' 
            overlap='circular'
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
          <CardMedia src={c8} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
        </Badge>
          <CardContent>
            <Typography sx={{textDecoration: 'underline yellow'}}>
              Huntsman Wind Breaker
            </Typography>
            <DropDown />
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
        <Badge
            badgeContent={'Sale'} 
            color='info' 
            overlap='circular'
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
          <CardMedia src={c9} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
        </Badge>  
          <CardContent>
            <Typography sx={{textDecoration: 'underline yellow'}}>
              Husky Denim Coat
            </Typography>
            <DropDown />
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c10} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography sx={{textDecoration: 'underline yellow'}}>
              Siberia Fleece Coat
            </Typography>
            <DropDown />
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c11} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography sx={{textDecoration: 'underline yellow'}}>
              Hillary Cotton Trousers
            </Typography>
            <DropDown />
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
        <Badge
            badgeContent={'Free Shipping'} 
            color='secondary' 
            overlap='circular'
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
          <CardMedia src={c12} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
        </Badge>
          <CardContent>
            <Typography sx={{textDecoration: 'underline yellow'}}>
              Nike Reactx 
            </Typography>
            <DropDown />
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c13} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography sx={{textDecoration: 'underline yellow'}}>
              Vans Classic Low Top
            </Typography>
            <DropDown />
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c14} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography sx={{textDecoration: 'underline yellow'}}>
              Carthart Heavy Work Shoe
            </Typography>
            <DropDown />
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
        <Badge
            badgeContent={'Free Shipping'} 
            color='secondary' 
            overlap='circular'
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
          <CardMedia src={c15} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
        </Badge>
          <CardContent>
            <Typography sx={{textDecoration: 'underline yellow'}}>
              Nike Spring Runner
            </Typography>
            <DropDown />
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c16} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography sx={{textDecoration: 'underline yellow'}}>
              Nike Lime Fever 
            </Typography>
            <DropDown />
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
        <Badge
            badgeContent={'Sale'} 
            color='info' 
            overlap='circular'
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
          <CardMedia src={c17} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
        </Badge>  
          <CardContent>
            <Typography sx={{textDecoration: 'underline yellow'}}>
              I'm Bananas Long Sock
            </Typography>
            <DropDown />
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c18} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography sx={{textDecoration: 'underline yellow'}}>
              Cabin In The Woods Sock
            </Typography>
            <DropDown />
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c19} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography sx={{textDecoration: 'underline yellow'}}>
              Argile It Alone Sock
            </Typography>
            <DropDown />
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c20} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography sx={{textDecoration: 'underline yellow'}}>
              Fresh Squeeze Long Sock
            </Typography>
            <DropDown />
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
          <CardMedia src={c21} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
          <CardContent>
            <Typography sx={{textDecoration: 'underline yellow'}}>
              We All Want To Be Joggers
            </Typography>
            <DropDown />
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <Card sx={{width: '25em', m: "0 auto",  mt: '2em', textAlign: 'center', boxShadow: '5px 10px gray', border: '2px solid black'}}>
        <Badge
            badgeContent={'Sale'} 
            color='info' 
            overlap='circular'
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
          <CardMedia src={c22} component='img' sx={{height: '10em', objectFit: 'contain'}}/>
        </Badge>  
          <CardContent>
            <Typography sx={{textDecoration: 'underline yellow'}}>
              Fresh White Tee
            </Typography>
            <DropDown />
          </CardContent>
          <CardActions>
            <Button color='primary' variant='contained' sx={{width: '100%'}} onClick={() => setCartValue (preValue => preValue + 1)}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>
      
    </Grid>
  )
}

export default MainBody