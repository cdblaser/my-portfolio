import React from "react";
import RoguelikeMain from "../../components/roguelike/RoguelikeMain";

const Roguelike = () => {
  return <RoguelikeMain width={40} height={40} tileSize={16} />;
};

export default Roguelike;
export { getServerSideProps } from "../../components/chakra";
