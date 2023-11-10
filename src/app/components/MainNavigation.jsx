'use client'
import { Box, Link, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Link as NextLink } from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons';

const MainNavigation = () => {
  return (
    <Box
      as="nav"
      display="flex"
      alignItems="center"
      p={4}
      justifyContent={{ base: 'space-between', md: 'center' }}
    >
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

      <Menu ml={{ base: 2, md: 0 }} autoSelect={false} justifyContent="flex-start">
        <MenuButton
          as={Box}
          p={2}
          display={{ base: 'block', md: 'none' }}
        >
          <HamburgerIcon boxSize={9} />
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link as={NextLink} href="/" textDecoration="none" _hover={{ textDecoration: 'underline' }}>
              Inicio
            </Link>
          </MenuItem>
          <MenuItem>
            <Link as={NextLink} href="/cursos-libres" textDecoration="none" _hover={{ textDecoration: 'underline' }}>
              Cursos Libres
            </Link>
          </MenuItem>
          <MenuItem>
            <Link as={NextLink} href="/tecnicos" textDecoration="none" _hover={{ textDecoration: 'underline' }}>
              Cursos Técnicos
            </Link>
          </MenuItem>
          <MenuItem>
            <Link as={NextLink} href="/acerca" textDecoration="none" _hover={{ textDecoration: 'underline' }}>
              Sobre Nosotros
            </Link>
          </MenuItem>
          <MenuItem>
            <Link as={NextLink} href="/egresados" textDecoration="none" _hover={{ textDecoration: 'underline' }}>
              Egresados
            </Link>
          </MenuItem>
          <MenuItem>
            <Link as={NextLink} href="/contacto" textDecoration="none" _hover={{ textDecoration: 'underline' }}>
              Contacto
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default MainNavigation;