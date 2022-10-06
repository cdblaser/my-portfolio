import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

import thumbJohn from "../public/images/ominousSwordsman.png";

const Learn = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} mt={2}>
        My collection of the best f2p links to learn web dev
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Leetcode, SPECIFICALLY Explore --> Intro to Data Structure courses"
            thumbnail={thumbJohn}
            href="https://leetcode.com"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Learn;
