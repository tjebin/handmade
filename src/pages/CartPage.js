import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CartContent, Breadcrumb } from '../components'

const CartPage = () => {
    const { cart } = useCartContext();
    if (cart.length < 1) {
        return (
            <Wrapper>
                <div className="empty">
                    <h2>Your Cart Is Empty</h2>
                    <Link to="/products" className="btn">
                        fill it
                    </Link>
                </div>
            </Wrapper>
        );
    }
    return <Wrapper>
        <Breadcrumb title="cart" />
        <section className='page'>
            <CartContent cart={cart} />
        </section>
    </Wrapper>
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage
