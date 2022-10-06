import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  List,
  ListItem,
  Button,
  Icon,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import { AwardSection, Award } from "../components/awards";
import { IoLogoGithub, IoLogoDiscord, IoLogoYoutube } from "react-icons/io5";

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          Welcome to my website!
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Curtis Blaser
            </Heading>
            <p>Self-taught developer. Just beginning my journey!</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              src="/images/profPic.jpg"
              alt="Profile image"
              borderRadius="full"
              bg="black"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Works
          </Heading>
          <Paragraph>
            Many works in progress, including{" "}
            <NextLink href="/works/idleclicker">
              <Link>idleclicker</Link>
            </NextLink>{" "}
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="telegram">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1989</BioYear>Took my first breath
          </BioSection>
          <BioSection>
            <BioYear>1992</BioYear>Started piano
          </BioSection>
          <BioSection>
            <BioYear>1993</BioYear>Started violin and saxophone
          </BioSection>
          <BioSection>
            <BioYear>1996</BioYear>Won my first music competition. Also started
            trumpet
          </BioSection>
          <BioSection>
            <BioYear>2001</BioYear>Started clarinet
          </BioSection>
          <BioSection>
            <BioYear>2003</BioYear>Won the National Federation of Music Club's
            King of Music Award for both piano and violin. My crowning
            achievement
          </BioSection>
          <BioSection>
            <BioYear>2006</BioYear>Stopped playing music. I was at my lowest
            point (or as Homer Simpson says, "the worst day of your life, so
            far")
          </BioSection>
          <BioSection>
            <BioYear>2012</BioYear>Graduated Magna Cum Laude from Appalachian
            State University with a Chemistry BS. Conducted research with
            environmental applications, namely fertilizer runoff analysis and
            biosolid pharmaceutical analysis
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>Met my other half ❤
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>My first daughter was born!! I love you,
            Zelda! Also, graduated from Indiana University Bloomington as the
            first person at the school to earn dual MS Chemistry/MS
            Environmental Science degrees (and I never got a job using them!).
            Researched electrochemistry with environmental applications, but I
            did not enjoy it much. I really enjoyed learning about photons.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>Finally buckled down and started learning to
            code seriously
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>My second daughter was born! Oriana the owl!
            I love both of my kids very much!
          </BioSection>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Awards
          </Heading>
          <AwardSection>
            <Award>Winner</Award>National Piano Playing Auditions, 1996
          </AwardSection>
          <AwardSection>
            <Award>Winner</Award>American College of Music Association, 1996
          </AwardSection>
          <AwardSection>
            <Award>Winner</Award>North Carolina Music Teachers Association:
            Junior B, 1997; Senior A, 1998
          </AwardSection>
          <AwardSection>
            <Award>Winner</Award>Raleigh Music Club Scholarship, 1999
          </AwardSection>
          <AwardSection>
            <Award>Winner</Award>Young Artist Auditions: Intermediate II, 1998;
            Concerto I, 1999; Concerto II, 1998, 1999; Concerto III, 2002;
            Concert o IV, 2003; Solo Senior 1, 2000; Prince Division, 2001
          </AwardSection>
          <AwardSection>
            <Award>Winner</Award>National Federation of Music Clubs: Piano Solo
            Primary IV, 1996; Violin Concerto Junior III, 1999; Piano Solo
            Difficult I, 2000; Violin Concerto Junior II, 2000; Violin Solo
            Medium III, 2000; Junior Piano Division, 2001; Piano Solo Very
            Difficult I, 2002; Piano Solo Very Difficult II, 2003; Pageboy,
            Prince, and King of Music
          </AwardSection>
          <AwardSection>
            <Award>Winner</Award>The Music Academy of North Carolina 12th Annual
            Piano Competition, 2001
          </AwardSection>
          <AwardSection>
            <Award>Winner</Award>Raleigh Piano Teachers Association Level 1
            Scholarship, 2002
          </AwardSection>
          <AwardSection>
            <Award>Winner</Award>Frances Wolff Raleigh Area Scholarship, 2002
          </AwardSection>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Hobbies
          </Heading>
          <Paragraph>
            I enjoy playing piano, riding my bike, chillin with the fam, and
            playing video games.
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Online Presence
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/cdblaser" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="telegram"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @cdblaser
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://discord.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="telegram"
                  leftIcon={<Icon as={IoLogoDiscord} />}
                >
                  @Bignob#6843
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.youtube.com/channel/UCFcd23kyFYF5lkYeJk-Rw1A"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="telegram"
                  leftIcon={<Icon as={IoLogoYoutube} />}
                >
                  @c13
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
