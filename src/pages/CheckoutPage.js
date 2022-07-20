import React from 'react'
import BreadCrumb from '../components/Breadcrumb'
import styled from 'styled-components'

const CheckoutPage = () => {
    return (
        <main>
            <BreadCrumb title="checkout"></BreadCrumb>
            <Wrapper className='page'></Wrapper>
        </main>
    )
}
const Wrapper = styled.div``

export default CheckoutPage
