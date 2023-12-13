'use client';

import { Flex, Box, Image } from '@chakra-ui/react';
import SectionHeading from './SectionHeading';

const OurAllies = ({ images }) => {
  return (
    <Box mb="16">
      <SectionHeading title="Unión con 60+ socios de trabajo" />
      <Flex wrap="wrap" justifyContent="center">
        {images.map((imageObj, index) => (
          <Box
            key={index}
            /* height={{ md: '100px', lg: '150px' }}
            width={{ md: '100px', lg: '150px' }} */
            height={{ base: '60px', md: '120px' }}
            width={{ base: '60px', md: '175px' }}
            mr={{ base: '20px', md: index % 7 === 6 ? '0' : '25px' }}
            position="relative"
          >
            <Image
              src={imageObj.url}
              alt={imageObj.description}
              objectFit="contain"
              height="100px"
              width="100%"
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default OurAllies;
