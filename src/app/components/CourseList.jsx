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
  Grid,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import SectionHeading from '@/app/components/SectionHeading';

export const CourseList = ({ cursos, showDescription, title }) => {
  return (
    <>
      {cursos?.length > 0 ? (
        <Box mb="16">
          {title && <SectionHeading title={title} />}
          <Grid
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
              'repeat(3, 1fr)',
              'repeat(4, 1fr)',
            ]}
            gap={4}
          >
            {cursos.map(({ id, imgSrc, title, descripcion, url, details }) => {
              const Component = url ? LinkOverlay : Box;
              const extraProps = url ? { as: NextLink, href: url } : {};

              return (
                <LinkBox
                  bg="rgba(225, 231, 248, 1)"
                  key={id}
                  borderRadius="lg"
                  _hover={{ opacity: url ? 0.8 : 1 }}
                >
                  <Box position="relative">
                    <Image
                      w="100%"
                      h={['215', '240']}
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

                  {showDescription && details?.length > 0 ? (
                    <List
                      width="90%"
                      m="auto"
                      textAlign="justify"
                      px="2"
                      py="4"
                      fontSize="sm"
                    >
                      {details.map(({ label, value, url }) => {
                        return (
                          <Fragment key={id}>
                            {url ? (
                              <ListItem py="2">
                                <Link fontWeight="semibold" href={url}>
                                  {label}
                                </Link>
                              </ListItem>
                            ) : (
                              <ListItem py="2">
                                <Text
                                  fontWeight="semibold"
                                  display="inline"
                                  mr=".5rem"
                                >
                                  {label}
                                </Text>
                                {value}
                              </ListItem>
                            )}
                          </Fragment>
                        );
                      })}
                    </List>
                  ) : null}
                </LinkBox>
              );
            })}
          </Grid>
        </Box>
      ) : null}
    </>
  );
};

export default CourseList;
