import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  Heading,
  IconButton,
  useBreakpointValue,
  Link as ChakraLink 
} from '@chakra-ui/react';
import { MdOutlinePermContactCalendar, MdOutlineLink } from 'react-icons/md';

function CardEgresados(props) {
  const { user } = props;
  const isMobile = useBreakpointValue({ base: true, sm: false });
  const cardStyle = {
    whiteSpace: 'normal',
  };

  return (
    <Box
      maxW={isMobile ? 'xs' : 'lg'}
      mb={isMobile ? 1 : 3}
      mt={isMobile ? 1 : 3}
      style={cardStyle}
    >
      <Flex spacing="4">
        <Flex
          flex="1"
          gap={isMobile ? 1 : 2}
          alignItems="center"
          flexWrap="wrap"
        >
          <Avatar size={{base: 'sm', md: 'xl'}} name={user.fields.name} src={user.fields.avatar} />
          <Box maxWidth={isMobile ? '50%' : '60%'}>
            <Heading size={isMobile ? 'xs' : 'sm'}>{user.fields.name}</Heading>
            {user.fields.linkedin && (
              <ChakraLink href={user.fields.linkedin} isExternal>
              <IconButton
                fontSize={isMobile ? '20px' : '26px'}
                size={isMobile ? 'xs' : 'md'}
                variant="ghost"
                colorScheme="blue"
                aria-label="Enlace-portafolio-profesional"
                icon={<MdOutlinePermContactCalendar />}
              />
            </ChakraLink>
            )}
            {user.fields.url && (
              <ChakraLink href={user.fields.url} isExternal>
              <IconButton
                fontSize={isMobile ? '20px' : '26px'}
                size={isMobile ? 'xs' : 'md'}
                variant="ghost"
                colorScheme="blue"
                aria-label="Enlace-contacto-profesional"
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
