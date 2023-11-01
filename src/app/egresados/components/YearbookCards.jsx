import { Box, Image, Link, Stack, WrapItem, Heading } from '@chakra-ui/react';

function YearbookCard({ imageUrl, imageAlt, title, reelLink, Yearbook }) {
  return (
    <WrapItem>
      <Box maxW='350px' borderRadius='14px' overflow='hidden' position='relative'>
        <Image src={imageUrl} alt={imageAlt} w="100%" h="100%" borderRadius="5px" />

        <Box p='6' position='absolute' bottom='0' left='0'>
          <Heading as="h3" size="md" color="white" mb='2'>
            {title}
          </Heading>
          <Stack direction='row' spacing={4} align='center'>
            <Link border='2px' px='4' py='1' backgroundColor='#e1e7f8' color='#313677' borderRadius='19px' borderColor='#313677' href={reelLink}>
              Reel
            </Link>
            <Link border='2px' px='4' py='1' backgroundColor='#e1e7f8' color='#313677' borderRadius='19px' borderColor='#313677' href={Yearbook}>
              Anuario
            </Link>
          </Stack>
        </Box>
      </Box>
    </WrapItem>
  );
}

export default YearbookCard;
