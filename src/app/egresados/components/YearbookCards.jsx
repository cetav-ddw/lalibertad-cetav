'use client'
import { Box, Image, Stack, WrapItem, Heading, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'

function YearbookCard({ generationImage, title, yearbookLink, reelLink  }) {
  return (
    <WrapItem mb="16">
      <Box
        maxW="350px"
        borderRadius="14px"
        overflow="hidden"
        position="relative"
      >
        <Image
          src={`/images/${generationImage}`}
          alt=""
          filter="brightness(70%)"
          objectFit="cover"
          w="355.22px"
          h="314px"
          borderRadius="5px"
        />

        <Box p="6" position="absolute" bottom="0" left="0">
          <Heading as="h3" size="md" color="white" mb="2">
            {title}
          </Heading>
          <Stack direction="row" spacing={4} align="center">
            <Link
              fontWeight="500"
              border="2px"
              px="4"
              py="1"
              backgroundColor="#e1e7f8"
              color="#313677"
              borderRadius="19px"
              borderColor="#313677"
              href={yearbookLink} isExternal
            >
              Anuario <ExternalLinkIcon mx='2px' />
            </Link>

            <Link
              fontWeight="500"
              border="2px"
              px="4"
              py="1"
              backgroundColor="#e1e7f8"
              color="#313677"
              borderRadius="19px"
              borderColor="#313677"
              href={reelLink} isExternal
            >
              Reel <ExternalLinkIcon mx='2px' />
            </Link>
          </Stack>
        </Box>
      </Box>

      {/* TO DO para futuras mejoras: 
      -Crear modal con Chakra UI para mostrar reel de Vimeo
      -Reemplazar el Link del Reel por un botón para que abra el pop-up */}
    </WrapItem>
  );
}

export default YearbookCard;
