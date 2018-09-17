import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { ThemeProvider } from 'styled-components';

import './index.css';
import theme from './theme.json';
import App from './App';

import { ContentClient } from './content-client';
const client = new ContentClient();

if(process.env.REACT_APP_GA_TRACKING_ID) {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const rootEl = document.getElementById('root');
let content;

const render = (AppComponent) => {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <AppComponent content={content} />
    </ThemeProvider>,
    rootEl
  );
};

client.fetchContent().then(c => {
  content = c;
  render(App);
});

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}
