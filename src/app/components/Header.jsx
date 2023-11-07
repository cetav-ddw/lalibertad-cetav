import { Box, Flex } from '@chakra-ui/react';
import MainNavigation from '@/app/components/MainNavigation';

const Header = () => {
  return (
    <Box as="header" py="5">
      <Flex
        flexDirection="column"
        alignItems="center"
        maxW="1180px"
        ml="auto"
        mr="auto"
      >
        {/* ToDo puede ser un link al homepage
          Se necesita una imagen para retina
        */}
        <Box
          backgroundImage="/images/triada-logo.png"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          width="400px"
          height="90px"
        />
        <MainNavigation />
      </Flex>
    </Box>
  );
};

export default Header;
