import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton} from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons";
import useStyles from './styles';

const Product = ({product,onAddToCart}) => {
  function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
          
    // Regular expression to identify HTML tags in 
    // the input string. Replacing the identified 
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '');
}
    const classes=useStyles();
    
  return (
    <div>
      <Card className={classes.root}>
          <CardMedia className={classes.media} image={product.image.url} title={product.name}/>
          <CardContent>
              <div className={classes.cardContent}>
                  <Typography variant="h5" gutterbottom>
                      {product.name}
                  </Typography>
                  <Typography variant="h5">
                      {product.price.formated_with_symbol}
                  </Typography>
              </div>
              <Typography variant="body2" color="textSecondary">{removeTags(product.description)}</Typography>

          </CardContent>
          <CardActions disableSpacing className={classes.CardActions}>
               <IconButton aria-label="Add to Cart" onClick={()=>{
                 onAddToCart(product.id,1)
               }}>
                   <AddShoppingCart/>
               </IconButton>
              </CardActions>
      </Card>
    </div>
  )
}

export default Product