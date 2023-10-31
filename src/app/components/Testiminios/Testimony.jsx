import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Flex,
  Avatar,
  Box,
  Heading,
} from '@chakra-ui/react';

const TestimonyList = ({ name, position, quote, avatarSrc }) => {
  return (
    // TODO Mover el color al theme
    <Card maxW="md" mr="10px" mb="10px" bgColor="#E1E7F8">
      <CardHeader pb="1">
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name={name} src={avatarSrc} />
            <Box>
              <Heading as="h3" color="#313677" size="sm">
                {name}
              </Heading>
              <Text color="#313677" fontSize="sm">
                {position}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody pt="0">
        <Text>{quote}</Text>
      </CardBody>
    </Card>
  );
};

export default TestimonyList;
