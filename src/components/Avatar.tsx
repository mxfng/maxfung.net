import { Box, Flex } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

export const Avatar = () => {
  return (
    <>
      <Box
        transition="0.25s cubic-bezier(0.68, -0.6, 0.32, 1.6)"
        _hover={{
          transform: 'scale(1.03)',
        }}
      >
        <Flex alignItems="center" justifyContent="center" position="relative">
          <Image
            borderRadius='full'
            width={{ base: '80%' }}
            src='/profile.jpeg'
            alt='Max Fung'
          />
        </Flex>
      </Box>
    </>
  )
}