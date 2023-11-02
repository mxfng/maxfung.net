import { Box, Text } from "@chakra-ui/react";
import { Experience } from "@/components/Experience";
import { ArrowLink } from "@/components/link/ArrowLink";
import { Banner } from "@/components/Banner";
import { Section } from "@/components/Section";
import { SocialLink } from "@/components/link/SocialLink";
import { getNowPlaying, getTopTracks } from "@/utils/spotify";
import { Spotify } from "@/components/spotify/Spotify";

const topTrack = async () => {
  const res = await getTopTracks();
  const { items } = await res.json();

  return items.slice(0, 1).map((track: any) => ({
    artist: track.artists.map((_artist: any) => _artist.name).join(", "),
    songUrl: track.external_urls.spotify,
    title: track.name,
    albumImageUrl: track.album.images[1].url,
  }))[0];
};

const nowPlaying = async () => {
  const res = await getNowPlaying();

  if (res.status === 204 || res.status > 400) {
    return { isPlaying: false };
  }

  const song = await res.json();
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists
    .map((_artist: any) => _artist.name)
    .join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return {
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  };
};

export default async function Home() {
  const pageW = 900;
  const sectionSpacing = [20, "8rem"];
  const spotifyTopTrack = await topTrack();
  const spotifyNowPlaying = await nowPlaying();

  return (
    <>
      <Box maxWidth={pageW} mx="auto" px="3">
        <Banner />
      </Box>
      <Box mb={sectionSpacing}>
        <Section title="About" width={pageW}>
          <Text mb={3}>
            I&apos;m a full stack software engineer who loves designing,
            building, and shipping creative products with intuitive experiences
            from start to finish.
          </Text>
          <Text mb={3}>
            As a self-taught developer, I learned how to build code first,
            sharpening my craft through curiosity and grit. I&apos;ve developed
            and contributed to a variety of exciting projects since starting my
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
      <Box mb={sectionSpacing}>
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
      <Box mb={sectionSpacing}>
        <Section title="Featured Projects" width={pageW} mt={[0, 10]}>
          <Experience
            side="2023 - present"
            title="Software Engineer · Streets For All"
            href="https://github.com/streetsforall"
            desc="Part of a team of volunteer web developers supporting full stack web design for a local transportation advocacy group"
            stack={["JavaScript", "React", "Python"]}
            image="/sfa-logo-square.png"
          />
        </Section>
      </Box>
      <Box mb={sectionSpacing}>
        <Section width={pageW} title="Links" mt={[0, 10]}>
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
        </Section>
      </Box>
      <Box mb={sectionSpacing}>
        <Spotify topTrack={spotifyTopTrack} nowPlaying={spotifyNowPlaying} />
      </Box>
    </>
  );
}
