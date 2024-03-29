import { Box } from "@chakra-ui/react";

export const ArrowUp: React.FC<any> = ({ stroke, size, ...params }) => {
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
          d="M7 17L17 7M17 7H8M17 7V16"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};
