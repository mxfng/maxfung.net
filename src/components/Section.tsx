import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Line } from "./Line";

export const Section: React.FC<any> = ({
  width,
  contentWidth,
  title,
  children,
  ...props
}) => {
  return (
    <>
      <Line mb={[3, 8]} />
      {title && (
        <Heading variant="section" mb={[3, 8]} maxW={width} mx="auto" px={3}>
          {title}
        </Heading>
      )}
      <Box maxW={width} mx="auto" px={3} {...props}>
        {children}
      </Box>
    </>
  );
};
