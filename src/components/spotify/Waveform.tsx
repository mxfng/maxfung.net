import { Box } from "@chakra-ui/react";

export const Waveform = ({ isPlaying }: { isPlaying: boolean }) => {
  const delays = [0.7, 1.2, 0.9];

  const waveBox = (delay: number, index: number) => (
    <Box
      key={index}
      display="block"
      position="relative"
      background={isPlaying ? "primary" : "primary"}
      h={isPlaying ? (index === 1 ? "80%" : "100%") : "20%"}
      w="3px"
      borderRadius="10px"
      m="0 2px"
      animation={isPlaying ? `wave ${delay}s linear infinite` : ""}
      style={{ animationDelay: isPlaying ? `${index * 0.15}s` : "0s" }}
    />
  );

  return (
    <>
      <Box h="16px" display="flex" alignItems="center" position="relative">
        {delays.map((delay, index) => waveBox(delay, index))}
      </Box>
    </>
  );
};
