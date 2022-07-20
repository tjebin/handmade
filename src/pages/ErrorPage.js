import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <Wrapper>
            <section className='page-100'>
                <h1>404</h1>
                <h5>Sorry, the page you tried can not be found!</h5>
                <Link to="/"><button type="button" >Back home</button></Link>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: var(--clr-primary-5);
    display:flex;
    justify-content:center;
    text-align:center;
    align-items: center;
    color:var(--clr-black);
    line-height:2.0rem;
    button {
        background-color: var(--clr-primary-3);
        padding:0.5rem;
        border:transparent;
        &:hover {
            padding-bottom: 0.5rem;
            background: var( --clr-primary-10);
            color: var(--clr-grey-2);
            cursor: hand;
        }
    }
`;

export default ErrorPage
