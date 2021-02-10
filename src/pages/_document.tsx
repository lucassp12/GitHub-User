import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

class Document extends NextDocument<Props> {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
