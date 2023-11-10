import { Flex, Box, Heading, Text } from '@chakra-ui/react';

const PHeading = ({ title, titleColor, text, imgSrc }) => {
  return (
    <Flex mb="24" justifyContent="space-between">
      <Box maxWidth="48%">
        <Heading as="h1" fontSize="4xl" mb="8">
          <Text as="span" display="block">
            {title}
          </Text>
          <Text color="#427fdf" as="span" display="block">
            {titleColor}
          </Text>
        </Heading>

        {text ? (
          <Text fontSize="lg" color="#444444">
            {text}
          </Text>
        ) : null}
      </Box>

      {imgSrc ? (
        <Box
          backgroundImage={imgSrc}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          width="100%"
          maxWidth="48%"
          height="auto"
          paddingTop="350px"
          borderRadius="lg"
        />
      ) : null}
    </Flex>
  );
};

export default PHeading;
