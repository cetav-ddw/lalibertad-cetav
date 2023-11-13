import { Flex, Box, Image } from '@chakra-ui/react';
import images from '../content/institutionsData';

const OurInstitutions = () => {
  return (
    <Flex
      wrap="wrap"
      justifyContent="center"
      alignItems="center"
      width="100vw"
      position="relative"
      left="50%"
      transform="translateX(-50.6%)"
      // TODO mover este color al theme
      bg="#f2f4fC"
      p="10px"
      mb="16px"
    >
      {images.map((image) => (
        <Box key={image.src} mx="5px">
          <Image src={image.src} alt={image.alt} w="100px" />
        </Box>
      ))}
    </Flex>
  );
};

export default OurInstitutions;
