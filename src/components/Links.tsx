import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import { SocialLink } from "./link/SocialLink";

export const Links: React.FC<any> = () => {
  return (
    <>
      <Box mb={[8, 10]} overflow="hidden">
        <Grid templateColumns="repeat(5, 1fr)">
          <GridItem colSpan={1} my="auto">
            <Heading variant="section">Links</Heading>
          </GridItem>
          <GridItem colSpan={1} my="auto" mr={0} ml="auto">
            <SocialLink
              title="Email"
              href="mailto:maxhfung@gmail.com?subject=Hello Max"
            />
          </GridItem>
          <GridItem my="auto" mr={0} ml="auto">
            <SocialLink title="GitHub" href="https://github.com/mxfng" />
          </GridItem>
          <GridItem my="auto" mr={0} ml="auto">
            <SocialLink
              title="LinkedIn"
              href="https://www.linkedin.com/in/maxfung/"
            />
          </GridItem>
          <GridItem my="auto" mr={0} ml="auto">
            <SocialLink
              title="Instagram"
              href="https://www.instagram.com/fungkadelic/"
            />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
