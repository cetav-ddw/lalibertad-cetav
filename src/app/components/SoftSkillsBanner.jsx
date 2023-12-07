'use client';

import { Box, Flex, Heading, Text, Icon } from '@chakra-ui/react';
import {
  MdChat,
  MdPalette,
  MdOutlineImportContacts,
  MdTipsAndUpdates,
} from 'react-icons/md';
import SectionHeading from '@/app/components/SectionHeading';

const SoftSkillsBanner = () => {
  return (
    <Box mb="16" p={{ base: 4, md: 6 }}>
      <SectionHeading title="Las competencias del futuro." />
      <Text maxWidth="1000px" mb="8" fontSize={{ base: 'md', md: 'lg' }}>
        {
          'Desarrollamos capacidades de forma integral, abarcando el fortalecimiento de las habilidades de comunicación empática, el desarrollo del pensamiento creativo y la formación en gestión de negocios como parte de nuestro compromiso por formar personas jóvenes responsables, emprendederas y participativas.'
        }
      </Text>
      <Flex flexWrap="wrap" justifyContent="space-around">
        <Flex
          flexDirection="column"
          maxW={{ base: '80%', md: '48%' }}
          mx="2"
          my="6"
        >
          <Heading as="h3" fontSize="lg" color="#444444" mb="2">
            <Icon as={MdChat} w={6} h={6} />
            <Text as="span" display="block">
              {'Comunicación No Violenta'}
            </Text>
          </Heading>
          <Text color="#444444">
            {
              'Se prioriza el autoconocimiento, la escucha activa y la empatía. Utilizando la metodología de la Comunicación No Violenta, destacamos la relevancia de la inteligencia emocional para el trabajo en equipo y la innovación.'
            }
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          maxW={{ base: '80%', md: '48%' }}
          mx="2"
          my="6"
        >
          <Heading as="h3" fontSize="lg" color="#444444" mb="2">
            <Icon as={MdPalette} w={6} h={6} />
            <Text as="span" display="block">
              {'Design Thinking'}
            </Text>
          </Heading>
          <Text color="#444444">
            {
              'Enseña sobre el proceso creativo aplicado para un proyecto real. Los y las estudiantes se enfrentan a su propia capacidad de generar ideas para desarrollar la confianza creativa.'
            }
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          maxW={{ base: '80%', md: '48%' }}
          mx="2"
          my="6"
        >
          <Heading as="h3" fontSize="lg" color="#444444" mb="2">
            <Icon as={MdTipsAndUpdates} w={6} h={6} />
            <Text as="span" display="block">
              {'Cultura Emprendedora'}
            </Text>
          </Heading>
          <Text color="#444444">
            {
              'El curso de “Cultura emprendedora”, desarrolla habilidades como el desarrollo de servicios y el modelado de negocios.'
            }
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          maxW={{ base: '80%', md: '48%' }}
          mx="2"
          my="6"
        >
          <Heading as="h3" fontSize="lg" color="#444444" mb="2">
            <Icon as={MdOutlineImportContacts} w={6} h={6} />
            <Text as="span" display="block">
              {'Inglés Conversacional'}
            </Text>
          </Heading>
          <Text color="#444444">
            {
              'Comunicarse en inglés con precisión, a nivel intermedio según el Marco Común Europeo de Referencia para las Lenguas, para la atención efectiva de la clientela.'
            }
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SoftSkillsBanner;
