import { Box, Flex, Text, Image, VStack } from '@chakra-ui/react';

const TestimonialCard = ({ name, position, avatarSrc, quote }) => {
    return (
      <Box
        p={6} 
        bg="gray.100"
        borderRadius="md"
        maxWidth="lg" 
        w="full" 
        boxShadow="lg" 
      >
        <Flex direction={{ base: 'column', md: 'row' }} align="center">
          <Image
            borderRadius="full"
            boxSize="100px" 
            src={avatarSrc}
            alt={`Avatar de ${name}`}
            mr={6} 
          />
          <VStack align="left" spacing={4}>
            <Text fontWeight="bold" fontSize="xl">{name}</Text> 
            <Text fontSize="lg">{position}</Text> 
            <Text mt={4} fontSize="md">{quote}</Text> 
          </VStack>
        </Flex>
      </Box>
    );
  };

export default TestimonialCard;