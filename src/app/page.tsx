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
      I'm a passionate software engineer who loves designing,
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
        href: "https://www.maxfung.net/",
        from: "2023",
        to: "Present",
        title: "Software Engineer",
        company: "Freelance",
        desc: "Collaborating with early-stage and pre-seed startups to develop full-stack web applications.",
        stack: ["Next.js", "React", "Ktor", "Flask"],
        long: true,
      },
      {
        href: "https://www.flexe.com/",
        from: "2022",
        to: "2024",
        title: "Software Development Engineer",
        company: "Flexe",
        desc: "Delivered high-quality, robust production code across the entire stack for Flexe’s proprietary warehouse management system serving a diverse array of large enterprise clients. Worked on feature development, maintenance, and debugging for Kotlin microservices, a Rails application, a React/TypeScript client application, and an Android app.",
        stack: ["Kotlin", "Rails", "Android", "React"],
        long: true,
      },
      {
        href: "https://www.boeing.com/",
        from: "2020",
        to: "2022",
        title: "Software Engineer",
        company: "Boeing",
        desc: "Developed, shipped, and maintained internal production tracking software using Python and Excel, providing project managers with comprehensive data for materials, orders, and production activities. Extended existing manufacturing execution system with user-friendly front end and back end integration of numerous disconnected data sources to increase awareness of production bottlenecks.",
        stack: ["Python", "Analytics", "Shell", "SQL"],
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
