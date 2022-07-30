import React from 'react'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import Product from '../components/Product'

const FeaturedProducts = () => {
  const data = useProductsContext();
  const { products } = data;

  const featuredProducts = products.filter((product) => {
    return product.featured;
  });
  return (
    <Wrapper className="section">
      <div className="title">
        <h1>Featured Products</h1>
        <div className='underline'></div>
      </div>
      <div className="section-center featured">
        {featuredProducts.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
    </Wrapper >
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  margin-top:6rem;
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts
