import { Box, Text, Heading, Grid, GridItem, Image } from "@chakra-ui/react";
import { Experience } from "@/components/Experience";
import { ArrowLink } from "@/components/ArrowLink";
import { ProfileBanner } from "@/components/ProfileBanner";
import { Section } from "@/components/Section";
import { Line } from "@/components/Line";

export default function Home() {
  const pageW = 900;

  return (
    <>
      <Box maxWidth={pageW} mx="auto" px="3">
        <ProfileBanner />
      </Box>
      <Box mb={[10, 20]}>
        <Section title="About" width={pageW}>
          <Text mb={3}>
            I&apos;m a full stack software engineer who loves designing,
            building, and shipping intuitive products from start to finish.
          </Text>
          <Text mb={3}>
            As a self-taught developer, I learned how to build code first,
            sharpening my craft through curiosity and grit. I&apos;ve developed
            and contributed to a variety of exciting work since starting my
            journey back in 2018.
          </Text>
          <Text mb={[6, 10]}>
            I&apos;m passionate about both product and engineering, and love
            putting my creativity to the test. When I&apos;m not coding,
            I&apos;m producing my own music, surfing, snowboarding, taking
            photos with my film cameras, and out exploring the world.
          </Text>
          <ArrowLink
            title="Say Hello"
            href="mailto:maxhfung@gmail.com?subject=Hello Max"
          />
        </Section>
      </Box>
      <Box mb={[10, 20]}>
        <Section title="Experience" width={pageW} mt={[0, 10]}>
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
            side="2018, 2019"
            title="Software Engineer · Aeroject Rocketdyne"
            desc="Independently architected an internal desktop application for pressure transducer and load cell
            calibration tests using Python and PyQt5"
            stack={["Python", "PyQt", "NI-VISA"]}
          />
          <ArrowLink title="View Full Résumé" href="/resume.pdf" />
        </Section>
      </Box>
      <Box mb={[10, 20]}>
        <Section title="Featured Projects" width={pageW} mt={[0, 10]}>
          <Experience
            side="2023 - present"
            title="Software Engineer · Streets For All"
            href="https://www.streetsforall.org/"
            desc="Collaborate with other volunteer web
            developers to support React front end
            and Python API design for numerous
            transportation advocacy websites"
            stack={["JavaScript", "React", "Python"]}
            image="/sfa-logo-square.png"
          />
        </Section>
      </Box>
      <Box mb={[10, 20]}>
        <Section width={pageW} title="Links" mt={[0, 10]}>
          <Experience
            side="Email"
            title="maxhfung@gmail.com"
            href="mailto:maxhfung@gmail.com?subject=Hello Max"
            mb={0}
          />
          <Experience
            side="Github"
            title="@mxfng"
            href="https://github.com/mxfng"
            mb={0}
          />
          <Experience
            side="LinkedIn"
            title="@maxfung"
            href="https://www.linkedin.com/in/maxfung/"
            mb={0}
          />
          <Experience
            side="Instagram"
            title="@fungkadelic"
            href="https://www.instagram.com/fungkadelic/"
            mb={0}
          />
        </Section>
      </Box>
    </>
  );
}
