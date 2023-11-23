'use client';
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
    <Box display={{ base: 'block', md: 'none' }} m="3">
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
                  src="/images/libertad-cetav-logo.png"
                  alt="Logo La Libertad y CETAV"
                  width="auto"
                  height="auto"
                />
              </Link>
            )}
          </DrawerHeader>
          <DrawerBody>
            <Link
              as={NextLink}
              href="/"
              textDecoration="none"
              _hover={{ textDecoration: 'underline' }}
              mb={4}
              display="block"
            >
              Inicio
            </Link>
            <Link
              as={NextLink}
              href="/cursos-libres"
              textDecoration="none"
              _hover={{ textDecoration: 'underline' }}
              mb={4}
              display="block"
            >
              Cursos Libres
            </Link>
            <Link
              as={NextLink}
              href="/tecnicos"
              textDecoration="none"
              _hover={{ textDecoration: 'underline' }}
              mb={4}
              display="block"
            >
              Cursos Técnicos
            </Link>
            <Link
              as={NextLink}
              href="/acerca"
              textDecoration="none"
              _hover={{ textDecoration: 'underline' }}
              mb={4}
              display="block"
            >
              Sobre Nosotros
            </Link>
            <Link
              as={NextLink}
              href="/egresados"
              textDecoration="none"
              _hover={{ textDecoration: 'underline' }}
              mb={4}
              display="block"
            >
              Egresados
            </Link>
            <Link
              as={NextLink}
              href="/contacto"
              textDecoration="none"
              _hover={{ textDecoration: 'underline' }}
              mb={4}
              display="block"
            >
              Contacto
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileNavigation;
