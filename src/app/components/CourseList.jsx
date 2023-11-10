import { Fragment } from 'react';
import {
  Heading,
  Image,
  Text,
  Box,
  LinkBox,
  LinkOverlay,
  List,
  ListItem,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import SectionHeading from '@/app/components/SectionHeading';

export const CourseList = ({ cursos, showDescription, title }) => {
  return (
    <>
      {cursos?.length > 0 ? (
        <Box mb="16">
          {title && <SectionHeading title={title} />}
          <Box
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            gap="4"
            justifyContent="center"
            pos="relative"
          >
            {cursos.map(({ id, imgSrc, title, descripcion, url, details }) => {
              const Component = url ? LinkOverlay : Box;
              const extraProps = url ? { as: NextLink, href: url } : {};

              return (
                <LinkBox
                  bg="rgba(225, 231, 248, 1)"
                  key={id}
                  maxWidth="22%"
                  borderRadius="lg"
                  _hover={{ opacity: url ? 0.8 : 1 }}
                >
                  <Box position="relative">
                    <Image
                      w="100%"
                      h="240"
                      src={imgSrc}
                      alt=""
                      borderRadius="lg"
                      objectFit="cover"
                    />

                    <Component {...extraProps}>
                      <Heading
                        pos="absolute"
                        bottom="0.5"
                        left="3"
                        color="white"
                        fontSize="md"
                        my="5"
                        as="h3"
                        dropShadow="lg"
                      >
                        {title}
                      </Heading>
                    </Component>
                  </Box>

                  {showDescription && descripcion ? (
                    <Text color="#313677" px="2" py="4" fontSize="sm">
                      {descripcion}
                    </Text>
                  ) : null}

                  {/* Esta seccion se puede mover a un componente aparte,
                  falta hacer render de cada detalle */}
                  {showDescription && details?.length > 0 ? (
                    <List textAlign="justify" px="2" py="4" fontSize="sm">
                      {details.map(
                        ({
                          id,
                          modalidad,
                          edad,
                          lugar,
                          inversion,
                          url,
                          info,
                        }) => {
                          return (
                            <Fragment key={id}>
                              <ListItem>
                                <Text mr="2" fontWeight="bold" display="inline">
                                  Modalidad:
                                </Text>
                                {modalidad}
                              </ListItem>
                              <ListItem py="2">
                                <Text mr="2" fontWeight="bold" display="inline">
                                  Edad:
                                </Text>
                                {edad}
                              </ListItem>
                              <ListItem>
                                <Text mr="2" fontWeight="bold" display="inline">
                                  Lugar:
                                </Text>
                                {lugar}
                              </ListItem>
                              <ListItem py="2">
                                <Text mr="2" fontWeight="bold" display="inline">
                                  Inversion:
                                </Text>
                                {inversion}
                              </ListItem>
                              <ListItem>
                                <Text mr="2" fontWeight="bold" display="inline">
                                  Mas Info:
                                </Text>
                                {info}
                              </ListItem>
                              {url ? (
                                <>
                                  <ListItem py="2">
                                    <Link
                                      fontWeight="bold"
                                      color="blue"
                                      as={NextLink}
                                      href={url}
                                    >
                                      Click para enlace de inscripcion
                                    </Link>
                                  </ListItem>
                                </>
                              ) : (
                                <ListItem>
                                  <Text
                                    mr="2"
                                    fontWeight="bold"
                                    display="inline"
                                  >
                                    Enlace No está disponible
                                  </Text>
                                </ListItem>
                              )}
                            </Fragment>
                          );
                        },
                      )}
                    </List>
                  ) : null}
                </LinkBox>
              );
            })}
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default CourseList;
