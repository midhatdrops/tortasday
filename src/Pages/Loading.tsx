import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #121212;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Span = styled.span`
  width: 50%;
  font-family: 'Sacramento', cursive;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 8px;
  color: whitesmoke;
`;

const BarBackground = styled.div`
  width: 50%;
  height: 20px;
  border: 2px solid whitesmoke;
  box-sizing: border-box;
`;

const BarFill = styled.div`
  background-color: whitesmoke;
  width: 0%;
  height: 100%;
  box-sizing: content-box;
`;

export const LoadingPage: React.FC = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    // eslint-disable-next-line consistent-return
    setInterval(() => {
      let newWidth = width;
      setWidth((newWidth += 1));
      if (newWidth >= 100) {
        return setWidth(100);
      }
      return setWidth(newWidth);
    }, 1);
  });
  return (
    <Background>
      <Span>Teste</Span>
      <BarBackground>
        <BarFill />
      </BarBackground>
    </Background>
  );
};
