'use client';

import { Box, Flex, Text } from '@chakra-ui/react';
import SectionHeading from '@/app/components/SectionHeading';

const OurHistory = () => {
  return (
    <Box mb="160">
      <SectionHeading title="Nuestra Historia" />
      <Flex flexWrap="wrap" justifyContent="space-around">
        <Flex flexDirection="column" maxW="48%" mx="2" my="6">
          <Text color="#444444">
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at massa elementum, tristique ipsum in, venenatis eros. Fusce sed volutpat elit. Praesent at felis et quam feugiat porttitor. Curabitur gravida turpis nec mi blandit auctor. Suspendisse magna tortor, luctus at auctor nec, semper sit amet lorem. Fusce dignissim ultricies diam non porta.'
            }
          </Text>
        </Flex>
        <Flex flexDirection="column" maxW="48%" mx="2" my="6">
          <Text color="#444444">
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at massa elementum, tristique ipsum in, venenatis eros. Fusce sed volutpat elit. Praesent at felis et quam feugiat porttitor. Curabitur gravida turpis nec mi blandit auctor. Suspendisse magna tortor, luctus at auctor nec, semper sit amet lorem. Fusce dignissim ultricies diam non porta.'
            }
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default OurHistory;
