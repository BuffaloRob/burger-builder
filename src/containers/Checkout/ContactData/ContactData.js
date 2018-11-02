import React, { Component } from 'react';
import axios from 'axios';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false,
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Max',
        address: {
          street: 'Test street',
          zipCode: '28203',
          country: 'USA'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch(error => {
        this.setState({ loading: false, purchasing: false });
      });
  }

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <form>
          <input type='text' name='name' placeholder='Your Name' className={classes.Input} />
          <input type='email' name='email' placeholder='Your Email' className={classes.Input} />
          <input type='text' name='street' placeholder='Your Street' className={classes.Input} />
          <input type='text' name='postal' placeholder='Your Postal Code' className={classes.Input} />
          <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
        </form>
      </div>
    )
  }
}

export default ContactData;