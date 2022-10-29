import React from "react";
import { Flex } from "@chakra-ui/react";
import { ChampionGridItem } from "../grid-item";

const ChampIconList = ({ search, champions }) => {
  console.log(search);
  return (
    <Flex
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      m={-5}
      mt={2}
    >
      {champions
        .filter((name) =>
          name.toLowerCase().includes(search.toLowerCase().trim())
        )
        .map((champion) => (
          <ChampionGridItem
            id={champion}
            title={champion}
            thumbnail={`/images/projects/league/championImages/${champion}.webp`}
          >
            {champion}
          </ChampionGridItem>
        ))}
    </Flex>
  );
};

export default ChampIconList;
