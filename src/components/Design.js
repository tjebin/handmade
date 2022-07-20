import React from 'react'
import styled from 'styled-components'
import bedding_set from '../assets/images/bedding_set.jpg'
import bamboo_tray from '../assets/images/bamboo_tray.jpg'
import { Link } from 'react-router-dom'

const Design = () => {
    return (
        <Wrapper className="section-center">
            <article className="content">
                <h1>Handmade Colllections</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cumque, corporis. Exercitationem, veritatis
                    sint quam soluta atque doloribus iusto dignissimos
                    quaerat culpa at tempore repellendus asperiores deserunt
                    molestiae pariatur nihil hic?</p>
                <Link to="/products" className="btn shop-btn">Shop Now</Link>
            </article>
            <article className="img-container">
                <img src={bedding_set} alt="Main Img" className='main-img' />
                <img src={bamboo_tray} alt="Main Img" className='accent-img' />
            </article>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .shop-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
      border : 1px solid red;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Design
