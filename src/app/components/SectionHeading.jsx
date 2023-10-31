import { Box, Heading } from '@chakra-ui/react';

const SectionHeading = ({ title }) => {
  return (
    <Box
      backgroundImage="/images/libertad-trazo.png"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      px="0"
      py="90px"
    >
      <Heading textAlign="center">{title}</Heading>
    </Box>
  );
};

export default SectionHeading;
