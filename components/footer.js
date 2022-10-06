import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  List,
  ListItem,
  Button,
} from "@chakra-ui/react";
import Paragraph from "./paragraph";
import { IoLogoGithub, IoLogoDiscord, IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <Box position="absolute" w="100%" height="2.5em" wrap="wrap-reverse">
      <Stack
        direction={{ base: "row" }}
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
        <p style={{ fontSize: 14 }}>
          <a
            href="https://www.craftz.dog/"
            target="_blank"
            rel="noopen noreferrer"
          >
            Shoutout to Craftzdog!
          </a>
        </p>
      </Stack>
    </Box>
  );
};

export default Footer;
