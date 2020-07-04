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

export function bootstrap(props) {
  return Promise.resolve().then(() => {
    return lifecycles.bootstrap(props);
  });
}

export function mount(props) {
  return window.appMount.then(() => {
    return lifecycles.mount(props);
  });
}

export function unmount(props) {
  return Promise.resolve().then(() => {
    return lifecycles.unmount(props);
  });
}

export { links } from './root.helper';

export const devtools = {
  overlays: {
    selectors: ['.root.dashboardHeight'],
    options: {
      color: 'red',
    },
  },
};
