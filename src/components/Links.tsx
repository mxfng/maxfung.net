import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import { Line } from "./Line";
import { SocialLink } from "./link/SocialLink";

export const Links: React.FC<any> = ({ width, contentWidth, title }) => {
  return (
    <>
      <Box overflow="hidden">
        <Line mb={[4, 4]} />
        <Grid px={3} templateColumns="repeat(5, 1fr)">
          <GridItem colSpan={1}>
            <Heading
              variant="section"
              mb={[10, 10]}
              maxW={width}
              mx="auto"
              my="auto"
            >
              Links
            </Heading>
          </GridItem>
          <GridItem colSpan={1}>
            <SocialLink
              side="Email"
              title="maxhfung@gmail.com"
              href="mailto:maxhfung@gmail.com?subject=Hello Max"
            />
          </GridItem>
          <GridItem>
            <SocialLink
              side="GitHub"
              title="@mxfng"
              href="https://github.com/mxfng"
            />
          </GridItem>
          <GridItem>
            <SocialLink
              side="LinkedIn"
              title="@maxfung"
              href="https://www.linkedin.com/in/maxfung/"
            />
          </GridItem>
          <GridItem>
            <SocialLink
              side="Instagram"
              title="@fungkadelic"
              href="https://www.instagram.com/fungkadelic/"
            />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
