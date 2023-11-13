'use client'
import { Box, Text, Image, Center} from '@chakra-ui/react';
import SectionHeading from './SectionHeading';

const LaboralFormation = () => {
  return (
    <Box mb="16" p={{ base: 4, md: 6 }} textAlign="justify">
      <SectionHeading title="Formación que abre puertas laborales" />
      <Text maxWidth="1000px"margin="0 auto"fontSize={{ base: 'md', md: 'lg' }}>
        El modelo de formación para el empleo ofrece una formación integral,
        incluyendo habilidades técnicas, socio-afectivas e inglés. Los programas
        se ajustan a las necesidades de instituciones y empresas para lograr
        perfiles de egreso ideales. Además, se realizan eventos para mostrar las
        competencias de los estudiantes a posibles empleadores.
      </Text>
      <Center>
        <Image src="/images/grafico.png" alt="" w="80%" maxW="1000px" />
      </Center>
    </Box>
  );
};

export default LaboralFormation;
