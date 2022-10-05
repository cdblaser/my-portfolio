import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(90deg);
  }
`;

const Logo = () => {
  const footPrintImg = `/images/bouncingSlime${useColorModeValue("", "")}.gif`;
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image
            src={footPrintImg}
            width={40}
            height={40}
            alt="bouncingSlimeGif"
          />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily="monospace"
            fontWeight="bold"
            ml={3}
          >
            Curtis Blaser
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
