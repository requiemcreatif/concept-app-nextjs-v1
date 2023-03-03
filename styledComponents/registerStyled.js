import styled from "styled-components";

export const Form = styled.form`
  width: 30rem;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  //margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 30rem;

  &:focus {
    outline: none;
    border: 1px solid #203f59;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Button = styled.button`
  margin-top: 2rem;
  padding: 1rem;
  //background-color: #203f59;

  background: #053651;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: 30rem;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: linear-gradient(to right, #053651, #ffffff);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Wrapper = styled.div`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin: 20rem auto;
  max-width: 900px;
  width: 100%;
  max-height: 600px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin: 10rem auto;

    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: auto;
    box-shadow: none;
  }

  .form-intro {
    background: linear-gradient(to bottom, #053651, #ffffff);
    background-color: #203f59;
    color: #fff;
    padding: 2rem;
    height: 100%;
    border-radius: 10px 0 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    font-size: 1.5rem;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const FormWrapper = styled.div`
  background-color: #fff;
  display: grid;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 45rem;

  //box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 10px;

  @media (max-width: 768px) {
    margin: 0 auto;
    width: 35rem;
  }

  .header-form {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-bottom: 0.5rem;
      font-size: 2rem;
      font-weight: 600;
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      color: #203f59;
      font-weight: 600;
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #203f59;
  //border: 2px solid #203f59;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  padding: 20px;
  max-width: 500px;
  width: 100%;
  text-align: center;
  transition: all 0.3s ease-in-out;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
`;
