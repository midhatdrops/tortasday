/*
font-family: 'Ballet', cursive;
font-family: 'Sacramento', cursive;
font-family: 'Shippori Mincho', serif;
font-family: 'Ubuntu', sans-serif;
*/

import React, { useEffect, useState } from 'react';

import { HomePage } from './Pages/Homepage';
import { LoadingPage } from './Pages/Loading';

export const App = () => {
  const [state, SetState] = useState('LOADING');
  useEffect(() => {
    setTimeout(() => {
      SetState('LOADED');
    }, 1000);
  });
  // eslint-disable-next-line no-unused-vars
  return (
    <>
      {state === 'LOADING' && <LoadingPage />}
      {state === 'LOADED' && <HomePage />}
    </>
  );
};
