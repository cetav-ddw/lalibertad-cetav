import React from 'react';
import { Box, Flex, Avatar, Heading, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { MdOutlinePermContactCalendar, MdOutlineLink } from 'react-icons/md';

function CardEgresados(props) {
  const { user } = props;
  const isMobile = useBreakpointValue({ base: true, sm: false });
  const cardStyle = {
    whiteSpace: 'normal', 
  };

  return (
    <Box maxW={isMobile ? "xs":'lg'} mb={isMobile ? 1 : 3} mt={isMobile ? 1 : 3} style={cardStyle}>
      <Flex spacing="4">
        <Flex flex="1" gap={isMobile ? 1 : 2} alignItems="center" flexWrap="wrap">
          <Avatar name={user.fields.name} src={user.fields.avatar} />
          <Box maxWidth={isMobile ? "50%" : "60%"}>
            <Heading size={isMobile ? "xs" : "sm"}>{user.fields.name}</Heading>
            {user.fields.linkedin && (
              <a
                href={user.fields.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  style={{ fontSize: isMobile ? '20px' : '26px' }}
                  size={isMobile ? "xs" : "sm"}
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
                  style={{ fontSize: isMobile ? '20px' : '26px' }}
                  size={isMobile ? "xs" : "sm"}
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
