import './set-public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Root from './root.component';

// eslint-disable-next-line no-undef

function domElementGetter() {
  let el = document.getElementById('app');
  if (!el) {
    el = document.createElement('div');
    el.id = 'app';
    el.className = process.env.PROJECT_NAME;
    document.body.appendChild(el);
  }
  return el;
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary() {
    return React.createElement('div', null, 'error');
  },
  domElementGetter,
});

export const { bootstrap, mount, unmount } = lifecycles;

export const devtools = {
  overlays: {
    selectors: ['.root.dashboardHeight'],
    options: {
      color: 'red',
    },
  },
};
