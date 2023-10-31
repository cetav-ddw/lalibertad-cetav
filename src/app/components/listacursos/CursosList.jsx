import {
  Heading,
  CardBody,
  Image,
  Wrap,
  WrapItem,
  Text,
  Box,
  LinkBox,
  LinkOverlay,
  Card,
} from '@chakra-ui/react';
import SectionHeading from '../SectionHeading';
import NextLink from 'next/link';

export const ListaCursos = ({ cursos }) => {
  return (
    <>
      {cursos?.length > 0 ? (
        <Box>
          <SectionHeading title="Nuetras Carreras Tecnicas" />
          <Wrap>
            {cursos.map(({ id, imgSrc, title, descripcion, url, details }) => {
              return (
                <WrapItem key={id}>
                  <LinkBox>
                    <Card maxW="sm">
                      <CardBody p maxW="sm">
                        <Image src={imgSrc} alt="" borderRadius="lg" w="200" />
                        <Heading
                          position="absolute"
                          left="3"
                          bottom="150"
                          size="md"
                        >
                          <LinkOverlay as={NextLink} href={url}>
                            {title}
                          </LinkOverlay>
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
                      </CardBody>
                    </Card>
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
