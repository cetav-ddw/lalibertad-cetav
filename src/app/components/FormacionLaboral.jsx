import { Box, Text, Image } from '@chakra-ui/react';
import SectionHeading from './SectionHeading';

const FormacionLaboral = () => {
  return (
    <Box 
      mx="auto" 
      maxW="1180px"
      textAlign="justify"
      >
      <SectionHeading title="Formación que abre puertas laborales" />
      <Text 
        width= "60%"
        margin= "0 auto"
        fontSize="26px"
        fontWeight="400"
        lineHeight="31.69px"
        >
        El modelo de formación para el empleo ofrece una formación integral,
        incluyendo habilidades técnicas, socio-afectivas e inglés. Los programas se
        ajustan a las necesidades de instituciones y empresas para lograr perfiles de
        egreso ideales. Además, se realizan eventos para mostrar las competencias
        de los estudiantes a posibles empleadores.
      </Text>
      <Image
        src='/images/grafico.png'
        alt='grafico'
        />
    </Box>
  );
};

export default FormacionLaboral;
