import { Box, Text } from '@chakra-ui/react';
import SectionHeading from './SectionHeading';

const LaboralFormation = () => {
  return (
    <Box mb="16" p={{ base: 4, md: 6 }}>
      <SectionHeading title="Formación que abre puertas laborales" />
      <Text maxWidth="1000px" margin="0 auto" mb={'25px'} fontSize={{ base: 'md', md: 'lg' }}>
        El modelo de formación por competencias facilita a las personas
        participantes del CETAV, las habilidades técnicas y socio afectivas
        requeridas por las empresas, para que su perfil sea competitivo y
        responda a las demandas del mercado laboral.
      </Text>
      <Text maxWidth="1000px" margin="0 auto" mb={'25px'} fontSize={{ base: 'md', md: 'lg' }}>
        Constantemente estamos en revisión de los planes de estudio y las mallas
        curriculares para que la oferta esté actualizada y alineada a los
        estándares de las instancias reguladoras y a su vez, cumpla con los
        requisitos del sector empresarial. La experiencia del CETAV está
        diseñada para las personas que quieren desarrollar competencias en arte
        y tecnología para el trabajo.
      </Text>
    </Box>
  );
};

export default LaboralFormation;
