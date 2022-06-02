import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconBotton} from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons";

const Product = ({product}) => {
  return (
    <div>
      <Card className={classes.root}>
          <CardMedia className={classes.media} image="" title={product.name}/>
          <CardContent>
              <div className={classes.cardContent}>
                  <Typography variant="h5" gutterbottom>
                      {product.name}
                  </Typography>
                  <Typography variant="h5">
                      {product.price}
                  </Typography>
              </div>
              <Typography variant="h2" color="textSecondary">{product.description}</Typography>

          </CardContent>
          <CardActions>
              </CardActions>
      </Card>
    </div>
  )
}

export default Product