import React, { Fragment } from "react";
import RoguelikeMain from "../../components/roguelike/RoguelikeMain";

const Roguelike = () => {
  return (
    <Fragment>
      (game not supported on mobile.... yet!)
      <RoguelikeMain width={40} height={40} tileSize={16} />
    </Fragment>
  );
};

export default Roguelike;
export { getServerSideProps } from "../../components/chakra";
