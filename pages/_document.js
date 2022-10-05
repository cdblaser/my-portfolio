import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../lib/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
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
3. light/dark mode - reverse pics (personal preference)
5. Works --> idleclicker page - finish idleclicker, put it in here
6. Works --> roguelike page - finish roguelike, put it in here
7. Posts page - either remove this or figure out what to put here.
*/
