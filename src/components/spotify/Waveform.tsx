import { Box } from "@chakra-ui/react";

export const Waveform = ({ isPlaying }: { isPlaying: boolean }) => {
  const delays = [0.7, 1.2, 0.9];

  const waveBox = (delay: number, index: number) => (
    <Box
      key={index}
      display="block"
      position="relative"
      background={isPlaying ? "primary" : "primary"}
      height={isPlaying ? (index === 1 ? "80%" : "100%") : "20%"}
      width="3px"
      borderRadius="10px"
      margin="0 2px"
      animation={isPlaying ? `wave ${delay}s linear infinite` : ""}
      style={{ animationDelay: isPlaying ? `${index * 0.15}s` : "0s" }}
    />
  );

  return (
    <>
      <Box
        height="16px"
        display="flex"
        alignItems="center"
        position="relative"
        ml={1}
        top={["0.35em", "0.4em", "0.45em"]}
      >
        {delays.map((delay, index) => waveBox(delay, index))}
      </Box>
    </>
  );
};
