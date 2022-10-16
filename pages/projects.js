import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { ProjectGridItem, PortfolioGridItem } from "../components/grid-item";
import thumbIdleclicker from "../public/images/Lily.gif";
import thumbRoguelike from "../public/images/Wiz.gif";
import thumb3c from "../public/images/projects/3cManagePageSample.png";
import Layout from "../components/layouts/article";

const Projects = () => {
  return (
    <Layout title="Projects">
      <Container>
        <Heading as="h3" fontSize={20} mb={4} mt={2}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem
              id="idleclicker"
              title="Idleclicker"
              thumbnail={thumbIdleclicker}
            >
              A simple idle clicker game (in progress)
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id="roguelike"
              title="Roguelike"
              thumbnail={thumbRoguelike}
            >
              A simple roguelike (almost completed!)
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem id="league" title="League Stats" thumbnail="">
              Look up League of Legends stats (in progress)
            </ProjectGridItem>
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

export default Projects;
export { getServerSideProps } from "../components/chakra";
