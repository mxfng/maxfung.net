import { HStack, Image } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export const ExperienceLink: React.FC<any> = ({ title, href, ...props }) => {
  return (
    <>
      <HStack
        display="flex"
        alignItems="center"
        __css={{
          "& img": {
            transform: "translateX(0) translateY(3px)",
            transition: "all 0.2s ease",
          },
        }}
        _hover={{
          "& img": {
            transform: "translateX(3px)",
          },
        }}
        w="fit-content"
        mb={3}
        {...props}
      >
        <Heading
          variant="link"
          as="a"
          href={href}
          target="_blank"
          className="underline-link"
          style={href ? { cursor: "pointer" } : { textDecoration: "none" }}
        >
          {title}
        </Heading>
        {href && (
          <Image
            boxSize={4}
            src="/arrow-link.svg"
            alt={`↗`}
            className="experience-link-arrow"
          />
        )}
      </HStack>
    </>
  );
};
