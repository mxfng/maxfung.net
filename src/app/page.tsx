import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { Experience, ExperienceProps } from "../components/Experience";
import { Section } from "../components/Section";
import { Tokamak } from "../components/visuals/Tokamak";
import { BigLink } from "../components/link/BigLink";

export default function Home() {
  return (
    <>
      <Box>
        <Section id="about" title="About">
          {renderAbout()}
        </Section>
      </Box>
      <Box>
        <Section id="projects" title="Featured Projects">
          {renderFeaturedProjects()}
        </Section>
      </Box>
      <Box>
        <Section id="experience" title="Experience">
          {renderExperience()}
        </Section>
      </Box>
    </>
  );

  function renderAbout() {
    const introductionText = `
      I'm a full stack software engineer who loves designing,
      building, and shipping creative technical products with intuitive
      experiences from start to finish.
    `;

    const journeyText = `
      I explore the intersection of technology and creativity
      through programming, providing a unique mixture of
      analytical and creative skills to every project.
      Over the years, I've developed numerous applications in
      a variety of technologies, always with a strong emphasis
      on the end user.
    `;

    const passionsText = `
      I draw inspiration from a long list of personal intersts,
      including  tech, music, songwriting, surfing, snowboarding,
      urbanism, film photography, environmentalism, and travel.
    `;

    return (
      <Grid templateColumns="repeat(2, 1fr)" gap={8}>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Text variant="big">{introductionText}</Text>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Text mb={2}>{journeyText}</Text>
          <Text>{passionsText}</Text>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Tokamak />
        </GridItem>
        <GridItem p={1} colSpan={{ base: 2, md: 1 }}>
          <BigLink
            href="mailto:maxhfung@gmail.com?subject=Hello Max"
            line1="Let's"
            line2="Build"
            line3="Together"
          />
        </GridItem>
      </Grid>
    );
  }

  function renderExperience(): JSX.Element {
    const experiences: ExperienceProps[] = [
      {
        href: "https://www.flexe.com/",
        from: "2022",
        to: "2023",
        title: "Software Development Engineer",
        company: "Flexe",
        desc: "Deliver high-quality, robust production code for Flexe’s proprietary warehouse management system serving a diverse array of large enterprise clients. Led the design and deployment of reusable mobile front end components, architected a refactored Android application, and contributed to the decomposition of a monolithic Ruby on Rails application to a modern Kotlin microservices architecture.",
        stack: ["Kotlin", "Rails", "Android", "React"],
        long: true,
      },
      {
        href: "https://www.boeing.com/",
        from: "2021",
        to: "2022",
        title: "Technologist and Project Manager",
        company: "Boeing",
        desc: "Developed, maintained, and shipped internal production tracking software using Python and Excel, providing project managers with comprehensive data to track products through the entire supply chain, reducing overhead costs by around $5,000, per project, per week",
        stack: ["Python", "Analytics", "Shell", "SQL"],
        long: true,
      },
      {
        href: "https://www.l3harris.com/company/aerojet-rocketdyne",
        from: "2018",
        to: "2019",
        title: "Engineer",
        company: "Aeroject Rocketdyne",
        desc: "Independently architected an internal desktop application for pressure transducer and load cell calibration tests using Python and PyQt5",
        stack: ["Python", "PyQt", "NI-VISA"],
        long: true,
      },
    ];

    return (
      <>
        <Grid gap={[10, 20]}>
          {experiences.map((experience, index) => (
            <Experience key={index} {...experience} />
          ))}
          <GridItem>
            <BigLink href="/resume.pdf" line1="View" line2="Full Résumé" />
          </GridItem>
        </Grid>
      </>
    );
  }

  function renderFeaturedProjects(): JSX.Element {
    const projects: ExperienceProps[] = [
      {
        title: "Drumhaus",
        company: "Drum Machine",
        href: "https://github.com/mxfng/drumhaus",
        stack: ["Tone.js", "Next.js 14", "TypeScript"],
        image: "/drumhaus.png",
      },
    ];

    return (
      <>
        <Grid gap={[10, 20]}>
          {projects.map((project, index) => (
            <Experience key={index} {...project} />
          ))}
        </Grid>
      </>
    );
  }
}
