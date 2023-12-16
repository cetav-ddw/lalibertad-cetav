'use client';

import { Flex, Box, VisuallyHidden } from '@chakra-ui/react';
import SectionHeading from './SectionHeading';

const OurAllies = ({ images }) => {
  return (
    <Box mb="16">
      <SectionHeading title="Unión con 60+ socios de trabajo" />
      <Flex wrap="wrap" justifyContent="center">
        {images.map((imageObj, index) => (
          <Box
            key={index}
            height={{ base: '60px', md: '120px' }}
            width={{ base: '60px', md: '175px' }}
            backgroundSize="contain"
            backgroundPosition="center"
            backgroundImage={`url(${imageObj.url})`}
            backgroundRepeat="no-repeat"
            mr={{ base: '20px', md: index % 7 === 6 ? '0' : '25px' }}
            position="relative"
          >
            <VisuallyHidden>{imageObj.description}</VisuallyHidden>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default OurAllies;
