import styled from "styled-components";
export const MainWrapper = styled.div`
  padding: 2rem;
  margin: 5rem auto 0 auto;

  .search-bar {
    display: flex;
    border: none;
    outline: none;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    border-radius: 25px;
    padding: 0.5rem 1rem;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 2rem;
    background-color: #fff;
  }
  input {
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0.5rem;
    width: 100%;
    background-color: transparent;
  }
`;

export const CardContainer = styled.div`
  margin: 0 auto;
  display: grid;
  /* grid-template-columns: repeat(5, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  } */
`;

export const ContentWrapper = styled.div`
  padding: 2rem;
  display: grid;
  gap: 2rem;
  max-width: 1600px;
  margin: 0 auto;
  @media (max-width: 768px) {
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  padding: 1rem;
  max-width: 350px;
  width: 100%;
  /* max-height: 300px;
  height: 100%; */

  .card {
    width: 100%;
    height: 350px;
    border-radius: 10px;
    position: relative;
    margin: 0.5rem auto;

    gap: 1rem;
    z-index: 101;

    animation: 0.5s ease-in-out 0s 1 normal forwards fadeIn;
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(-30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0px);
      }
    }

    @media (max-width: 768px) {
      background-color: #fff;
      height: 300px;
      width: 100%;
    }
  }

  .card:hover .code-block {
    box-shadow: none;
    display: block;
  }

  .card:hover {
    scale: 1.1;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    z-index: 110;
  }

  .card-header {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 1rem;
    height: 130px;
    background-color: #fff;

    &:hover {
      box-shadow: none;
    }

    @media (max-width: 768px) {
      box-shadow: none;
      height: 80px;
    }
  }

  .code-block {
    /* position: absolute;
    bottom: 3%;
    left: 0;
    right: 0; */
    display: none;
    @media (max-width: 768px) {
      display: block;
      max-width: 300px;

      margin: 0 auto;
    }
  }

  .card:hover .card-header {
    box-shadow: none;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .code-description {
    font-size: 1.2rem;
    padding: 1rem;
    margin-top: 1rem;
  }
`;
