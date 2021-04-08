import {React, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { CartContext } from '../../contexts/CartContext'



const useStyles = makeStyles((theme) => ({
    listItem: {
    padding: theme.spacing(1, 0),
    },
    total: {
    fontWeight: 700,
    },
    title: {
    marginTop: theme.spacing(2),
    },
}));

const Review = () => {
    const classes = useStyles();
    const {cart, cartPriceTotal} = useContext(CartContext)

    console.log(cart)

    return (
    <>
        <Typography variant="h6" gutterBottom>
        Order summary
        </Typography>
        <List disablePadding>
        {cart.map((product) => (
            <ListItem className={classes.listItem} key={product.id}>
            <ListItemText primary={product.title} secondary={product.description} />
            <Typography variant="body2">${product.price}</Typography>
            <p>x</p>
            <Typography style={{color: 'red'}}variant="body2"> {product.quantity}</Typography>
            </ListItem>
        ))}
        <ListItem className={classes.listItem}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" className={classes.total}>
            {cartPriceTotal(cart)}
            </Typography>
        </ListItem>
        </List>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
            </Typography>
            <Typography gutterBottom>John Smith</Typography>
            
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
            </Typography>
            <Grid container>
            </Grid>
        </Grid>
        </Grid>
    </>
    );
}

export default Review;