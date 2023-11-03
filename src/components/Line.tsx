import { Box } from "@chakra-ui/react";

export const Line: React.FC<any> = ({ ...props }) => {
  return (
    <>
      <Box bg="palette.300" h="1px" w="100vw" {...props} />
    </>
  );
};
