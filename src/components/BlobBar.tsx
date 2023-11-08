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
    bg: "red",
    bgImage: "",
    icon: (
      <EmailIcon
        fill="var(--chakra-colors-primary)"
        size="16px"
        transform="rotate(55deg)"
      />
    ),
  },
  {
    title: "GitHub",
    url: "https://github.com/mxfng",
    bg: "rgb(4,8,12)",
    bgImage:
      "linear-gradient(to bottom, #0d0d1b, #090c18, #060b15, #040a11, #04080c)",
    icon: (
      <GitHubLogo
        fill="var(--chakra-colors-primary)"
        size="20px"
        transform="rotate(55deg)"
      />
    ),
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/maxfung/",
    bg: "#0077B5",
    bgImage:
      "linear-gradient(to left top, #008cc9, #0087c4, #0081bf, #007cba, #0077b5)",
    icon: (
      <LinkedInLogo
        fill="var(--chakra-colors-primary)"
        size="20px"
        transform="rotate(55deg)"
      />
    ),
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/fungkadelic/",
    bg: "#4158D0",
    bgImage:
      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
    icon: (
      <InstagramLogo
        fill="var(--chakra-colors-primary)"
        size="20px"
        transform="rotate(55deg)"
      />
    ),
  },
  {
    title: "TikTok",
    url: "https://www.tiktok.com/@fungkadelic?_t=8hB6dLExZMc&_r=1",
    bg: "hsla(0,100%,50%,1)",
    bgImage:
      "radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)",
    icon: (
      <TikTokLogo
        fill="var(--chakra-colors-primary)"
        size="20px"
        transform="rotate(55deg)"
      />
    ),
  },
  {
    title: "Snapchat",
    url: "https://t.snapchat.com/pnjW0bW6",
    bg: "yellow",
    bgImage: "",
    icon: (
      <SnapchatLogo
        fill="var(--chakra-colors-primary)"
        size="20px"
        transform="rotate(55deg)"
      />
    ),
  },
];
