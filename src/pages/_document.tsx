/* eslint-disable @next/next/no-sync-scripts */
import React from 'react';
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <title>La Casa de Papel - Hiago Benitez</title>
          <meta
            name="description"
            content="Site Desenvolvido em React.Js - Next.JS, com intuito de aprofundar a técnicas e conhecimentos avançados em programação, animação e a lib GSAP."
          />
          <meta
            property="og:title"
            content="La Casa de Papel - Hiago Benitez"
          />

          <meta property="og:url" content="https://lacasa.hiagobenitez.com/" />
          <meta
            property="og:description"
            content="Site Desenvolvido para estudo, conhecimento em GSAP, Next.JS - conceitos de Ux/Ui"
          ></meta>
          <meta
            property="og:image"
            content="https://www.kindpng.com/picc/m/763-7636587_la-casa-de-papel-icon-hd-png-download.png"
          ></meta>
          <meta property="og:type" content="article" />
          <meta property="og:locale" content="en_GB" />
          <meta property="og:locale:alternate" content="fr_FR" />
          <meta property="og:locale:alternate" content="es_ES" />

          <meta itemProp="name" content="La Casa de Papel - Hiago Benitez" />
          <meta
            itemProp="description"
            content="Site Desenvolvido em React.Js - Next.JS, com intuito de aprofundar a técnicas e conhecimentos avançados em programação, animação e a lib GSAP."
          />
          <meta
            itemProp="image"
            content="https://www.kindpng.com/picc/m/763-7636587_la-casa-de-papel-icon-hd-png-download.png"
          />

          <meta property="og:url" content="https://lacasa.hiagobenitez.com" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="La Casa de Papel - Hiago Benitez"
          />
          <meta
            property="og:description"
            content="Site Desenvolvido em React.Js - Next.JS, com intuito de aprofundar a técnicas e conhecimentos avançados em programação, animação e a lib GSAP."
          />
          <meta
            property="og:image"
            content="https://www.kindpng.com/picc/m/763-7636587_la-casa-de-papel-icon-hd-png-download.png"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="La Casa de Papel - Hiago Benitez"
          />
          <meta
            name="twitter:description"
            content="Site Desenvolvido em React.Js - Next.JS, com intuito de aprofundar a técnicas e conhecimentos avançados em programação, animação e a lib GSAP."
          />
          <meta
            name="twitter:image"
            content="https://www.kindpng.com/picc/m/763-7636587_la-casa-de-papel-icon-hd-png-download.png"
          />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Mukta:wght@200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          ></link>

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />

          <link rel="icon" type="image/svg" href="./images/iconLaCasa.svg" />

          <link
            rel="shortcut icon"
            href="/assets/favicon.png"
            type="image/png"
          />
          <script src="js/app.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.2.1/tilt.jquery.min.js"></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
