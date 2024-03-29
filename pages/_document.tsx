import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render(): React.JSX.Element {
    return <Html lang={'ru'}>
      <Head/>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>;
  }
}