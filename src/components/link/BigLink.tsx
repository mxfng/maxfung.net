import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { ArrowForward } from "../svg/ArrowForward";

export const BigLink: React.FC<any> = ({ title, href }) => {
  return (
    <>
      <Flex
        alignItems="center"
        css={{
          "& .icon": {
            transform: "translateX(0)",
            transition: "all 0.2s ease",
          },
        }}
        _hover={{
          cursor: "pointer",
          "& .icon": {
            transform: "translateX(8px)",
          },
        }}
        w="fit-content"
        pl={[3, 5]}
      >
        <Heading variant="bigLink" as="a" href={href} target="_blank">
          {title}
        </Heading>
        <ArrowForward
          stroke="var(--chakra-colors-primary)"
          width={["18px", "25px"]}
          ml={2}
          className="icon"
        />
      </Flex>
    </>
  );
};
