import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  Heading,
  IconButton,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { MdOutlinePermContactCalendar, MdOutlineLink } from 'react-icons/md';

function CardEgresados(props) {
  const { user } = props;

  return (
    <Box
      maxW={{ base: 'xs', md: 'lg' }}
      mb={{ base: 1, md: 3 }}
      mt={{ base: 1, md: 3 }}
    >
      <Flex spacing="4">
        <Flex
          flex="1"
          gap={{ base: 1, md: 2 }}
          alignItems="center"
          flexWrap="wrap"
        >
          <Avatar
            size={{ base: 'sm', md: 'xl' }}
            name={user.fields.name}
            src={user.fields.avatar}
          />
          <Box maxWidth={{ base: '50%', md: '60%' }}>
            <Heading size={{ base: 'xs', md: 'sm' }}>
              {user.fields.name}
            </Heading>
            {user.fields.linkedin && (
              <ChakraLink href={user.fields.linkedin} isExternal>
                <IconButton
                  fontSize={{ base: '20px', md: '26px' }}
                  size={{ base: 'xs', md: 'md' }}
                  variant="ghost"
                  colorScheme="blue"
                  aria-label={`Ver perfil en Linkedin de: ${user.fields.name}`}
                  icon={<MdOutlinePermContactCalendar />}
                />
              </ChakraLink>
            )}
            {user.fields.url && (
              <ChakraLink href={user.fields.url} isExternal>
                <IconButton
                  fontSize={{ base: '20px', md: '26px' }}
                  size={{ base: 'xs', md: 'md' }}
                  variant="ghost"
                  colorScheme="blue"
                  aria-label={`Ver portafolio de: ${user.fields.name}`}
                  icon={<MdOutlineLink />}
                />
              </ChakraLink>
            )}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default CardEgresados;
