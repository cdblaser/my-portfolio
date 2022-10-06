import {
  Container,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import thumbLeetCode from "../public/images/resources/leetCode.png";

const Resources = () => {
  return (
    <Layout title="Resources">
      <Container>
        <Heading as="h3" fontSize={20} mb={4} mt={2}>
          My collection of the best f2p links to learn web dev
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="Leetcode, SPECIFICALLY Intro to Data Structure courses/cards"
              thumbnail={thumbLeetCode}
              href="https://leetcode.com"
            />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default Resources;
export { getServerSideProps } from "../components/chakra";
