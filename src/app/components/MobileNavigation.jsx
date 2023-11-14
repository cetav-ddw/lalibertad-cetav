import { useState } from 'react';
import {
  Box,
  Link,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import { Link as NextLink } from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile] = useMediaQuery('(max-width: 767px)');

  const onClose = () => setIsOpen(false);

  return (
    <Box display={{ base: 'block', md: 'none' }}>
      <IconButton
        icon={<HamburgerIcon />}
        variant="outline"
        onClick={() => setIsOpen(true)}
      />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {isMobile && (
              <Link as={NextLink} href="/">
                <Image
                  src="/images/triada-logo.png"
                  alt="Triada Logo"
                  width="auto"
                  height="auto"
                />
              </Link>
            )}
          </DrawerHeader>
          <DrawerBody>
            <Box mb={4}>
              <Link
                as={NextLink}
                href="/"
                textDecoration="none"
                _hover={{ textDecoration: 'underline' }}
              >
                Inicio
              </Link>
            </Box>
            <Box mb={4}>
              <Link
                as={NextLink}
                href="/cursos-libres"
                textDecoration="none"
                _hover={{ textDecoration: 'underline' }}
              >
                Cursos Libres
              </Link>
            </Box>
            <Box mb={4}>
              <Link
                as={NextLink}
                href="/tecnicos"
                textDecoration="none"
                _hover={{ textDecoration: 'underline' }}
              >
                Cursos Técnicos
              </Link>
            </Box>
            <Box mb={4}>
              <Link
                as={NextLink}
                href="/acerca"
                textDecoration="none"
                _hover={{ textDecoration: 'underline' }}
              >
                Sobre Nosotros
              </Link>
            </Box>
            <Box mb={4}>
              <Link
                as={NextLink}
                href="/egresados"
                textDecoration="none"
                _hover={{ textDecoration: 'underline' }}
              >
                Egresados
              </Link>
            </Box>
            <Box mb={4}>
              <Link
                as={NextLink}
                href="/contacto"
                textDecoration="none"
                _hover={{ textDecoration: 'underline' }}
              >
                Contacto
              </Link>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileNavigation;
