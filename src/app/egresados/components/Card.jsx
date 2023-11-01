import React from "react";
import { Box, Flex, Avatar, Heading, IconButton } from "@chakra-ui/react";
import { AiFillLinkedin, PiLinkFill } from "react-icons/ai";

function UserProfileCard(props) {
  const { user } = props; // Obtiene el objeto de usuario del prop.

  return (
    <Box maxW="sm">
      <Flex spacing="4">
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar name={user.name} src={user.avatar} />
          <Box>
            <Heading size="sm">{user.name}</Heading>
            <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See LinkedIn"
                icon={<AiFillLinkedin />}
              />
            </a>
            <a href={user.url} target="_blank" rel="noopener noreferrer">
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See URL"
                icon={<PiLinkFill />}
              />
            </a>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default UserProfileCard;
