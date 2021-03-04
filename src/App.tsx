/*
font-family: 'Ballet', cursive;
font-family: 'Sacramento', cursive;
font-family: 'Shippori Mincho', serif;
font-family: 'Ubuntu', sans-serif;
*/

import React from 'react';
import { Reset } from 'styled-reset';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './Pages/Homepage';
import { History } from './Pages/History';
import { Comunnity } from './Pages/Comunnity';

export const App = () => {
  // const [state, SetState] = useState('LOADING');

  // useEffect(() => {
  //   setTimeout(() => {
  //     SetState('LOADED');
  //   }, 1000);
  // });
  // eslint-disable-next-line no-unused-vars
  return (
    <>
      <Reset />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/history" component={History} />
          <Route path="/community" component={Comunnity} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
