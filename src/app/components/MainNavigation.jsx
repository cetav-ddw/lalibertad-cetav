'use client'

import { Box, Link } from '@chakra-ui/react';
import { Link as NextLink, usePathname } from 'next/navigation';

const MainNavigation = () => {
  const pathname = usePathname();

  return (
    <Box
      as="nav"
      display="flex"
      alignItems="center"
      p={4}
      justifyContent="space-between"
    >
      <Box display="flex" flex="1" justifyContent="center">
        <NavLink href="/" currentPath={pathname}>
          Inicio
        </NavLink>
        <NavLink href="/cursos-libres" currentPath={pathname}>
          Cursos Libres
        </NavLink>
        <NavLink href="/tecnicos" currentPath={pathname}>
          Cursos Técnicos
        </NavLink>
        <NavLink href="/acerca" currentPath={pathname}>
          Sobre Nosotros
        </NavLink>
        <NavLink href="/egresados" currentPath={pathname}>
          Egresados
        </NavLink>
        <NavLink href="/contacto" currentPath={pathname}>
          Contacto
        </NavLink>
      </Box>
    </Box>
  );
};

const NavLink = ({ href, currentPath, children }) => {
  const isActive = currentPath === href;

  return (
    <Link
      as={NextLink}
      href={href}
      px={4}
      py="2"
      mx="1"
      borderBottom={isActive ? '2px solid black' : 'none'}
    >
      {children}
    </Link>
  );
};

export default MainNavigation;
