import { Box, Text, Image } from '@chakra-ui/react';
import SectionHeading from './SectionHeading';

const LaboralFormation = () => {
  return (
    <Box mb="16">
      <SectionHeading title="Formación que abre puertas laborales" />
      <Text flexBasis="1000px" margin="0 auto" fontSize="lg">
        El modelo de formación para el empleo ofrece una formación integral,
        incluyendo habilidades técnicas, socio-afectivas e inglés. Los programas
        se ajustan a las necesidades de instituciones y empresas para lograr
        perfiles de egreso ideales. Además, se realizan eventos para mostrar las
        competencias de los estudiantes a posibles empleadores.
      </Text>
      <Image src="/images/grafico.png" alt="" />
    </Box>
  );
};

export default LaboralFormation;
