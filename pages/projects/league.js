import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Grid,
  GridItem,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Spacer,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { ChampionGridItem } from "../../components/grid-item";
import { IconButtonItem } from "../../components/league/icon-button";
import Layout from "../../components/layouts/article";
// import LaneTab from "../../components/league/LaneTab";

const League = () => {
  const [champions, setChampions] = useState({});
  const [rotation, setRotation] = useState({});

  // const [championTags, setChampionTags] = useState({});
  let chooseRole = "All";
  const searchRef = useRef("");

  //get champion list
  const getChampionInfo = async () => {
    const res = await fetch("http://localhost:8080/api/v2/champions", {
      method: "GET",
    });
    const championNamesAndTags = await res.json();
    setChampions(championNamesAndTags);
  };

  useEffect(() => {
    getChampionInfo();
  }, []);

  //get champion rotation
  const getChampionRotation = async () => {
    const res = await fetch("http://localhost:8080/api/v2/rotation", {
      method: "GET",
    });
    const championRotation = await res.json();
    setRotation(championRotation);
  };

  //render champion grid
  const ChampionList = React.memo(({ champions }) =>
    champions.map((champion) => {
      const laneFormat = champion["lanes"].map((lane) => ` ${lane} `);

      return (
        <ChampionGridItem
          id={champion.name}
          lane={laneFormat}
          title={champion.name}
          thumbnail={`/images/projects/league/championImages/${champion.name}.webp`}
        >
          {champion.name}
        </ChampionGridItem>
      );
    })
  );

  //search bar functionality - search by champion
  const updateList = (string) => {
    champions.forEach((champion) => {
      const eleId = document.getElementById(champion.name);

      if (eleId) {
        if (champion["name"].toLowerCase().includes(string.toLowerCase())) {
          eleId.style.display = "block";
        } else {
          eleId.style.display = "none";
        }
      }
    });
  };

  const onSearchChange = (e) => {
    searchRef.current = e.target.value;
    updateList(searchRef.current);
  };

  //button filter functionality
  const onTabChange = (e) => {
    const searchBar = document.getElementById("championSearch");
    searchBar.value = "";

    champions.forEach((champion) => {
      const eleId = document.getElementById(champion.name);

      if (e.currentTarget.value === "All") {
        eleId.style.display = "block";
        return;
      } else if (eleId) {
        eleId.style.display = "none";
      }
    });
    const eleClass = document.getElementsByClassName(e.currentTarget.value);

    for (let i = 0; i < eleClass.length; i++) {
      if (eleClass[i]) {
        eleClass[i].style.display = "block";
      }
    }
  };

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
              <Tabs
                // onChange={onTabChange}
                defaultIndex={0}
                size="md"
                align="center"
                variant="unstyled"
                color="whiteAlpha.900"
              >
                <TabList>
                  <Tab
                    borderWidth="1px"
                    borderLeftRadius="5px"
                    pl={3}
                    pr={3}
                    _selected={{ bg: "#5383E8" }}
                  >
                    All
                  </Tab>
                  <Tab
                    borderWidth="1px"
                    pl={3}
                    pr={3}
                    _selected={{ bg: "#5383E8" }}
                  >
                    Top
                  </Tab>
                  <Tab
                    borderWidth="1px"
                    pl={3}
                    pr={3}
                    _selected={{ bg: "#5383E8" }}
                  >
                    Jungle
                  </Tab>
                  <Tab
                    borderWidth="1px"
                    pl={3}
                    pr={3}
                    _selected={{ bg: "#5383E8" }}
                  >
                    Mid
                  </Tab>
                  <Tab
                    borderWidth="1px"
                    pl={3}
                    pr={3}
                    _selected={{ bg: "#5383E8" }}
                  >
                    Bot
                  </Tab>
                  <Tab
                    borderWidth="1px"
                    pl={3}
                    pr={3}
                    borderRightRadius="5px"
                    _selected={{ bg: "#5383E8" }}
                  >
                    Support
                  </Tab>
                </TabList>
                {/* <TabPanels>
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
              </TabPanels> */}
              </Tabs>
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
            <label>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.500" />}
                />
                <Input
                  id="championSearch"
                  onChange={onSearchChange}
                  type="search"
                  variant="filled"
                  backgroundColor="rgb(28,28,31)"
                  placeholder="Search a Champion"
                  mb={2}
                  color="white"
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
                icon="/images/projects/league/FillIcon.png"
                value="All"
                onClick={onTabChange}
              />
              <IconButtonItem
                borderRadius="0px"
                borderRightWidth="0px"
                icon="/images/projects/league/TopIcon.png"
                value="Tank"
                onClick={onTabChange}
              />
              <IconButtonItem
                borderRadius="0px"
                borderRightWidth="0px"
                icon="/images/projects/league/JungleIcon.png"
                value="Fighter"
                onClick={onTabChange}
              />
              <IconButtonItem
                borderRadius="0px"
                borderRightWidth="0px"
                icon="/images/projects/league/MidIcon.png"
                value="Mage"
                onClick={onTabChange}
              />
              <IconButtonItem
                borderRadius="0px"
                borderRightWidth="0px"
                icon="/images/projects/league/BotIcon.png"
                value="Marksman"
                onClick={onTabChange}
              />
              <IconButtonItem
                borderLeftRadius="0px"
                icon="/images/projects/league/SupIcon.png"
                value="Support"
                onClick={onTabChange}
              />
            </Flex>
            <Flex
              flexWrap="wrap"
              alignItems="center"
              justifyContent="center"
              m={-5}
              mt={2}
            >
              {champions.length > 0 ? (
                <ChampionList champions={champions} />
              ) : (
                <div>Loading...</div>
              )}
            </Flex>
          </GridItem>
          <GridItem p={2} bg="rgb(49,49,60)" borderRadius="5px" area={"stats"}>
            main
          </GridItem>
        </Grid>
      </Box>
    </Layout>
  );
};

export default League;
