import React, {Component} from 'react';
import { db } from './firebase';
import './ShippingAddress.css';
import { Button, TextField } from "@material-ui/core";

class ShippingAddress extends React.Component {
    constructor() {
        super();
        this.state = {
            receivers_name: "",
            address: "",
            city: "",
            pincode: "",
            phone_number: ""
        };
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addUser = e => {
        e.preventDefault();
        db.settings({
          timestampsInSnapshots: true
        });
        const userRef = db.collection("shippingaddress").add({
            receivers_name: this.state.receivers_name,
            address: this.state.address,
            city: this.state.city,
            pincode: this.state.pincode,
            phone_number: this.state.phone_number
        });  
        this.setState({
            receivers_name: "",
            address: "",
            city: "",
            pincode: "",
            phone_number: ""
        });
      };

    render() {
        return (
            <div className="address-container">
                <form onSubmit={this.addUser}>
                    <label>Receiver's Name</label>
                    <TextField name="name" onChange={this.updateInput} value={this.state.receivers_name}/>
                    <label >Address</label>
                    <TextField name="address" onChange={this.updateInput} value={this.state.address}/>
                    <label >City</label>
                    <TextField name="city" onChange={this.updateInput} value={this.state.city}/>
                    <label >Pincode</label>
                    <TextField name="pincode" onChange={this.updateInput} value={this.state.pincode}/>
                    <label >Phone Number</label>
                    <TextField name="phonenumber" onChange={this.updateInput} value={this.state.phone_number}/>
                    <Button type="submit" variant="contained" color="primary">Submit</Button>
                </form>
            </div>
        )
    }
}

export default ShippingAddress;
