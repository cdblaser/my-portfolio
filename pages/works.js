import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem, PortfolioGridItem } from "../components/grid-item";
import thumbIdleclicker from "../public/images/Lily.gif";
import thumbRoguelike from "../public/images/Wiz.gif";
import thumb3c from "../public/images/works/works3cManagePageSample.png";
import Layout from "../components/layouts/article";

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4} mt={2}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="idleclicker"
              title="Idleclicker"
              thumbnail={thumbIdleclicker}
            >
              A simple idle clicker game
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="roguelike"
              title="Roguelike"
              thumbnail={thumbRoguelike}
            >
              a simple roguelike
            </WorkGridItem>
          </Section>
          <Section>
            <PortfolioGridItem
              id="3cManage"
              title="3C Marketplace"
              thumbnail={thumb3c}
              href="https://3cisd.com"
            >
              Social development-focused products commerce site with user
              account functionality. Contributions included user account manage
              functionality and user account dashboard views
            </PortfolioGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
export { getServerSideProps } from "../components/chakra";
