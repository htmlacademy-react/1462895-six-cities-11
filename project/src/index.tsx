import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/app/app';
import { store } from './store';

import { offers } from './mocks-off/offers';
import { reviews } from './mocks-off/reviews';

const Settings = {
  offersCount: 313,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        offersCount={Settings.offersCount}
        offers={offers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
);
