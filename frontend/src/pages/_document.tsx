import { NextPage } from 'next';
import { Html, Head, Main, NextScript } from 'next/document'

const Document: NextPage = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <div id="side-navigation" />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;