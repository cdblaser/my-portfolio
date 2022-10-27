import React, { useState, useEffect, Fragment } from "react";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { ChampionGridItem } from "../../components/grid-item";

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

  // {champions.map((champion) => (
  //   <div>{champion}</div>
  // ))}

  const getChampionImages = async () => {
    const res = await fetch("http://localhost:8080/championImages", {
      method: "GET",
    });
    const championImagesArray = await res.json();
    setChampionImages(championImagesArray);
  };

  useEffect(() => {
    getChampionNames();
    // getChampionImages();
  }, []);

  if (!champions) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container>
        <SimpleGrid columns={[6]} spacingY={1} spacingX={1}>
          {champions.map((champion) => (
            // <Fragment>
            <ChampionGridItem
              id={champion}
              thumbnail={`/images/projects/championImages/${champion}_0.jpg`}
              title={champion}
            >
              {champion}
            </ChampionGridItem>
            // </Fragment>
          ))}
        </SimpleGrid>
      </Container>
    );
  }

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
