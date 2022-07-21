import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { formatPrice } from '../utils/helpers'
import { Breadcrumb } from '../components'
import bamboo_bowl from '../assets/images/bamboo_bowl.jpg'

import {
    Loading,
    Error,
    ProductImages,
    AddToCart,
    Stars,
    PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
    return <Wrapper>
        <Breadcrumb title="Products"></Breadcrumb>
        <section className="product-center section-center">
            <article >
                <img src={bamboo_bowl} alt="bamboo_bowl" />
            </article>
            <article>
                <h2>Bamboo Bowl</h2>
                <h3 className="price">$8.00</h3>
                <p>Wooden Bowl Made with Superior Quality wood.</p>

            </article>
        </section>
    </Wrapper>
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
    img{
        width:50%;
        height:100%;
    }
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
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage

