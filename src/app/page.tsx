import { Box, Text } from "@chakra-ui/react";
import { Experience } from "@/components/Experience";
import { ArrowLink } from "@/components/link/ArrowLink";
import { Banner } from "@/components/Banner";
import { Section } from "@/components/Section";
import { SocialLink } from "@/components/link/SocialLink";
import { nowPlaying, recentlyPlayed, songOfTheMonth } from "@/utils/spotify";
import { Spotify } from "@/components/spotify/Spotify";

export default async function Home() {
  const pageW = 900;
  const sectionSpacing = [20, "8rem"];
  const _nowPlaying = await nowPlaying();
  const _recentlyPlayed = await recentlyPlayed();
  const _songOfTheMonth = await songOfTheMonth();

  return (
    <>
      <Box maxWidth={pageW} mx="auto" px="3">
        <Banner />
      </Box>
      <Box mb={sectionSpacing}>
        <Section title="About" width={pageW}>
          {renderAbout()}
        </Section>
      </Box>
      <Box mb={sectionSpacing}>
        <Section title="Experience" width={pageW} mt={[0, 10]}>
          {renderExperience()}
        </Section>
      </Box>
      <Box mb={sectionSpacing}>
        <Section title="Featured Projects" width={pageW} mt={[0, 10]}>
          {renderFeaturedProjects()}
        </Section>
      </Box>
      <Box mb={sectionSpacing}>
        <Section width={pageW} title="Links" mt={[0, 10]}>
          {renderLinks()}
        </Section>
      </Box>
      <Box mb={sectionSpacing}>
        <Spotify
          nowPlaying={_nowPlaying}
          recentlyPlayed={_recentlyPlayed}
          songOfTheMonth={_songOfTheMonth}
        />
      </Box>
    </>
  );

  function renderAbout() {
    return (
      <>
        <Text mb={3}>
          I&apos;m a full stack software engineer who loves designing, building,
          and shipping creative products with intuitive experiences from start
          to finish.
        </Text>
        <Text mb={3}>
          As a self-taught developer, I learned how to build code first,
          sharpening my craft through curiosity and grit. I&apos;ve developed
          and contributed to a variety of exciting projects since starting my
          journey back in 2018.
        </Text>
        <Text mb={[6, 10]}>
          I&apos;m passionate about both product and engineering, and love
          putting my creativity to the test. When I&apos;m not coding, I&apos;m
          producing my own music, surfing, snowboarding, taking photos with my
          film cameras, and out exploring the world.
        </Text>
        <ArrowLink
          title="Say Hello"
          href="mailto:maxhfung@gmail.com?subject=Hello Max"
        />
      </>
    );
  }

  function renderExperience() {
    return (
      <>
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
          stack={[
            "Kotlin",
            "Ruby on Rails",
            "Android",
            "Ktor",
            "React",
            "TypeScript",
            "Docker",
            "Google Cloud Platform",
          ]}
        />
        <Experience
          href="https://www.boeing.com/"
          side="2021 - 2022"
          title="Project Manager · Boeing"
          desc="Independently developed, maintained, and shipped internal production tracking software using
            Python and Excel, providing project managers with comprehensive data for materials, orders, and
            production activities, increasing the department’s visibility to track materials and products through
            the entire supply chain, creating meaningful efficiency statistics to improve processes, and
            reducing overhead costs by around $5,000, per project, per week"
          stack={["Python", "Pandas", "Shell Scripting", "SQL"]}
        />
        <Experience
          href="https://www.l3harris.com/company/aerojet-rocketdyne"
          side="2018, 2019"
          title="Software Engineer · Aeroject Rocketdyne"
          desc="Independently architected an internal desktop application for pressure transducer and load cell
            calibration tests using Python and PyQt5"
          stack={["Python", "PyQt", "NI-VISA"]}
        />
        <ArrowLink title="View Full Résumé" href="/resume.pdf" />
      </>
    );
  }

  function renderFeaturedProjects() {
    return (
      <>
        <Experience
          side="2023 - present"
          title="Software Engineer · Streets For All"
          href="https://github.com/streetsforall"
          desc="Part of a team of volunteer web developers supporting full stack web design for a local transportation advocacy group"
          stack={["JavaScript", "React", "Python"]}
          image="/sfa-logo-square.png"
        />
      </>
    );
  }

  function renderLinks() {
    return (
      <>
        <SocialLink
          side="Email"
          title="maxhfung@gmail.com"
          href="mailto:maxhfung@gmail.com?subject=Hello Max"
        />
        <SocialLink
          side="Github"
          title="@mxfng"
          href="https://github.com/mxfng"
        />
        <SocialLink
          side="LinkedIn"
          title="@maxfung"
          href="https://www.linkedin.com/in/maxfung/"
        />
        <SocialLink
          side="Instagram"
          title="@fungkadelic"
          href="https://www.instagram.com/fungkadelic/"
        />
      </>
    );
  }
}
