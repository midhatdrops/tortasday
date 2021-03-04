import styled from 'styled-components';

export const Button = styled.button`
  font-family: 'Ubuntu', sans-serif;
  color: whitesmoke;
  font-weight: 400;
  font-size: 1.5rem;
  opacity: 0.6;
  transition: 0.5s opacity easy-in-out;
  margin-right: 30px;
  background: none;
  border: 0px;
  :focus {
    border: 0px;
    outline: none;
  }
  :active {
    border: 0px;
    outline: none;
  }

  @media (max-width: 540px) {
    font-family: 'Ubuntu', sans-serif;
    color: whitesmoke;
    font-weight: 400;
    font-size: 0.7rem;
    opacity: 0.6;
    transition: 0.5s opacity easy-in-out;
    margin-right: 30px;
    background: none;
    border: 0px;
    :focus {
      border: 0px;
      outline: none;
    }
    :active {
      border: 0px;
      outline: none;
    }
  }

  @media (max-width: 280px) {
    width: 20%;
    font-family: 'Ubuntu', sans-serif;
    color: whitesmoke;
    font-weight: 400;
    font-size: 0.6rem;
    opacity: 0.6;
    transition: 0.5s opacity easy-in-out;
    /* margin-right: 30px; */
    background: none;
    border: 0px;
    :focus {
      border: 0px;
      outline: none;
    }
    :active {
      border: 0px;
      outline: none;
    }
  }
`;
