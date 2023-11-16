import { Flex, Box, Heading, Text } from '@chakra-ui/react';

const PHeading = ({ title, titleColor, text, imgSrc, isTecnico }) => {
  return (
    <Flex flexDirection={{ base: "column", md: "row" }}
      mb={{ base: "12", md: "24" }}
      justifyContent="space-between">
      <Box width={{ base: "100%", md: "48%" }} mb={{ base: "8", md: 0 }}>
        <Heading as="h1" fontSize={{ base: "3xl", md: "4xl" }} mb="4">

          <Text as="span" display="block">
            {title}
          </Text>
          <Text color="#427fdf" as="span" display="block">
            {titleColor}
          </Text>
        </Heading>

        {text ? (
          <Text fontSize={["md", "lg"]} color="#444444">
            {text}
          </Text>
        ) : null}
      </Box>

      {isTecnico ? (
        <Box>
          <video autoPlay loop muted width="420" height="320">
            <source src={imgSrc} type="video/mp4" />
          </video>
        </Box>
      ) : (
        <Box
          backgroundImage={imgSrc}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          width={{ base: '100%', md: '48%' }}
          height={{ base: '300px', md: 'auto' }}
          paddingTop={['50%', '350px']}
          borderRadius="lg"
          marginBottom="24px"
        />
      )}
    </Flex>
  );
};

export default PHeading;
