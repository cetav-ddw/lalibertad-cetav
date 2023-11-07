import React from 'react';
import { Box, Flex, Avatar, Heading, IconButton } from '@chakra-ui/react';
import { MdOutlinePermContactCalendar, MdOutlineLink } from 'react-icons/md';

function CardEgresados(props) {
  const { user } = props; 

  return (
    <Box maxW="md" mb="3" mt="3">
      <Flex spacing="4">
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar name={user.fields.name} src={user.fields.avatar} />
          <Box maxWidth="150">
            <Heading size="sm">{user.fields.name}</Heading>
            {user.fields.linkedin && (
              <a
                href={user.fields.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  style={{ fontSize: '26px' }}
                  size="sm"
                  variant="ghost"
                  colorScheme="blue"
                  aria-label="See LinkedIn"
                  icon={<MdOutlinePermContactCalendar />}
                />
              </a>
            )}
            {user.fields.url && (
              <a
                href={user.fields.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  style={{ fontSize: '26px' }}
                  size="sm"
                  variant="ghost"
                  colorScheme="blue"
                  aria-label="See URL"
                  icon={<MdOutlineLink />}
                />
              </a>
            )}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default CardEgresados;
