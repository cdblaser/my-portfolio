import NextLink from "next/link";
import Image from "next/image";
import { Link, Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank" rel="noopener noreferrer">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const ProjectGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" align="center">
    <NextLink href={`/projects/${id}`} scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="empty"
          unoptimized={true}
        />
        <LinkOverlay href={`/projects/${id}`}>
          <Text mt={2} fontSize={20} colorScheme="telegram">
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);

export const PortfolioGridItem = ({ children, href, id, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="empty"
      />
      <LinkOverlay href={href} target="_blank" rel="noopener noreferrer">
        <Text mt={2} fontSize={20} colorScheme="telegram">
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const ChampionGridItem = ({ id, title, children, thumbnail }) => (
  <Box w="15%" align="center" key={id}>
    <NextLink href={`/projects/league/${id}`} scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          layout="fixed"
          width={50}
          height={50}
          src={thumbnail}
          alt={title}
          title={title}
          className="grid-item-thumbnail"
          placeholder="empty"
        />
        {/* <LinkOverlay href={`/projects/league/${id}`}></LinkOverlay> */}
        <Text
          alignSelf="flex-start"
          wordBreak=""
          fontSize={11}
          color="whiteAlpha.800"
          noOfLines={1}
          fontFamily="monospace"
          fontWeight="thin"
          mt={-3}
          p={1}
        >
          {children}
        </Text>
      </LinkBox>
    </NextLink>
  </Box>
);

export const GridItemStyle = () => (
  <Global styles={`.grid-item-thumbnail {border-radius: 12px;}`} />
);
