import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&amp;family=Poppins:wght@400;500;600;700&amp;display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/icon/logo.svg" type="image/svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2120727219771886" crossOrigin="anonymous"></script> */}
    </Html>
  )
}