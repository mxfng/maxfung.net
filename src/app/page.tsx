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
            <Text>Full Stack Developer</Text>
            <Text opacity={0.5}>+ Musician, Advocate</Text>
          </GridItem>
        </Grid>
        <Box mb={14}>
          <Heading as="h2" size="md" mb={2}>
            About
          </Heading>
          <Text>
            Born and raised in Southern California to a family of musicians,
            entrepreneurs, and misfits. I choose not to define myself by any
            singular pursuit or framework. I build creative products with
            intuitive experiences from start to finish. I&apos;ve worked as a
            professional in a variety of development mediums, including web and
            mobile.
          </Text>
        </Box>
        <Box mb={14}>
          <Heading as="h2" size="md" mb={10}>
            Work Experience
          </Heading>
          <Experience
            href="https://www.flexe.com/"
            side="2022 - present"
            title="Software Development Engineer · Flexe"
            desc="Deliver high-quality, robust production code for Flexe’s proprietary warehouse management
            system for a diverse array of large enterprise clients including Target, Walmart, Lowe’s, Home
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
          <Heading as="h2" size="md" mt={10} mb={10}>
            Side Projects
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
