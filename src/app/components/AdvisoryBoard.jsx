'use client';

import { Box, Text, ListItem, List, ListIcon } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import SectionHeading from '@/app/components/SectionHeading';

const AdvisoryBoard = () => {
  return (
    <Box mb="16" p={{ base: 4, md: 6 }} textAlign="center">
      <SectionHeading title="Consejo Asesor" />
      <Text maxWidth="1000px" margin="0 auto" pb="30px" fontSize={{ base: 'md', md: 'lg' }}>
        Se cuenta con equipo de personas en puestos importantes del estado y empresa
        privada, que guían la ruta de trabajo del CETAV y sus alcances. Es un Consejo Asesor compuesto por:
      </Text>
      <List maxW="500px" mx="auto" spacing={2} textAlign="left">
        <ListItem>
          <ListIcon as={MdCheckCircle} color="#313677" />
          Representante del Ministerio de Trabajo y Seguridad Social
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="#313677" />
          Representante del Ministerio de Cultura y Juventud
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="#313677" />
          Representante del Instituto Nacional de Aprendizaje
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="#313677" />
          Representante de CINDE
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="#313677" />
          Representante de PROCOMER
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="#313677" />
          Representante de CAMTIC
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="#313677" />
          Representantes del sector empresarial
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="#313677" />
          Representantes de la comunidad SOY CETAV
        </ListItem>
      </List>
      <Text maxWidth="1000px" margin="0 auto" pt="30px" fontSize={{ base: 'md', md: 'lg' }}>
        Aunado a lo anterior, contamos con un equipo de expertos en cada área, quienes supervisan
        la ejecución y contenidos del programa, para que cumpla con los requerimientos de las respectivas industrias.
      </Text>
    </Box>
  );
};

export default AdvisoryBoard;
