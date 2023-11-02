import { Box, SkipNavContent } from '@chakra-ui/react';

const MainContent = ({ children }) => {
  return (
    <Box as="main" maxW="1180px" ml="auto" mr="auto" py="7">
      <SkipNavContent />
      {children}
    </Box>
  );
};

export default MainContent;
