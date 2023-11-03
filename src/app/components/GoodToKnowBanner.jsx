import { Box, ListItem, List, ListIcon } from '@chakra-ui/react';
import SectionHeading from '@/app/components/SectionHeading';

// ToDO Agregar icono al ListItem
const GoodToKnowBanner = ({ topicList }) => {
  return (
    <>
      {topicList?.length > 0 ? (
        <Box mb="16">
          <SectionHeading title="¿Qué debes saber antes de aplicar?" />
          <List maxW="980px" mx="auto">
            {topicList.map((topic) => {
              return (
                <ListItem key={topic.toLowerCase().replace(/\s+/g, '')} mb="2">
                  <ListIcon color="green.500" />
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
