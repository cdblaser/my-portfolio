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
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: scaleX(-1);
  }
`;

const Logo = () => {
  const footPrintImg = `/images/bouncingSlime${useColorModeValue("", "")}.gif`;

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image
            src={footPrintImg}
            width={40}
            height={40}
            alt="bouncingSlimeGif"
            unoptimized={true}
          />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontWeight="bold"
            ml={3}
            mt={4}
          >
            Home
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
