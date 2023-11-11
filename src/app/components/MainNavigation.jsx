'use client'
import { Box, Link, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, IconButton} from '@chakra-ui/react';
import { Link as NextLink } from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  return (
    <Box
      as="nav"
      display="flex"
      alignItems="center"
      p={4}
      justifyContent={{ base: 'space-between', md: 'center' }}
    >
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
            <DrawerHeader>Menú</DrawerHeader>
            <DrawerBody>
              <Box mb={4}>
                <Link as={NextLink} href="/" textDecoration="none" _hover={{ textDecoration: 'underline' }}>
                  Inicio
                </Link>
              </Box>
              <Box mb={4}>
                <Link as={NextLink} href="/cursos-libres" textDecoration="none" _hover={{ textDecoration: 'underline' }}>
                  Cursos Libres
                </Link>
              </Box>
              <Box mb={4}>
                <Link as={NextLink} href="/tecnicos" textDecoration="none" _hover={{ textDecoration: 'underline' }}>
                  Cursos Técnicos
                </Link>
              </Box>
              <Box mb={4}>
                <Link as={NextLink} href="/acerca" textDecoration="none" _hover={{ textDecoration: 'underline' }}>
                  Sobre Nosotros
                </Link>
              </Box>
              <Box mb={4}>
                <Link as={NextLink} href="/egresados" textDecoration="none" _hover={{ textDecoration: 'underline' }}>
                  Egresados
                </Link>
              </Box>
              <Box mb={4}>
                <Link as={NextLink} href="/contacto" textDecoration="none" _hover={{ textDecoration: 'underline' }}>
                  Contacto
                </Link>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
      <Box display={{ base: 'none', md: 'flex' }} flex="1" justifyContent="center">
        <Link
          as={NextLink}
          href="/"
          _hover={{ textDecoration: 'underline' }}
          px={4}
          py="2"
          mx="1"
        >
          Inicio
        </Link>
        <Link
          as={NextLink}
          href="/cursos-libres"
          _hover={{ textDecoration: 'underline' }}
          px={4}
          py="2"
          mx="1"
        >
          Cursos Libres
        </Link>
        <Link
          as={NextLink}
          href="/tecnicos"
          _hover={{ textDecoration: 'underline' }}
          px={4}
          py="2"
          mx="1"
        >
          Cursos Técnicos
        </Link>
        <Link
          as={NextLink}
          href="/acerca"
          _hover={{ textDecoration: 'underline' }}
          px={4}
          py="2"
          mx="1"
        >
          Sobre Nosotros
        </Link>
        <Link
          as={NextLink}
          href="/egresados"
          _hover={{ textDecoration: 'underline' }}
          px={4}
          py="2"
          mx="1"
        >
          Egresados
        </Link>
        <Link
          as={NextLink}
          href="/contacto"
          _hover={{ textDecoration: 'underline' }}
          px={4}
          py="2"
          mx="1"
        >
          Contacto
        </Link>
      </Box>
    </Box>
  );
};

export default MainNavigation;
