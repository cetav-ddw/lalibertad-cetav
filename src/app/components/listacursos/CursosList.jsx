import {
  Heading,
  Image,
  Wrap,
  WrapItem,
  Text,
  Box,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import SectionHeading from '../SectionHeading';
import NextLink from 'next/link';

export const ListaCursos = ({ cursos, variante }) => {
  return (
    <>
      {cursos?.length > 0 ? (
        <Box>
          <SectionHeading title="Nuetras Carreras Tecnicas" />
          <Wrap>
            {cursos.map(({ id, imgSrc, title, descripcion, url }) => {
              return (
                <WrapItem key={id}>
                  <LinkBox as="article" maxW="380" borderWidth="1px">
                    <Box>
                      <LinkOverlay as={NextLink} href={url}>
                        <Image src={imgSrc} alt="" borderRadius="lg" />
                      </LinkOverlay>
                      <Heading position="absolute" size="md" my="2">
                        {title}
                      </Heading>
                      <Text
                        mt="5"
                        mb="5"
                        ml="auto"
                        mr="auto"
                        textAlign="justify"
                        width="90%"
                      >
                        {descripcion}
                      </Text>
                    </Box>
                  </LinkBox>
                </WrapItem>
              );
            })}
          </Wrap>
        </Box>
      ) : null}
    </>
  );
};

export default ListaCursos;
