'use client';

import { Box, ListItem, List, ListIcon } from '@chakra-ui/react';
import SectionHeading from '@/app/components/SectionHeading';
import { MdCheckCircle } from 'react-icons/md';

const GoodToKnowBanner = ({ topicList }) => {
  return (
    <>
      {topicList?.length > 0 ? (
        <Box mb="16">
          <SectionHeading title="¿Qué debes saber antes de aplicar?" />
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
