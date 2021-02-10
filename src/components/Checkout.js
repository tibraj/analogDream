import React, {useState} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

function Checkout(stripe, totalCost) {
    const [status, setStatus] = useState('default');
    const submit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');
        try {
            let {token} = await stripe.createToken({name: 'Name'});
            let response = await fetch('/.netlify/functions/charge', {
                method: 'POST',
                body: JSON.stringify({
                    amount: totalCost * 100,
                    token: token.id
                })
            });
            if (response.ok) {
                setStatus('Complete');
            } else {
                throw new Error('Failed Network Response');
            }
        } catch(err) {
            setStatus('error');
        }
    };
    if (status === 'complete') {
        return <div className='checkout'>Your Payment was Successful!</div>
    }

    return (
        <form className="CheckoutForm" onSubmit={submit}>
            <h4>Would you like to complete the purchase?</h4>
            <CardElement />
            <button
                className="CheckoutForm-button"
                type="submit"
                disabled={status === 'submitting'}
            >
            {status === 'submitting' ? 'Submitting' : 'Submit Order'}
            </button>
            {status === 'error' && (
                <div className="CheckoutForm-error">Something went wrong.</div>
            )}
        </form>
    )
}

export default injectStripe(Checkout);