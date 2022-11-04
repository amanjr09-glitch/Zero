import React from "react";
import styled from "styled-components";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

  return (
    <Wrapper>
      <div className="section-center">
        <h3>Contact Us</h3>
        <div className="underline"></div>
        <div className="content">
          <p>
            For any queries or clarifications regarding our products and services, feel free to contact us.
          </p><br></br>
          <p><b>Phone-</b>8960967697</p><br></br>
          <p><b>Address-</b>555ch/ 29(A), Ramnagar, Alambagh Lucknow (226005), Uttar Pradesh</p><br></br>
          <p><b>E-mail-</b>support@konohatrendz.com</p>
          {/* <div className="form-container">
         <form class="vertical-form" action="https://submit-form.com/fK6lOCQE">
            <label for="first-name">First name</label>
            <input id="first-name" name="first-name" type="text" />
            <label for="last-name">Last name</label>
            <input id="last-name" name="last-name" type="text" />
            <label for="email" >E-mail</label>
            <input type="email" name="email" required />
            <label for="message">Message</label>
            <textarea id="message" name="message" cols="15" rows="5"></textarea>
            <button type="submit">Submit</button>
          </form>  
          </div> */}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }

  // .vertical-form {
  //   display: flex;
  //   flex-direction: column;
  //   gap: 0.5rem;
  //   max-width: 500px;
  // }
  // .vertical-form label{
  //     border-radius: 10px;
    
  // }

  .form-container{
    margin-top:20px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    label{
      margin-left: 30px;
      max-width: 45em;
      color: var(--clr-grey-5);
      flex:1;
    }
    input{
         margin-left:10px;
         display:flex;
         flex-direction:row;
    }
  }



  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);

  }


  @media (min-width: 992px) {
    .content {
      // display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
  .message .txt textarea{
    padding: 0px 15px 8px 15px;
    border-radius: 5px;
    margin-left:80px;

  }
`;

export default Contact;
