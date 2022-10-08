import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import thumbLeetCode from "../public/images/resources/leetCode.png";
import thumbMdn from "../public/images/resources/mdn.png";

const Resources = () => {
  return (
    <Layout title="Resources">
      <Container>
        <Section delay={0.2}>
          <Heading as="h3" fontSize={20} mb={4} mt={2}>
            Topics to learn to become a web dev (much like school courses)
          </Heading>
          <p style={{ fontSize: "16px" }}>
            In order, learn: HTML, CSS, JS, Data Structures and Algorithms, SQL,
            JSON, React, ExpressJS, NextJS
          </p>
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" fontSize={20} mb={4} mt={2}>
            My collection of the best f2p links to learn web dev
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="Leetcode, SPECIFICALLY Intro to Data Structure courses/cards"
              thumbnail={thumbLeetCode}
              href="https://leetcode.com"
            />
            <GridItem
              title="MDN"
              thumbnail={thumbMdn}
              href="https://developer.mozilla.org/en-US/"
            />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default Resources;
export { getServerSideProps } from "../components/chakra";
