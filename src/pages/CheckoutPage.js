import React from 'react'
import BreadCrumb from '../components/Breadcrumb'
import StripeCheckout from '../components/StripeCheckout'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// extra imports
import { useCartContext } from '../context/cart_context'

const CheckoutPage = () => {
    const { cart } = useCartContext();
    return (
        <main>
            <BreadCrumb title="checkout"></BreadCrumb>
            <Wrapper className='page'>
                {cart.length < 1 ? <div className="empty">
                    <h2>your cart is empty</h2>
                    <Link to='/products' className='btn'>
                        fill it
                    </Link>
                </div> : (<StripeCheckout />)}
            </Wrapper>
        </main>
    )
}
const Wrapper = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    .empty {
        text-align:center;
    }

`

export default CheckoutPage
