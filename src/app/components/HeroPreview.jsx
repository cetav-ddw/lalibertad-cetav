import { Box } from '@chakra-ui/react';

const HeroPreview = ({ posterImageUrl }) => {
  return (
    <Box
      boxShadow="0 10px 10px rgba(0, 0, 0, 0.2)"
      borderRadius="10px"
      backgroundImage={posterImageUrl}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      width={{ base: '80', lg: '90%' }}
      paddingTop={['55%', '280']}
    />
  );
};

export default HeroPreview;
