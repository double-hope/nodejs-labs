import React from 'react';
import '@/styles/global-styles.scss'

const App: React.FC<any> = ({Component, pageProps}) => {
  return (
    <Component {...pageProps} />
  )
}

export default App