import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import AmountButtons from './AmountButtons'
import { useCartContext } from '../context/cart_context'

const AddToCart = ({ product }) => {
  const { stock, id, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const { cart, total_items, total_amount, shipping_fee, addToCart } = useCartContext();

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  }

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  }

  return <Wrapper>
    <div className="colors">
      <span> colors : </span>
      <div>{
        colors.map((color, index) => {
          return <button
            key={index}
            style={{ background: color }}
            className={`${mainColor === color ? 'color-btn active' : 'color-btn'}`}
            onClick={() => setMainColor(color)}>
            {mainColor === color ? <FaCheck /> : null}
          </button>
        })
      }</div>
    </div>
    <div className="btn-container">
      <AmountButtons decrease={decrease} increase={increase} amount={amount} />
      <Link to="/cart" className='btn'
        onClick={() => addToCart(
          id, mainColor, amount, product
        )}>
        Add To Cart
      </Link>
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: var(--mainColor);
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }

  .amount {
    display: flex;
    column-gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;
    font-weight:700;
    cursor: pointer;
    font-size:2rem;
  
  }
`
export default AddToCart

