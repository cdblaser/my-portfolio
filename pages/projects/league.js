import React, { useState, useEffect, Fragment } from "react";
import {
  Container,
  SimpleGrid,
  Grid,
  GridItem,
  Box,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Flex,
  Spacer,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ChampionGridItem } from "../../components/grid-item";
import { IconButtonItem } from "../../components/league/icon-button";
import Layout from "../../components/layouts/article";
import BotIcon from "../../public/images/projects/league/BotIconChallenger.png";
import JungleIcon from "../../public/images/projects/league/JungleIconChallenger.png";
import MidIcon from "../../public/images/projects/league/MidIconChallenger.png";
import SupportIcon from "../../public/images/projects/league/SupportIconChallenger.png";
import TopIcon from "../../public/images/projects/league/TopIconChallenger.png";

const League = () => {
  const [champions, setChampions] = useState([]);
  const [championImages, setChampionImages] = useState([]);

  const getChampionNames = async () => {
    const res = await fetch("http://localhost:8080/champions", {
      method: "GET",
    });
    const championsArray = await res.json();
    setChampions(championsArray);
  };

  // const getChampionImages = async () => {
  //   const res = await fetch("http://localhost:8080/championImages", {
  //     method: "GET",
  //   });
  //   const championImagesArray = await res.json();
  //   setChampionImages(championImagesArray);
  // };

  useEffect(() => {
    getChampionNames();
    // getChampionImages();
  }, []);

  return (
    <Layout title="NaopggClone">
      <Box mt={4} mb={4}>
        <Grid
          templateAreas={`"header header"
                          "select stats"
                        `}
          gridTemplateRows={"48px 1fr"}
          gridTemplateColumns={"350px 1fr"}
          h="100%"
          w="1000px"
          gap={2}
          color="blackAlpha.700"
          backgroundColor="rgb(28,28,31)"
          fontWeight="bold"
          pt={2}
        >
          <GridItem p={1} bg="rgb(49,49,60)" borderRadius="5px" area={"header"}>
            <Flex justifyContent="center">
              <IconButtonItem
                pl={10}
                pr={10}
                ml={1}
                mr={5}
                icon="/images/placeholders/ominousSwordsman.png"
              />
              <IconButtonItem
                pl={10}
                pr={10}
                mr={5}
                icon="/images/projects/league/Emblem_Diamond.png"
              />
              <IconButtonItem
                pl={10}
                pr={10}
                mr={5}
                icon="/images/placeholders/ominousSwordsman.png"
              />

              <Spacer />

              <IconButtonItem
                borderRightRadius="0px"
                borderRightWidth="0px"
                pl={4}
                pr={4}
                icon="/images/projects/league/TopIconChallenger.png"
              />
              <IconButtonItem
                borderRadius="0px"
                borderRightWidth="0px"
                pl={4}
                pr={4}
                icon="/images/projects/league/JungleIconChallenger.png"
              />
              <IconButtonItem
                borderRadius="0px"
                borderRightWidth="0px"
                pl={4}
                pr={4}
                icon="/images/projects/league/MidIconChallenger.png"
              />
              <IconButtonItem
                borderRadius="0px"
                borderRightWidth="0px"
                pl={4}
                pr={4}
                icon="/images/projects/league/BotIconChallenger.png"
              />
              <IconButtonItem
                borderLeftRadius="0px"
                pl={4}
                pr={4}
                mr={1}
                icon="/images/projects/league/SupportIconChallenger.png"
              />
            </Flex>
          </GridItem>
          <GridItem
            p={2}
            pb={5}
            bg="rgb(49,49,60)"
            borderRadius="5px"
            area={"select"}
            width="100%"
          >
            <label for="championSearch">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.500" />}
                />
                <Input
                  id="championSearch"
                  type="search"
                  variant="filled"
                  backgroundColor="rgb(28,28,31)"
                  placeholder="Search a Champion"
                  mb={2}
                />
              </InputGroup>
            </label>

            <Flex
              justifyContent="center"
              pb={2}
              ml={-2}
              mr={-2}
              borderBottomWidth="1px"
              borderBottomColor="rgb(28,28,31)"
            >
              <IconButtonItem
                borderRightRadius="0px"
                borderRightWidth="0px"
                icon="/images/projects/league/TopIconChallenger.png"
              />
              <IconButtonItem
                borderRadius="0px"
                borderRightWidth="0px"
                icon="/images/projects/league/JungleIconChallenger.png"
              />
              <IconButtonItem
                borderRadius="0px"
                borderRightWidth="0px"
                icon="/images/projects/league/MidIconChallenger.png"
              />
              <IconButtonItem
                borderRadius="0px"
                borderRightWidth="0px"
                icon="/images/projects/league/BotIconChallenger.png"
              />
              <IconButtonItem
                borderLeftRadius="0px"
                icon="/images/projects/league/SupportIconChallenger.png"
              />
            </Flex>

            <Flex
              flexWrap="wrap"
              alignItems="center"
              justifyContent="center"
              m={-5}
              mt={2}
            >
              {champions.map((champion) => (
                <ChampionGridItem
                  id={champion}
                  title={champion}
                  thumbnail={`/images/projects/league/championImages/${champion}.png`}
                >
                  {champion}
                </ChampionGridItem>
              ))}
            </Flex>
          </GridItem>
          <GridItem p={2} bg="rgb(49,49,60)" borderRadius="5px" area={"stats"}>
            Main
          </GridItem>
        </Grid>
      </Box>
    </Layout>
  );

  //OUTDATED CODE

  // const [backendData, setBackendData] = useState([{}]);

  // const getData = async () => {
  //   const response = await freeChampRotation.get("");
  //   setBackendData(response.data);
  // };

  // useEffect(() => {
  //   // fetch("/api")
  //   //   .then((response) => response.json(response.data))
  //   //   .then((data) => {
  //   //     setBackendData(data);
  //   //   });
  //   getData();
  // }, []);
  // return (
  //   <div>
  //     {typeof backendData.freeChampionIds === "undefined" ? (
  //       <p>Loading...</p>
  //     ) : (
  //       backendData.freeChampionIds.map((user, i) => <p key={i}>{user}</p>)
  //     )}
  //   </div>
  // );
};

export default League;
