import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { BlobBar } from "./BlobBar";

export const Banner: React.FC<any> = () => {
  return (
    <>
      <Grid
        templateColumns="repeat(4, 1fr)"
        mb={[5, 10]}
        className="banner"
        gap={4}
      >
        <GridItem colSpan={3}>
          <Heading variant="name" mb={[-1, 0]}>
            Max Henry Fung
          </Heading>
          <Text mb={-1}>Software Engineer</Text>
          <Text fontWeight={300}>Los Angeles, California</Text>
        </GridItem>
        <GridItem colSpan={3} w="100%">
          <BlobBar />
        </GridItem>
      </Grid>
    </>
  );
};
