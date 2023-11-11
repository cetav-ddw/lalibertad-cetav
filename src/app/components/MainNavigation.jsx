'use client'
// import { Box, Link } from '@chakra-ui/react';
// import { Link as NextLink } from 'next/link';

// const MainNavigation = () => {
//   return (
//     <Box
//       as="nav"
//       display="flex"
//       alignItems="center"
//       p={4}
//       justifyContent="space-between"
//     >
//       <Box display="flex" flex="1" justifyContent="center">
//         <Link
//           as={NextLink}
//           href="/"
//           _hover={{ textDecoration: 'underline' }}
//           px={4}
//           py="2"
//           mx="1"
//         >
//           Inicio
//         </Link>
//         <Link
//           as={NextLink}
//           href="/cursos-libres"
//           _hover={{ textDecoration: 'underline' }}
//           px={4}
//           py="2"
//           mx="1"
//         >
//           Cursos Libres
//         </Link>
//         <Link
//           as={NextLink}
//           href="/tecnicos"
//           _hover={{ textDecoration: 'underline' }}
//           px={4}
//           py="2"
//           mx="1"
//         >
//           Cursos Técnicos
//         </Link>
//         <Link
//           as={NextLink}
//           href="/acerca"
//           _hover={{ textDecoration: 'underline' }}
//           px={4}
//           py="2"
//           mx="1"
//         >
//           Sobre Nosotros
//         </Link>
//         <Link
//           as={NextLink}
//           href="/egresados"
//           _hover={{ textDecoration: 'underline' }}
//           px={4}
//           py="2"
//           mx="1"
//         >
//           Egresados
//         </Link>
//         <Link
//           as={NextLink}
//           href="/contacto"
//           _hover={{ textDecoration: 'underline' }}
//           px={4}
//           py="2"
//           mx="1"
//         >
//           Contacto
//         </Link>
//       </Box>
//     </Box>
//   );
// };



// export default MainNavigation;
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
      _hover={{ textDecoration: 'underline' }}
      px={4}
      py="2"
      mx="1"
      borderBottom={isActive ? '1px solid black' : 'none'}
    >
      {children}
    </Link>
  );
};

export default MainNavigation;
