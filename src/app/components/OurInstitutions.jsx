import { Flex, Box, Image } from '@chakra-ui/react';
import images from '../content/institutionsData';

const OurInstitutions = () => {
  return (
    <Flex
      wrap="wrap"
      justifyContent="center"
      alignItems="center"
      w="100%"
      // TODO meter este color en el theme
      bg="#f0f0f0"
      p="10px"
      mb="16px"
    >
      {images.map((image, index) => (
        <Box key={index} mx="5px">
          <Image src={image.src} alt={image.alt} w="100px" />
        </Box>
      ))}
    </Flex>
  );
};

export default OurInstitutions;
