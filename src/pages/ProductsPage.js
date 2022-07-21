import React from 'react'
import styled from 'styled-components';
import { useProductsContext } from '../context/products_context'
import BreadCrumb from '../components/Breadcrumb'


const ProductsPage = () => {
    const data = useProductsContext();
    const {
        products,
        products_loading,
        products_error
    } = data;
    return (
        <Wrapper>
            <BreadCrumb title="products"></BreadCrumb>
            <div className="products section-center">
                <section>Sidebar</section>
                <section>Products display</section>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 7rem auto;
    border:1px solid red;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`


export default ProductsPage
