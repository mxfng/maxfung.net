import { Box } from "@chakra-ui/react";
import React from "react";
import { ArrowForward } from "../svg/ArrowForward";

export const BigLink: React.FC<any> = ({ href, children, ...params }) => {
  return (
    <>
      <Box as="a" href={href}>
        <Box
          h="100%"
          p={8}
          bg="rgb(6 6 6)"
          position="relative"
          outline="1px solid var(--chakra-colors-tertiary)"
          transition="all 0.25s cubic-bezier(0.68, -0.6, 0.32, 1.6)"
          css={{
            ":before": {
              content: '""',
              backgroundColor: "transparent",
              backgroundImage: "url(/bgs/grain.svg)",
              backgroundSize: "182px",
              backgroundRepeat: "repeat",
              opacity: 0.12,
              top: 0,
              left: 0,
              position: "absolute",
              width: "100%",
              height: "100%",
            },
            "& .icon": {
              transform: "translateX(0)",
              transition: "all 0.2s ease",
            },
          }}
          _hover={{
            cursor: "pointer",
            outline: "4px solid var(--chakra-colors-primary)",
            transform: "scale(1.03)",
            "& .icon": {
              transform: "translateX(8px)",
            },
          }}
          {...params}
        >
          {children}
          <Box position="absolute" bottom="8" right="8">
            <ArrowForward
              stroke="var(--chakra-colors-primary)"
              w={["36px", "48px"]}
              ml={2}
              className="icon"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
