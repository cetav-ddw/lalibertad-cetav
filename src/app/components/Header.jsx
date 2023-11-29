import { Box, Flex, Link, Image } from '@chakra-ui/react';
import MainNavigation from '@/app/components/MainNavigation';
import MobileNavigation from './MobileNavigation';
import { Link as NextLink } from 'next/link';

const Header = () => {
  return (
    <Box
      as="header"
      pt="5"
      pb="2"
      boxShadow="base"
      position="sticky"
      top="0"
      zIndex="banner"
      backgroundColor="#fff"
    >
      <Flex flexDirection="column" maxW="1180px" ml="auto" mr="auto">
        <Link
          as={NextLink}
          href="/"
          _hover={{ opacity: 0.7 }}
          px={4}
          py="2"
          mx="1"
        >
          <Image
            src="/images/libertad-cetav-logo.png"
            alt="Logo La Libertad y CETAV"
            width="218px"
            height="60px"
            m="auto"
          />
        </Link>
        <MainNavigation />
      </Flex>
      <MobileNavigation />
    </Box>
  );
};

export default Header;