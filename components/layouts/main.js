import Head from "next/head";
import Navbar from "../navbar.js";
import noSsr from "../no-ssr.js";
import { Box, Container } from "@chakra-ui/react";
import VoxelDog from "../voxel-dog.js";
import NoSsr from "../no-ssr.js";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale = 1"
        ></meta>
        <title>Curtis Blaser - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
