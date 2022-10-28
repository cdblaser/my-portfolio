import { IconButton, Image, useColorModeValue } from "@chakra-ui/react";

export const IconButtonItem = ({
  borderRightRadius,
  borderLeftRadius,
  borderRadius,
  borderRightWidth,
  pl,
  pr,
  ml,
  mr,
  icon,
}) => (
  <IconButton
    colorScheme="rgb(49,49,60)"
    borderRightRadius={borderRightRadius}
    borderLeftRadius={borderLeftRadius}
    borderRadius={borderRadius}
    borderStyle="solid"
    borderWidth="1px"
    borderRightWidth={borderRightWidth}
    borderColor={useColorModeValue("gray", "whiteAlpha.700")}
    _hover={{ bg: "rgb(30,30,50)" }}
    _active={{ bg: "rgb(0,0,0)" }}
    _focus={{ bg: "rgb(83,131,232)" }}
    pl={pl}
    pr={pr}
    ml={ml}
    mr={mr}
    icon={<Image src={icon} width={8} height={8} />}
  />
);
