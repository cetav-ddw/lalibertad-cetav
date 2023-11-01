import { Box, Flex } from '@chakra-ui/react';

const ImagePanel = ({ images }) => {
  return (
    <Flex wrap="wrap" justifyContent="center">
      {images.map((image, index) => (
        <Box
          key={index}
          height="100px"
          width="100px"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundImage={`url(${image})`}
          mr={index % 7 === 6 ? '0' : '74px'}
          mb="39px"
        />
      ))}
    </Flex>
  );
};

export default ImagePanel;
