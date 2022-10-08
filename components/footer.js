import { Box, Stack, useColorModeValue, Button, Flex } from "@chakra-ui/react";
import { IoLogoGithub, IoLogoDiscord, IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <Box
      position="absolute"
      w="100%"
      height={{ base: "2.5em", md: "3.5em" }}
      wrap="wrap-reverse"
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        width={{ base: "full" }}
        alignItems="center"
        justifyContent="space-evenly"
        wrap="wrap"
        white-space="nowrap"
        flexGrow={1}
        mt={{ base: 4, nmd: 0 }}
        paddingX={2}
        bg={useColorModeValue("telegram.200", "telegram.800")}
      >
        <Button
          as="a"
          href="https://github.com/cdblaser"
          target="_blank"
          variant="ghost"
          colorScheme="telegram"
          leftIcon={<IoLogoGithub />}
          style={{ fontSize: "14px" }}
        >
          @cdblaser
        </Button>

        <Button
          as="a"
          href="https://discord.com"
          target="_blank"
          variant="ghost"
          colorScheme="telegram"
          leftIcon={<IoLogoDiscord />}
          style={{ fontSize: "14px" }}
        >
          @Bignob#6843
        </Button>

        <Button
          as="a"
          href="https://www.youtube.com/channel/UCFcd23kyFYF5lkYeJk-Rw1A"
          target="_blank"
          variant="ghost"
          colorScheme="telegram"
          leftIcon={<IoLogoYoutube />}
          style={{ fontSize: "14px" }}
        >
          @c13
        </Button>
      </Stack>
      <Flex
        alignItems="center"
        justifyContent="center"
        bg={useColorModeValue("telegram.200", "telegram.800")}
        md={2}
      >
        <p style={{ fontSize: 10 }}>
          <a
            href="https://www.craftz.dog/"
            target="_blank"
            rel="noopen noreferrer"
          >
            Shoutout to Craftzdog!
          </a>
        </p>
      </Flex>
    </Box>
  );
};

export default Footer;
