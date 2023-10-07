import { Box, Text, Heading, Grid, GridItem } from '@chakra-ui/react'
import { Avatar } from '@/components/Avatar';
import { Experience } from '@/components/Experience';

export default function Home() {
  return (
    <>
      <Box py="115px" px={4} maxWidth={600} mx="auto">
        <Grid
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
            Born and raised in Southern California to a family of musicians.
            I choose not to define myself by any singular pursuit or framework.
            I build creative products with intuitive experiences from start to finish.
            I've worked as a professional in a variety of development mediums,
            including web and mobile.
          </Text>
        </Box>
        <Box mb={14}>
          <Heading as="h2" size="md" mb={10}>
            Work Experience
          </Heading>
          <Experience
            href="https://www.flexe.com/"
            side="2022 - present"
            title="Software Development Engineer — Flexe"
            desc="I worked with a team of 8 to help build the warehouse management system for Flexe’s on-demand warehousing platform. I led development of our Android mobile app, and also designed and built back end services and RESTful APIs in Ruby and Kotlin."
            stack="Ruby on Rails • Kotlin • Android • Ktor • Docker • Google Cloud"
          />
          <Experience
            side="2021 - 2022"
            title="Project Manager — Boeing"
            desc="As a side project, I designed and maintained an automated production status report to consolidate large datasets from separate internal factory databases within a well-packaged, navigable spreadsheet hosted on the company network."
            stack="Python • Pandas • Shell Scripting • SQL • AWS"
          />
          <Experience
            side="2018"
            title="Software Engineer — Aeroject Rocketdyne"
            desc="As an intern, I independently developed a desktop application for pressure transducer calibration tests."
            stack="Anaconda • Python • PyQt • NI-VISA"
          />
          <Heading as="h2" size="md" mb={10}>
            Education
          </Heading>
          <Experience
            side="2016 - 2020"
            title="Loyola Marymount University"
            desc="Bachelor of Science in Mechanical Engineering"
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
        </Box>
      </Box>
    </>
  )
}
