import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import { SocialLink } from "./SocialLink";

export const FooterLinks: React.FC<any> = () => {
  return (
    <>
      <Box mb={[8, 10]} overflow="hidden">
        <Grid templateColumns="repeat(5, 1fr)">
          <GridItem colSpan={{ base: 5, md: 1 }} my="auto">
            <Heading variant="section">Links</Heading>
          </GridItem>
          <GridItem colSpan={{ base: 5, md: 4 }} h="100%">
            <Flex h="100%" pt={{ base: 6, md: 0 }}>
              <Grid templateColumns="repeat(4, 1fr)" w="100%" gap={8}>
                <GridItem
                  my="auto"
                  mr={{ base: "auto", md: 0 }}
                  ml={{ base: 0, md: "auto" }}
                >
                  <SocialLink
                    title="Email"
                    href="mailto:maxhfung@gmail.com?subject=Hello Max"
                  />
                </GridItem>
                <GridItem
                  my="auto"
                  mr={{ base: "auto", md: 0 }}
                  ml={{ base: 0, md: "auto" }}
                >
                  <SocialLink title="GitHub" href="https://github.com/mxfng" />
                </GridItem>
                <GridItem my="auto" mr={{ base: "auto", md: 0 }} ml="auto">
                  <SocialLink
                    title="LinkedIn"
                    href="https://www.linkedin.com/in/maxfung/"
                  />
                </GridItem>
                <GridItem my="auto" mr={{ base: "auto", md: 0 }} ml="auto">
                  <SocialLink
                    title="Instagram"
                    href="https://www.instagram.com/fungkadelic/"
                  />
                </GridItem>
              </Grid>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
