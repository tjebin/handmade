import React from 'react'
import { DefaultContext } from 'react-icons/lib';
import styled from 'styled-components';


const Footer = () => {
  return (
    <Wrapper>
      <h5> &copy; {new Date().getFullYear()}
        <span> Handmade</span>
      </h5>
      <h5>All rights reserved</h5>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
    background-color: var( --clr-black);
    color:var(--clr-white);
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    height:5rem;
      span{
        color: var(--clr-primary-5)
      }

      h5{
        color: var(--clr-white);
        margin:0.1rem;
        font-weight:400;
        text-transform: none;
        line-height: 1.25;
      }

      @media(min-width: 776px){
       flex-direction: row;
      }
`;

export default Footer
