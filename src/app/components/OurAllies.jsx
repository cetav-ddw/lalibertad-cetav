'use client';

import { Flex, Box, VisuallyHidden, Image } from '@chakra-ui/react';
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
            mr={{ base: '20px', md: index % 7 === 6 ? '0' : '74px' }}
            position="relative"
          >
            <Image
              src={imageObj.url}
              alt={imageObj.description}
              height="100%"
              width="100%"
              objectFit="contain"
            />
            <VisuallyHidden>{imageObj.description}</VisuallyHidden>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default OurAllies;
