import React from 'react';
import '@/styles/global-styles.scss'
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store';

const store = setupStore();

const App: React.FC<any> = ({Component, pageProps}) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App