import { Box } from '@chakra-ui/react';
import Navigation from './navigation';

const Header = () => {
  return (
    <Box as="header">
      <Box maxW="1180px" ml="auto" mr="auto">
        <Navigation />
      </Box>
    </Box>
  );
};

export default Header;
