import React from "react";
import styled from "styled-components";

const AboutPage = () => {
  return (
    <main>

      <Wrapper className="page section section-center">
        
        <article>
          <div className="title">
            <h2> About Us</h2>
            <div className="underline"></div>
          </div>
          <p>


            Ever ordered a T-shirt online and felt disappointed by its quality once that T-shirt was delivered to you? If your answer is yes, then you’re not the only one. We have faced it too and often wondered if this is the same T-shirt that fascinated us when we first discovered it online.
            This is exactly when few of us decided to end this array of disappointments for us and for you by launching Konoha Trendz. While we are not literally operating from Naruto’s ninja village called Konoha, we certainly try to incorporate a little bit of Ninja traits in our work ethics to deliver you the best clothing line in a swift Ninja style.
            From your favorite superheroes to supervillains, drip to quirky wears, or rocking your own music and sports tee, we have you covered.
            We all know nobody is perfect but we plan to give or best to you and be your one stop solution for shopping your favorite tees.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-2);
  }
  .title {
    text-align: center;
  }
  .underline {
    margin-left: 46%;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
