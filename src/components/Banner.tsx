import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/Avatar";

export const Banner: React.FC<any> = () => {
  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" mb={[5, 10]}>
        <GridItem colSpan={{ base: 4, md: 3 }}>
          <Heading variant="name" mb={[-1, 0]}>
            Max Henry Fung
          </Heading>
          <Text>Software Engineer</Text>
          <Text variant="darker">Los Angeles, California</Text>
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 1 }} pt="20px" pb={["20px", "0px"]}>
          <Avatar />
        </GridItem>
      </Grid>
    </>
  );
};
