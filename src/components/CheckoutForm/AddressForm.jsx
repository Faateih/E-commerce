import React, {useState}from 'react'
import { InputLabel,Select,MenuItem,Button,Grid,Typography } from '@material-ui/core';
import {useForm,FormProvider} from "react-hook-form";
import FormInput from './FormInput'
const AddressForm = () => {
    const [ShippingCountries, setShippingCountries]=useState([]);
    const [ShippingCountry, setShippingCountry]=useState('');
    const [ShippingSubdivisions, setShippingSubdivisions]=useState([]);
    const [ShippingSubdivision, setShippingSubdivision]=useState('');
    const [ShippingOption, setShippingOption]=useState('');

    const methods=useForm();
  return (
    <>
    <Typography variant="h6" gutterBottom>Shipping Address</Typography>
    <FormProvider {...methods}>
        <form onSubmit={''}>
            <Grid container spacing={3}>
               <FormInput required name="firstname" label='First name'/>
               <FormInput required name="lastname" label="Last name" />
               <FormInput required name="address1" label="Address" />
               <FormInput required name="email" label="Email" />
               <FormInput required name="City" label="City" />
               <FormInput required name="ZIP" label="ZIP / Postal code" />
            <Grid item xs={12} sm={6}>
                <InputLabel>Shipping Country</InputLabel>
                <Select value={} fullWidth onChange={}>
                    <MenuItem key={} value={}>
                    </MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
                <InputLabel>Shipping Subdivision</InputLabel>
                <Select value={} fullWidth onChange={}>
                    <MenuItem key={} value={}>
                    </MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
                <InputLabel>Shipping Options</InputLabel>
                <Select value={} fullWidth onChange={}>
                    <MenuItem key={} value={}>
                    </MenuItem>
                </Select>
            </Grid>
            </Grid>
        </form>
    </FormProvider>
    </>
  )
}

export default AddressForm