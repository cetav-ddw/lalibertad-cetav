import { Flex, Box, VisuallyHidden } from '@chakra-ui/react';
import SectionHeading from './SectionHeading';

const OurAllies = ({ images }) => {
  return (
    <>
      <SectionHeading title="Unión con 60+ socios de trabajo" />
      <Flex wrap="wrap" justifyContent="center" mb="16">
        {images.map((imageObj, index) => (
          <Box
            key={index}
            height="100px"
            width="100px"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundImage={`url(${imageObj.url})`}
            mr={index % 7 === 6 ? '0' : '74px'}
            position="relative"
          >
            <VisuallyHidden>{imageObj.description}</VisuallyHidden>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default OurAllies;
