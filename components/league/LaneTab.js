import React from "react";
import Image from "next/image";
import { Flex } from "@chakra-ui/react";
import { ChampionGridItem } from "../grid-item";

const LaneTab = React.forwardRef((props, ref) => {
  // 1. Reuse the `useTab` hook
  const tabProps = useTab({ ...props, ref });
  const isSelected = !!tabProps["aria-selected"];

  // 2. Hook into the Tabs `size`, `variant`, props
  const styles = useMultiStyleConfig("Tabs", tabProps);

  return (
    <Button __css={styles.tab} {...tabProps}>
      <Box as="span" mr="2">
        {/* <img src="/images/projects/league/SupportIconChallenger.png" /> */}
      </Box>
      {tabProps.children}
    </Button>
  );
});

export default LaneTab;
