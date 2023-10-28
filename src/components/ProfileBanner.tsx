import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/Avatar";

export const ProfileBanner: React.FC<any> = () => {
  return (
    <>
      <Grid
        h={[100, 150, 200]}
        templateColumns="repeat(4, 1fr)"
        mb={[5, 10]}
        alignItems="center"
      >
        <GridItem colSpan={1} pr={3}>
          <Avatar />
        </GridItem>
        <GridItem colSpan={3}>
          <Heading as="h1" size="lg" mb={[-1, 0]}>
            Max Fung
          </Heading>
          <Text>Software Engineer at Flexe</Text>
          <Text variant="darker">Los Angeles, CA, USA</Text>
        </GridItem>
      </Grid>
    </>
  );
};
