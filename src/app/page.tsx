import { Box, Text, Heading } from "@chakra-ui/react";
import { Experience } from "@/components/Experience";
import { ArrowLink } from "@/components/ArrowLink";
import { ProfileBanner } from "@/components/ProfileBanner";

export default function Home() {
  return (
    <>
      <Box py={100} px={4} maxWidth={900} mx="auto">
        <ProfileBanner />
        <Box mb={[10, 20]}>
          <Heading as="h2" size="md" mb={3}>
            About
          </Heading>
          <Text mb={3}>
            I&apos;m a full stack software engineer who loves designing,
            building, and shipping creative products from start to finish.
          </Text>
          <Text mb={3}>
            As a self-taught developer, I learned how to build code first,
            breaking down tough problems into manageable bits and sharpening my
            craft through curiosity and grit. I&apos;ve developed and
            contributed to a variety of exciting projects, startups, and
            applications since starting my journey back in 2018.
          </Text>
          <Text mb={3}>
            I&apos;m passionate about both product and engineering, and love
            building cool stuff. When I&apos;m not coding, I&apos;m producing
            my own music, surfing, snowboarding, taking photos with my film
            cameras, and out exploring the world.
          </Text>
        </Box>
        <Box mb={[10, 20]}>
          <Heading as="h2" size="md" mb={[3, 10]}>
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
        <Box mb={[10, 20]}>
          <Heading as="h2" size="md" mb={[3, 10]}>
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
        <Box mb={[10, 20]}>
          <Heading as="h2" size="md" mb={[3, 10]}>
            Links
          </Heading>
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
            side="Email"
            title="maxhfung@gmail.com"
            href="mailto:maxhfung@gmail.com?subject=Developer Inquiry"
            mb={0}
          />
        </Box>
      </Box>
    </>
  );
}
