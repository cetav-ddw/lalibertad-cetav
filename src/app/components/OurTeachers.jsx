import { Box, Avatar, Heading, Text, Flex } from '@chakra-ui/react';
import SectionHeading from '@/app/components/SectionHeading';

const OurTeachers = ({ teacherList }) => {
  return (
    <>
      {/* TODO mover colores al theme */}
      {teacherList?.length > 0 ? (
        <Box mx="auto" maxW="980px">
          <SectionHeading title="¿Quiénes son nuestros profesores?" />
          <Text fontSize="x-large" p="2" my="4">
            {
              'Nuestros profesores y profesoras, son profesionales activos y miembros de la industria, dedicados a enseñarte las habilidades más demandadas.'
            }
          </Text>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-around"
            alignItems="center"
          >
            {teacherList.map(({ id, name, position, avatarSrc }) => {
              return (
                <Flex
                  maxW="31%"
                  flex="1 1 300px"
                  alignItems="center"
                  key={id}
                  flexDir="column"
                  backgroundColor="#4D2D76"
                  borderRadius="5px"
                  px="12"
                  py="16"
                  m="2"
                  minHeight={{ lg: '300px' }}
                >
                  <Avatar src={avatarSrc} size="lg" mb="1" />
                  <Heading as="h3" color="#E6DCF8" fontSize="lg">
                    {name}
                  </Heading>
                  <Text color="#E6DCF8">{position}</Text>
                </Flex>
              );
            })}
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default OurTeachers;
