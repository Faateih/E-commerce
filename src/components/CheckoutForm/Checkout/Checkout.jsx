import React, {useState}from 'react'
import {Paper,Stepper,Step,StepLabel,Typography,CircularProgress,Divider,Button} from "@material-ui/core";
import useStyles from './styles';

import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
const steps=["Shipping address", "payment details"];
const Confirmation=()=>(
    <div>
        Confirmation
    </div>
)
const Checkout = () => {
    const [activeStep,setActiveStep]=useState(2);
    const classes=useStyles();
    const Form=()=>activeStep===0?<AddressForm/>:<PaymentForm/>
  return (
    <>
    <div className={classes.toolbar}/>
    <main classname={classes.layout}>
        <Paper className={classes.paper}>
            <Typography variant="h4" align="center">Checkout</Typography>
            <Stepper activeStep={0} className={classes.stepper}>
                {steps.map((step)=>(
                    <Step key={step}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {activeStep===steps.length?<Confirmation/>:<Form/>}
        </Paper>

    </main>
    </>
  )
}

export default Checkout
