import React from 'react';
import '@/styles/global-styles.scss'
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { NextPage } from 'next';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: NextPage<any> = ({Component, pageProps}) => {  

  return (
    <React.StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Provider>
    </React.StrictMode>
  )
}

export default App