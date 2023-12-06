'use client';

import React from 'react';
import {
  Box,
  Grid,
  Image,
  LinkBox,
  LinkOverlay,
  List,
  Link,
  ListItem,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import SectionHeading from '@/app/components/SectionHeading';

const CourseItemDetails = ({ details, courseId }) => (
  <List width="100%" m="auto" textAlign="justify" px="2" py="4" fontSize="sm">
    {details.map((detail, index) => {
      const key = `${courseId}-${index}`;
      return (
        <ListItem key={key}>
          {detail.url ? (
            <Link as={NextLink} href={detail.url} fontWeight="semibold">
              {detail.label}
            </Link>
          ) : (
            <>
              <Text fontWeight="semibold">{detail.label}</Text>
              {detail.value}
            </>
          )}
        </ListItem>
      );
    })}
  </List>
);

const CourseListItem = ({
  id,
  imgSrc,
  title,
  descripcion,
  url,
  details,
  showDescription,
}) => {
  const HeadingComponent = url ? LinkOverlay : Box;
  return (
    <LinkBox
      bg="rgba(225, 231, 248, 1)"
      borderRadius="lg"
      _hover={{ opacity: url ? 0.8 : 1 }}
    >
      <Box position="relative">
        <Image
          w="100%"
          h={['215', '240']}
          src={imgSrc}
          alt={title}
          borderRadius="lg"
          objectFit="cover"
        />
        <HeadingComponent
          as={url ? NextLink : 'h3'}
          href={url}
          pos="absolute"
          bottom="2"
          left="3"
          color="#E1E7F8"
          fontSize="md"
          my="5"
          dropShadow="lg"
          fontWeight="bold"
          textShadow="2px 2px 2px #333333"
        >
          {title}
        </HeadingComponent>
      </Box>
      {showDescription && descripcion && (
        <Text color="#313677" px="2" py="4" fontSize="sm">
          {descripcion}
        </Text>
      )}
      {showDescription && details && (
        <CourseItemDetails details={details} courseId={id} />
      )}
    </LinkBox>
  );
};

export const CourseList = ({ cursos, showDescription, title }) =>
  cursos?.length ? (
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
        mx={{ base: 'auto', md: '0' }}
        maxW={{ base: '80%', md: '100%' }}
      >
        {cursos.map((course) => (
          <CourseListItem
            key={course.id}
            {...course}
            showDescription={showDescription}
          />
        ))}
      </Grid>
    </Box>
  ) : null;

export default CourseList;
