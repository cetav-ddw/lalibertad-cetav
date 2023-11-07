import { Box, Flex, Link } from '@chakra-ui/react';
import MainNavigation from '@/app/components/MainNavigation';
import { Link as NextLink } from 'next/link';

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
        <Link
          as={NextLink}
          href="/"
          _hover={{ opacity: 0.7 }}
          px={4}
          py="2"
          mx="1"
        >
          <img
            src="/images/triada-logo.png"
            alt="Triada Logo"
            width="400px"
            height="90px"
          />
        </Link>
        <MainNavigation />
      </Flex>
    </Box>
  );
};

export default Header;
