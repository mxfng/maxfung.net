import { Flex, Grid } from "@chakra-ui/react";
import { EmailIcon } from "./svg/EmailIcon";
import { ReactElement } from "react";
import { GitHubLogo } from "./svg/logos/GitHub";
import { LinkedInLogo } from "./svg/logos/LinkedIn";
import { InstagramLogo } from "./svg/logos/Instagram";
import { BlobLink } from "./link/BlobLink";
import { TikTokLogo } from "./svg/logos/TikTok";
import { SnapchatLogo } from "./svg/logos/Snapchat";

interface BlobLink {
  title: string;
  url: string;
  bg: string;
  bgImage: string;
  icon: ReactElement<any>;
  color: string;
}

export const BlobBar = ({ ...params }) => {
  const blobSize: string = " 30px";

  return (
    <>
      <Flex>
        <Grid
          templateColumns="repeat(12,1fr)"
          w={38 * 4}
          h={blobSize}
          py={6}
          px={5}
          css={{
            "& .text": {
              transform: "translateX(-100%)",
            },
          }}
          gap={2}
          {...params}
        >
          {blobs.map((link) => (
            <BlobLink
              key={link.title}
              title={link.title}
              url={link.url}
              size={blobSize}
              bg={link.bg}
              bgImage={link.bgImage}
              icon={link.icon}
              color={link.color}
            />
          ))}
        </Grid>
      </Flex>
    </>
  );
};

const blobs: BlobLink[] = [
  {
    title: "Email",
    url: "mailto:maxhfung@gmail.com?subject=Hello Max",
    bg: "var(--chakra-colors-primary-900)",
    bgImage: "",
    icon: (
      <EmailIcon
        fill="var(--chakra-colors-bg)"
        size="16px"
        transform="rotate(55deg)"
      />
    ),
    color: "var(--chakra-colors-primary-900)",
  },
  {
    title: "GitHub",
    url: "https://github.com/mxfng",
    bg: "var(--chakra-colors-primary-700)",
    bgImage: "",
    icon: (
      <GitHubLogo
        fill="var(--chakra-colors-bg)"
        size="20px"
        transform="rotate(55deg)"
      />
    ),
    color: "var(--chakra-colors-primary-900)",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/maxfung/",
    bg: "var(--chakra-colors-primary-500)",
    bgImage: "",
    icon: (
      <LinkedInLogo
        fill="var(--chakra-colors-bg)"
        size="20px"
        transform="rotate(55deg)"
      />
    ),
    color: "var(--chakra-colors-primary-900)",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/fungkadelic/",
    bg: "var(--chakra-colors-primary-300)",
    bgImage: "",
    icon: (
      <InstagramLogo
        fill="var(--chakra-colors-primary)"
        size="20px"
        transform="rotate(55deg)"
      />
    ),
    color: "var(--chakra-colors-primary-900)",
  },
  {
    title: "TikTok",
    url: "https://www.tiktok.com/@fungkadelic?_t=8hB6dLExZMc&_r=1",
    bg: "var(--chakra-colors-primary-100)",
    bgImage: "",
    icon: (
      <TikTokLogo
        fill="var(--chakra-colors-primary)"
        size="20px"
        transform="rotate(55deg)"
      />
    ),
    color: "var(--chakra-colors-primary-900)",
  },
  {
    title: "Snapchat",
    url: "https://t.snapchat.com/pnjW0bW6",
    bg: "var(--chakra-colors-primary-50)",
    bgImage: "",
    icon: (
      <SnapchatLogo
        fill="var(--chakra-colors-primary)"
        size="20px"
        transform="rotate(55deg)"
      />
    ),
    color: "var(--chakra-colors-primary-900)",
  },
];
