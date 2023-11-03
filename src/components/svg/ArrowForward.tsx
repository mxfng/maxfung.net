import { Box } from "@chakra-ui/react";

export const ArrowForward: React.FC<any> = ({ stroke, size, ...params }) => {
  return (
    <Box {...params}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        stroke={stroke}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 6L19 12M19 12L13 18M19 12H5"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Box>
  );
};
