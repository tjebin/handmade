import React from 'react'
import styled from 'styled-components'
import BreadCrumb from '../components/Breadcrumb'
import aboutImg from '../assets/images/light.jpg'

const AboutPage = () => {
  return (
    <main>
      <BreadCrumb title='About' />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="About" />
        <article>
          <div className="title">
            <h2>About Us</h2>
            <div className='underline'></div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Necessitatibus,
            provident! Natus tempore harum possimus
            itaque molestias, quasi minima vero error,
            magni aliquam qui sunt architecto minus voluptatem,
            commodi quis optio.</p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
    background: var(--clr-grey-1);
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default AboutPage
