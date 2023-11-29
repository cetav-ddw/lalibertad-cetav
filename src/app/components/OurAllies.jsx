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
              height={{ base: '60px', md: '100px' }}
              width={{ base: '60px', md: '100px' }}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundImage={`url(${imageObj.url})`}
              mr={{ base: '20px', md: index % 7 === 6 ? '0' : '74px' }}
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
