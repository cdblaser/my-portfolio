import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

import thumbJohn from "../public/images/works/3cPortfolioDashboardPage.png";

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} mt={2}>
        Popular Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem title="Hi John" thumbnail={thumbJohn} href="" />
          <GridItem title="no gifs in here!" thumbnail={thumbJohn} href="" />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;
