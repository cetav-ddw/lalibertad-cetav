import {
  Heading,
  Image,
  Text,
  Box,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import NextLink from 'next/link';

export const ListaCursos = ({ cursos, variante }) => {
  return (
    <>
      {cursos?.length > 0 ? (
        <Box
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          gap="5"
          justifyContent="center"
          pos="relative"
        >
          {cursos.map(({ id, imgSrc, title, descripcion, url }) => {
            return (
              <LinkBox
                bg="rgba(225, 231, 248, 1)"
                key={id}
                w="280px"
                borderWidth="1px"
                borderRadius="lg"
              >
                <LinkOverlay as={NextLink} href={url}>
                  <Image
                    w="100%"
                    h="240"
                    src={imgSrc}
                    alt=""
                    borderRadius="lg"
                  />
                </LinkOverlay>

                {variante === 'tecnicoTexto' ? (
                  <Heading
                    pos="absolute"
                    bottom="240"
                    left="3"
                    color="white"
                    size="20px"
                    my="5"
                  >
                    {title}
                  </Heading>
                ) : (
                  <Heading
                    pos="absolute"
                    bottom="0.5"
                    left="3"
                    color="white"
                    size="20px"
                    my="5"
                  >
                    {title}
                  </Heading>
                )}

                {variante === 'tecnicoTexto' ? (
                  <Text
                    color="#313677"
                    mt="3"
                    mb="5"
                    ml="auto"
                    mr="auto"
                    textAlign="justify"
                    width="80%"
                  >
                    {descripcion}
                  </Text>
                ) : (
                  <Text
                    display="none"
                    mt="5"
                    mb="5"
                    ml="auto"
                    mr="auto"
                    textAlign="justify"
                    width="90%"
                  >
                    {descripcion}
                  </Text>
                )}
              </LinkBox>
            );
          })}
        </Box>
      ) : null}
    </>
  );
};

export default ListaCursos;
