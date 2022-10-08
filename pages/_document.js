import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../lib/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
        </Head>

        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

/*
TODO:

5. Works --> idleclicker page - finish idleclicker, put it in here
6. Works --> roguelike page - finish roguelike, put it in here

Coworker was EA for CEO of robert's last job. she helps write resumes. she knows somebody who can potentially get me a job.
will she help me get a good resume? we'll see
*/
