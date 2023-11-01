import React from "react";
import { Box, Flex, Avatar, Heading, IconButton } from "@chakra-ui/react";
import { AiFillLinkedin } from "react-icons/ai";

function CardEgresados(props) {
  const { user } = props; // Obtiene el objeto de usuario del prop.

  return (
    <Box maxW="sm">
      <Flex spacing="4">
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar name={user.fields.name} src={user.fields.avatar} />
          <Box>
            <Heading size="sm">{user.fields.name}</Heading>
            <a href={user.fields.linkedin} target="_blank" rel="noopener noreferrer">
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See LinkedIn"
                icon={<AiFillLinkedin />}
              />
            </a>
            <a href={user.fields.url} target="_blank" rel="noopener noreferrer">
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See URL"
                icon={<AiFillLinkedin />}
              />
            </a>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default CardEgresados;
