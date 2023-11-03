import { Box, Heading, Text, Flex } from '@chakra-ui/react';

const PHeading = ({ title, titleColor, text, imgSrc }) => {
  return (
    <Box my='150px'>
      <Flex flex={1} alignItems="center" maxW="1180px" ml="auto" mr="auto">
        <Box w='700px' mr='150px'>
        <Heading as="h2" fontSize="4xl" fontWeight="bold" w='350px' mb='15px'>
          <Text>
            {title}
          </Text>
          <Text color="#427fdf">
            {titleColor}
          </Text>
        </Heading>

          <Text fontSize="lg" color="#444444" >
            {text}
          </Text>
        </Box>
        <Box
          backgroundImage={imgSrc}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          width="650px"
          height="300px"
        />
      </Flex>
    </Box>
  );
};

export default PHeading;