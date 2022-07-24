import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useProductsContext } from '../context/products_context'
import { formatPrice } from '../utils/helpers'
import { Breadcrumb } from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import {
  ProductImages,
  AddToCart,
  Stars
} from '../components'

const SingleProductPage = () => {
  const data = useProductsContext();
  const { getSingleProduct, singleProduct } = data;
  const { id } = useParams();
  const navigate = useNavigate();
  if (!singleProduct) {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000)
  }

  const { name, price, description, stock, stars, reviews, id: sku, company, images } = singleProduct;
  useEffect(() => {
    getSingleProduct(id);
  }, [id]);
  return <Wrapper>
    <Breadcrumb title="Single Product" product="product"></Breadcrumb>
    <section className="section page section-center">
      <Link to="/products" className='btn'>
        Back to products
      </Link>
      <div className="product-center">
        <ProductImages images={images} />
        <div className="content">
          <h2>{name}</h2>
          <Stars stars={stars} reviews={reviews} />
          <h5 className='price'>{formatPrice(price)}</h5>
          <p className="desc">{description}</p>
          <p className="info">
            <span>Available : </span>
            {stock > 0 ? 'In stock' : 'Out of stock'}
          </p>
          <p className="info">
            <span>SKU</span>
          </p>
          <p className="info">
            <span>Brand :</span>
            {company}
          </p>
          <hr />
          <p className="info">
            <span>Stock :</span>
            {stock}
          </p>
          {stock > 0 && <AddToCart product={singleProduct} />}
        </div>
      </div>
    </section>
  </Wrapper>
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
    /* img {
      width: 100%;
      display: block;
      border-radius: var(--radius);
      height: 500px;
      object-fit: cover;
    } */
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
    
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage

