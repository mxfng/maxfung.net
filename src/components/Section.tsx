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
      <Line mb={[4, 8]} />
      {title && (
        <Heading variant="section" mb={[4, 8]} maxW={width} mx="auto" px={4}>
          {title}
        </Heading>
      )}
      <Box maxW={width} mx="auto" px={[4, 8]} pb={[12, 24]} {...props}>
        {children}
      </Box>
    </>
  );
};
