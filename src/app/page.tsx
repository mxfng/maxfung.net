import { Box, Text, Heading, Grid, GridItem } from "@chakra-ui/react";
import { Avatar } from "@/components/Avatar";
import { Experience } from "@/components/Experience";

export default function Home() {
  return (
    <>
      <Box py="115px" px={4} maxWidth={900} mx="auto">
        <Grid templateColumns="repeat(4, 1fr)" mb={10} alignItems="center">
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
            Born and raised in Southern California to a family of musicians, entrepreneurs, and misfits.
            I choose not to define myself by any singular pursuit or framework.
            I build creative products with intuitive experiences from start to finish.
            I&apos;ve worked as a professional in a variety of development mediums, including web and mobile.
          </Text>
        </Box>
        <Box mb={14}>
          <Heading as="h2" size="md" mb={10}>
            Work Experience
          </Heading>
          <Experience
            side="2023 - present"
            title="Web Designer & Developer — Freelance"
            desc="I collaborate with a diverse clientele, including small agencies, start-ups, and individual clients, to develop immersive and results-driven web solutions. My expertise lies in crafting web products that are strategically aligned with business goals, delivering outstanding user experiences, and driving tangible results."
            stack="React • Next.js • Redux • Styled Components • Framer Motion"
          />
          <Experience
            href="https://www.flexe.com/"
            side="2022 - present"
            title="Software Development Engineer — Flexe"
            desc="I worked with a team of 8 to help build the warehouse management system for Flexe’s on-demand warehousing platform.
            <br />I led development of our Android mobile app, expanding its features, including more robust lookup and picking platforms, adding in crucial business functionalities in support of product launches, overhauling its data architecture for increased scalability, and designing a library of beautiful, reusable UI components.
            <br />I also designed and built back end services and RESTful APIs in Ruby and Kotlin, helping to migrate code from our original monolithic server architecture to new Ktor microservices."
            stack="Ruby on Rails • Kotlin • Android • Ktor • Docker • Google Cloud"
          />
          <Experience
            side="2021 - 2022"
            title="Project Manager — Boeing"
            desc="As a project manager, I collaborated with engineers on tight deadlines and oversaw a diverse portfolio of space electronics projects worth over $100 million in value.
            <br />Additionally, I revitalized my coding skills by creating an automated production status report for our in-house factory. This internal tool quickly gained popularity within the project management team, saving approximately $10,000 per week by streamlining part tracking in manufacturing. This success inspired my transition to a career in software engineering."
            stack="Python • Pandas • Shell Scripting • SQL • AWS"
          />
          <Experience
            side="2018, 2019"
            title="Software Engineer — Aeroject Rocketdyne"
            desc="I received a unique opportunity to independently develop a desktop application for pressure transducer calibration tests.
            <br />I was tasked with migrating legacy code written in BASIC on a dying HP-86 computer to a modern language of my choice. I chose Python, and delivered an efficient test suite for the laboratory to use.
            <br />I got to learn measurement theory from metrology engineers, work with lab technicians on UX and test accuracy, procure my own hardware, and above all else, discover my passion for programming."
            stack="Anaconda • Python • PyQt • NI-VISA"
          />
          <Heading as="h2" size="md" mb={10}>
            Side Projects
          </Heading>
          <Experience
            side="2023 - present"
            title="Software Engineer — Streets For All"
            href="https://www.streetsforall.org/"
            desc="Working with a small volunteer developer team to provide support in web development, API building and integration, and other public facing projects to promote and advocate for a safer and more equitable Los Angeles.
            <br />Some projects include a website in support of LA Metro's Hill to Sea corridor as well as a legislator report card website."
            stack="JavaScript • React • Python"
            image="/sfa-logo-square.png"
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
            side="Site Repo"
            title="maxfung-2023.git"
            href="https://github.com/mxfng/maxfung-2023"
            mb={4}
          />
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
