import { Box, Heading } from '@chakra-ui/react';

const SectionHeading = ({ title }) => {
  return (
    <Box
      backgroundImage="/images/libertad-trazo.png"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="contain"
      px="0"
      py="60px"
      mb="4"
    >
      <Heading textAlign="center" fontSize="x-large">
        {title}
      </Heading>
    </Box>
  );
};

export default SectionHeading;
