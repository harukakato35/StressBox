import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const stripeApiKey = "pk_test_51ILI5wFu87WFCU2O0EdbDxDCzuk0lsVpI0glHwH2PZNeoEhRUUmkBsWXUbUTq3afVFoRp8eiqZGXwe0En03Dgjnk00EmsTjhvW";
const checkoutUrl = "https://console.cloud.google.com/endpoints/v2?project=stresstackle-599d9&supportedpurview=project";


class Checkout extends Component {

    handleToken = (token) => {
        fetch(checkoutUrl, {
            method: "POST",
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                token,
                charge: {
                    amount: 1000,
                    currency: 'JPY'
                }
            }),
        })
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return (
            <StripeCheckout
                stripeKey={stripeApiKey}
                token={this.handleToken}
                name="会費"
                amount={1000}
                panelLabel="{{amount}}支払う"
                currency="JPY"
                locale="ja"
                allowRememberMe={false}
            />
        );
    }
}

export default Checkout;