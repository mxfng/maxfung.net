import { Box } from "@chakra-ui/react";

export const Line: React.FC<any> = ({ ...props }) => {
  return (
    <>
      <Box bg="tertiary" h="1px" w="100%" {...props} />
    </>
  );
};
