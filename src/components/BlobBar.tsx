import { Flex, Grid } from "@chakra-ui/react";
import { EmailIcon } from "./svg/EmailIcon";
import { ReactElement } from "react";
import { GitHubLogo } from "./svg/logos/GitHub";
import { LinkedInLogo } from "./svg/logos/LinkedIn";
import { InstagramLogo } from "./svg/logos/Instagram";
import { BlobLink } from "./link/BlobLink";
import { TikTokLogo } from "./svg/logos/TikTok";
import { SnapchatLogo } from "./svg/logos/Snapchat";
import { LinkIcon } from "./svg/LinkIcon";

interface BlobLink {
  title: string;
  url: string;
  bg: string;
  bgImage: string;
  icon: ReactElement<any>;
  color: string;
}

export const BlobBar = ({ ...params }) => {
  const blobSizePx: string = "40px";

  return (
    <>
      <Flex>
        <LinkIcon
          fill="var(--chakra-colors-primary)"
          size="22px"
          p={2}
          my="auto"
        />
        <Grid
          templateColumns="repeat(12,1fr)"
          px={2}
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
              size={blobSizePx}
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

const iconSize = 22;

const blobs: BlobLink[] = [
  {
    title: "Email",
    url: "mailto:maxhfung@gmail.com?subject=Hello Max",
    bg: "var(--chakra-colors-primary-900)",
    bgImage: "",
    icon: <EmailIcon fill="var(--chakra-colors-bg)" size={`${iconSize}px`} />,
    color: "var(--chakra-colors-primary-900)",
  },
  {
    title: "GitHub",
    url: "https://github.com/mxfng",
    bg: "var(--chakra-colors-primary-700)",
    bgImage: "",
    icon: <GitHubLogo fill="var(--chakra-colors-bg)" size={`${iconSize}px`} />,
    color: "var(--chakra-colors-primary-900)",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/maxfung/",
    bg: "var(--chakra-colors-primary-500)",
    bgImage: "",
    icon: (
      <LinkedInLogo fill="var(--chakra-colors-bg)" size={`${iconSize + 4}px`} />
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
        size={`${iconSize}px`}
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
        size={`${iconSize - 2}px`}
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
        size={`${iconSize + 2}px`}
      />
    ),
    color: "var(--chakra-colors-primary-900)",
  },
];
