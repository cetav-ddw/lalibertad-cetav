import { Box, Text } from '@chakra-ui/react';
import SectionHeading from './SectionHeading';


const CetavIntro = () => {
  return (
    <Box mb="16" p={{ base: 4, md: 6 }}>
      <SectionHeading title="CETAV" />
      <Text margin="0 auto" mb={"25px"} fontSize={{ base: 'md', md: 'lg' }}>
        El Centro de Tecnología y Artes Visuales (CETAV) de la Fundación Parque Metropolitano
        La Libertad es un modelo de formación en áreas de Arte y Tecnología para el empleo e
        inclusión social, el cual, busca fomentar el desarrollo humano con las demandas del mercado.
      </Text>
      <Text margin="0 auto" fontSize={{ base: 'md', md: 'lg' }}>
        Las personas participantes del programa, son actores de un proceso que cumple altos
        estándares de calidad en el desarrollo de las competencias para la Cuarta Revolución
        Industrial. El proceso y la estrategia educativa, aspira a aportar a nivel local y
        global un modelo replicable que favorezca la innovación educativa a través de la transformación social.
      </Text>
    </Box>
  );
};

export default CetavIntro;
