import { Flex, Box, Heading, Text } from '@chakra-ui/react';

const PHeading = ({ title, titleColor, text, imgSrc, videoSrc, poster }) => {
  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      mb={{ base: '12', md: '24' }}
      justifyContent="space-between"
    >
      <Box width={{ base: '90%', md: '48%' }} mb={{ base: '8', md: 0 }}>
        <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} mb="4">
          <Text as="span" display="block">
            {title}
          </Text>
          <Text color="#427fdf" as="span" display="block">
            {titleColor}
          </Text>
        </Heading>

        {text ? (
          <Text fontSize={{ base: 'md', md: 'lg' }} color="#444444">
            {text}
          </Text>
        ) : null}
      </Box>

      {videoSrc ? (
        <Box
          width={{ base: '90%', md: '38%' }}
          borderRadius="12"
          overflow="hidden"
        >
          <video autoPlay loop muted poster={poster} controls>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </Box>
      ) : (
        <Box
          backgroundImage={imgSrc}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          width={{ base: '80%', md: '38%' }}
          height={{ base: '150px', md: 'auto' }}
          paddingTop={['50%', '350px']}
          borderRadius="14"
          marginBottom="24px"
        />
      )}
    </Flex>
  );
};

export default PHeading;
