'use client';

import { Box, ListItem, List, ListIcon, Text } from '@chakra-ui/react';
import SectionHeading from '@/app/components/SectionHeading';
import { MdCheckCircle } from 'react-icons/md';

const GoodToKnowBanner = ({ topicList }) => {
  return (
    <>
      {topicList?.length > 0 ? (
        <Box mb="16" p={{ base: 4, md: 6 }}>
          <SectionHeading title="¿Qué debes saber antes de aplicar?" />
          <Text maxWidth="1000px" mb="8" fontSize={{ base: 'md', md: 'lg' }}>
            {
              'Los aspirantes a nuestros programas técnicos deben desarrollar habilidades socioafectivas complementarias a las competencias técnicas del CETAV, incluyendo responsabilidad, autorregulación, aceptación de críticas, visión del error como oportunidad de crecimiento, autodidactismo, adaptabilidad y logro de metas. Estas habilidades se cultivan para preparar a los estudiantes en entornos laborales digitales y fomentar la formación de ciudadanos conscientes en una sociedad global.'
            }
          </Text>
          <List maxW="1000px">
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
