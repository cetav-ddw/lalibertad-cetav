import { Flex, Box, Heading, Text } from '@chakra-ui/react';

const PHeading = ({ title, titleColor, text, imgSrc }) => {
  return (
    <Flex flexWrap="wrap" justifyContent="space-between">
      <Box flex={["100%", "100%", "48%"]} mb={["4", "4", "24"]}>
        <Heading as="h1" fontSize={["3xl", "4xl"]} mb="8">
          <Text as="span" display="block">
            {title}
          </Text>
          <Text color="#427fdf" as="span" display="block">
            {titleColor}
          </Text>
        </Heading>

        {text ? (
          <Text fontSize={["md" ,"lg"]} color="#444444">
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
          width={["100%", "100%", "48%"]}
          maxWidth="100%"
          height="auto"
          paddingTop={["50%", "350px"]}
          borderRadius="lg"
          marginBottom="24px"
        />
      ) : null}
    </Flex>
  );
};

export default PHeading;