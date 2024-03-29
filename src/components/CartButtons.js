import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const CartButtons = () => {
  const data = useProductsContext();
  const { setCloseSidebar } = data;
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  const result = myUser ? myUser.name.split('@')[0] : '';

  return <Wrapper>
    <Link to="/cart" className="cart-btn" onClick={setCloseSidebar}>
      Cart
      <span className="cart-container">
        <FaShoppingCart />
        <span className="cart-value">{total_items}</span>
      </span>
    </Link>
    {myUser ? (
      <button type="submit" className='auth-btn' onClick={() => {
        clearCart(); logout(
          { returnTo: window.location.origin }
        )
      }}>
        {result} Logout <FaUserMinus />
      </button>
    ) : (
      <button type="button" className='auth-btn' onClick={() => loginWithRedirect()}>
        Login <FaUserPlus />
      </button>
    )
    }
  </Wrapper >
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  font-size: 12px;
  /* width: 225px; */

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
  }
  .cart-container {
    position: relative;
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
  }
`
export default CartButtons