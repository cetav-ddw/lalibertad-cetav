'use client';

import { Box, ListItem, List, ListIcon, Text } from '@chakra-ui/react';
import SectionHeading from '@/app/components/SectionHeading';
import { MdCheckCircle } from 'react-icons/md';

const GoodToKnowBanner = ({ topicList }) => {
  return (
    <>
      {topicList?.length > 0 ? (
        <Box mb="16">
          <SectionHeading title="¿Qué debes saber antes de aplicar?" />
          <Text mb="4">
            {
              'El acceso a nuestros programas técnicos requiere que los aspirantes desarrollen habilidades socioafectivas complementarias a las competencias técnicas proporcionadas durante la formación en el CETAV. Se enfatiza la importancia de cualidades como la responsabilidad, autorregulación en el aprendizaje, apertura a la crítica constructiva, percepción del error como oportunidad de crecimiento, autodidactismo, disposición al cambio y logro de metas individuales y grupales. Estas habilidades se buscan cultivar para preparar a los estudiantes para entornos laborales digitales y fomentar la formación de ciudadanos conscientes y orientados hacia sus proyectos de vida en una sociedad global.'
            }
          </Text>
          <List maxW={{ base: '80%', md: '980px' }} mx="auto">
            {topicList.map((topic) => {
              return (
                <ListItem key={topic.toLowerCase().replace(/\s+/g, '')} mb="2">
                  <ListIcon as={MdCheckCircle} color="#313677" />
                  {topic}
                </ListItem>
              );
            })}
          </List>
        </Box>
      ) : null}
    </>
  );
};

export default GoodToKnowBanner;
