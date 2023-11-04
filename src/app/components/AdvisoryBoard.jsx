'use client';

import { Box, Flex, Text, ListItem, List, ListIcon, Icon } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import SectionHeading from '@/app/components/SectionHeading';

const AdvisoryBoard = () => {
  return (
    <Box mb="16">
      <SectionHeading title="Consejo Asesor" />
      <Flex flexWrap="wrap" justifyContent="space-around">
        <Flex flexDirection="column" maxW="48%" mx="2" my="6">
          <Text fontSize="26px" color="#444444">
            {
              'El CETAV del Parque La Libertad, cuenta con la asesoría y acompañamiento de personas expertas y profesionales de la industria audiovisual; así como del sector de la educación técnica, que contribuyen a determinar las tendencias, necesidades y opciones que marcan el mercado y las futuras fuentes de empleo de nuestro estudiantado.'
            }
          </Text>
        </Flex>
        <Flex flexDirection="column" maxW="48%" mx="2" my="6">
          <Box mb="16">
            <List maxW="980px" mx="auto" spacing={2}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#313677" />
                Ministerio de Cultura y Juventud | Sra. Loida Pretiz, Viceministra de Cultura
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#313677" />
                Ministerio de Trabajo y Seguridad Social | Sr. Marcos Solano, Director Nacional de Empleo
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#313677" />
                Instituto Nacional De Aprendizaje (INA) | Sr. Andrés Romero, Subgerente Técnico
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#313677" />
                Coalición Costarricense de Iniciativas de Desarrollo (CINDE) | Sra. Vanessa Gibson, Head of Investment Climate
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#313677" />
                Promotora de Comercio Exterior (PROCOMER) | Kevin Villalta, Promotor Sectorial
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#313677" />
                Cámara de Tecnologías de Información y Comunicación (CAMTIC) | Sr. Claudio Pinto - Fair Play Labs
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#313677" />
                Costa Rica Animation Holdings | Oliver Zúñiga - MarteStudio
              </ListItem>
            </List>
          </Box>
        </Flex>
      </Flex>
    </Box >
  );
};

export default AdvisoryBoard;