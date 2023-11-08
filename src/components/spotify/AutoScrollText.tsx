import { Box, Flex, Text } from "@chakra-ui/react";
import { ArrowUp } from "../svg/ArrowUp";

export const AutoScrollText: React.FC<any> = ({ text }) => {
  const isScrolling = text.length > 30;
  return (
    <>
      <Flex display="inline-flex">
        <Box
          w="fit-content"
          maxW="260px"
          overflow="hidden"
          position="relative"
          css={
            isScrolling
              ? {
                  maskImage:
                    "linear-gradient(to left, transparent 0%, white 3%, white 97%, transparent 100%)",
                }
              : {}
          }
        >
          <Text
            variant="link"
            className="text"
            w="min-content"
            animation={isScrolling ? "scrollText 20s ease-in-out infinite" : ""}
            whiteSpace="nowrap"
            position="relative"
            px={2}
            fontSize="1.2rem"
          >
            {text}
          </Text>
        </Box>

        <ArrowUp
          stroke="var(--chakra-colors-primary)"
          w="16px"
          ml={[1, 2]}
          className="icon"
        />
      </Flex>
    </>
  );
};
