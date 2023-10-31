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

const TestimonioCard = () => {
  return (
    <Card maxW="md" mr="10px" mb="10px">
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Box>
              <Heading size="sm">Segun Adebayo</Heading>
              <Text>Creator, Chakra UI</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>
          With Chakra UI, I wanted to sync the speed of development with the
          speed of design. I wanted the developer to be just as excited as the
          designer to create a screen.
        </Text>
      </CardBody>
    </Card>
  );
};

export default TestimonioCard;
