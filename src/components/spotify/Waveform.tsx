import { Box } from "@chakra-ui/react";

export const Waveform = (isPlaying: any) => {
  if (!isPlaying) return null;

  const delays = [0.7, 1.2, 0.9];

  const waveBox = (delay: any, index: any) => (
    <Box
      key={index}
      display="block"
      position="relative"
      background="#fff"
      height={index === 1 ? "80%" : "100%"}
      width="3px"
      borderRadius="10px"
      margin="0 2px"
      animation={`wave ${delay}s linear infinite`}
      style={{ animationDelay: `${index * 0.15}s` }}
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
        top={["8px", "8px", "10px"]}
      >
        {delays.map((delay, index) => waveBox(delay, index))}
      </Box>
    </>
  );
};
