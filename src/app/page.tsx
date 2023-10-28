import { Box, Text, Heading, Grid, GridItem } from "@chakra-ui/react";
import { Avatar } from "@/components/Avatar";
import { Experience } from "@/components/Experience";
import { ArrowLink } from "@/components/ArrowLink";

export default function Home() {
  return (
    <>
      <Box py="115px" px={4} maxWidth={900} mx="auto">
        <Grid
          h={[100, 150, 200]}
          templateColumns="repeat(4, 1fr)"
          mb={10}
          alignItems="center"
        >
          <GridItem colSpan={1}>
            <Avatar />
          </GridItem>
          <GridItem colSpan={3}>
            <Heading as="h1" size="lg">
              Max Fung
            </Heading>
            <Text>Software Development Engineer at Flexe</Text>
            <Text opacity={0.5}>Los Angeles, CA, USA</Text>
          </GridItem>
        </Grid>
        <Box mb={20}>
          <Heading as="h2" size="md" mb={2}>
            About
          </Heading>
          <Text mb={3}>
            I&apos;m a full stack software engineer who loves crafting creative,
            intuitive technology products from start to finish.
          </Text>
          <Text mb={3}>
            As a self-taught computer scientist, I&apos;ve never shied away from
            tackling tough problems and gaining experience from my own
            curiosity. I&apos;m proud of my ability to learn new concepts and
            frameworks really quickly and also apply my creativity, attention to
            detail, and design intuition to software development.
          </Text>
          <Text mb={3}>
            I&apos;m passionate about both product and engineering, and love
            developing cool stuff. When I&apos;m not coding, I&apos;m producing
            my own music, surfing, snowboarding, taking photos with my film
            camera, and out exploring the world.
          </Text>
        </Box>
        <Box mb={30}>
          <Heading as="h2" size="md" mb={10}>
            Experience
          </Heading>
          <Experience
            href="https://www.flexe.com/"
            side="2022 - present"
            title="Software Development Engineer · Flexe"
            desc="Deliver high-quality, robust production code for Flexe’s proprietary warehouse management
            system serving a diverse array of large enterprise clients including Target, Walmart, Lowe’s, Home
            Depot, Daiso, and more. Led the design and deployment of reusable mobile front end components,
            architected and deployed a refactored Android application, contributed to the decomposition of
            a monolithic Ruby on Rails application to a modern Kotlin microservices architecture, and built
            other solutions that provided numerous improvements to freight and parcel fulfillment."
            stack="Ruby on Rails • Kotlin • Android • Ktor • Docker • Google Cloud"
          />
          <Experience
            side="2021 - 2022"
            title="Project Manager · Boeing"
            desc="Independently developed, maintained, and shipped internal production tracking software using
            Python and Excel, providing project managers with comprehensive data for materials, orders, and
            production activities, increasing the department’s visibility to track materials and products through
            the entire supply chain, creating meaningful efficiency statistics to improve processes, and
            reducing overhead costs by around $5,000, per project, per week"
            stack="Python • Pandas • Shell Scripting • SQL • AWS"
          />
          <Experience
            side="2018, 2019"
            title="Software Engineer · Aeroject Rocketdyne"
            desc="Independently architected an internal desktop application for pressure transducer and load cell
            calibration tests using Python and PyQt5"
            stack="Anaconda • Python • PyQt • NI-VISA"
          />
          <ArrowLink title="View Full Résumé" href="/resume.pdf" />
        </Box>
        <Box mb={20}>
          <Heading as="h2" size="md" mt={10} mb={10}>
            Projects
          </Heading>
          <Experience
            side="2023 - present"
            title="Software Engineer · Streets For All"
            href="https://www.streetsforall.org/"
            desc="Collaborate with other volunteer web
            developers to support React front end
            and Python API design for numerous
            transportation advocacy websites"
            stack="JavaScript • React • Python"
            image="/sfa-logo-square.png"
          />
        </Box>
        <Box mb={20}>
          <Heading as="h2" size="md" mb={10}>
            Links
          </Heading>
          <Experience
            side="Github"
            title="@mxfng"
            href="https://github.com/mxfng"
            mb={4}
          />
          <Experience
            side="LinkedIn"
            title="@maxfung"
            href="https://www.linkedin.com/in/maxfung/"
            mb={4}
          />
          <Experience
            side="Email"
            title="maxhfung@gmail.com"
            href="mailto:maxhfung@gmail.com?subject=Developer Inquiry"
            mb={4}
          />
        </Box>
      </Box>
    </>
  );
}
