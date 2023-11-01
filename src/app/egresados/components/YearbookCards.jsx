import { Box, Image, Link, Stack, WrapItem, Heading, LinkBox, LinkOverlay } from '@chakra-ui/react';

function YearbookCard({ generationImage, title, cardLink, reelLink }) {
  return (
    <WrapItem mb="16">
      <LinkBox as="article">
        <LinkOverlay href={cardLink}>
          <Box maxW='350px' borderRadius='14px' overflow='hidden' position='relative'>
            <Image src={`/images/${generationImage}`} alt='' filter='brightness(70%)' objectFit='cover' w="355.22px" h="314px" borderRadius="5px" />

            <Box p='6' position='absolute' bottom='0' left='0'>
              <Heading as="h3" size="md" color="white" mb='2'>
                {title}
              </Heading>
              <Stack direction='row' spacing={4} align='center'>
                <Link border='2px' px='4' py='1' backgroundColor='#e1e7f8' color='#313677' borderRadius='19px' borderColor='#313677' href={reelLink}>
                  Reel
                </Link>
              </Stack>
            </Box>
          </Box>
        </LinkOverlay>
      </LinkBox>
    </WrapItem>
  );
}

export default YearbookCard;
