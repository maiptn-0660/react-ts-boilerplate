import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import MainApp from './views/pages/Main';
import GlobalStyle from './styles';

import i18n from './i18n';
import store from './stores';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider {...store}>
        <BrowserRouter>
          <MainApp />
          <GlobalStyle />
        </BrowserRouter>
      </Provider>
    </I18nextProvider>
  );
}

export default App;
