'use client';

import React from 'react';
import {
  Box,
  Wrap,
  WrapItem,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import { StatsData } from '../content/statsData';

const GenderStats = () => {
  const cardWidth = useBreakpointValue({ base: '100%', sm: '48%', md: '31%' });

  return (
    <Wrap spacing="20px" justify="center">
      {StatsData.genderStats.map((stat, index) => (
        <WrapItem key={index} width={cardWidth} minW="250px" flex="1">
          <Stat
            textAlign="center"
            boxShadow="base"
            borderRadius="md"
            p={5}
            bg="white"
          >
            <Flex direction="column" align="center" justify="center">
              {stat.icon && <Box as={stat.icon} fontSize="80px" mb={3} />}
              <StatNumber fontSize="2xl" fontWeight="bold">
                {stat.number}
              </StatNumber>
              <StatLabel fontSize="lg" fontWeight="bold">
                {stat.label}
              </StatLabel>
              {stat.percentage && (
                <StatHelpText fontSize="md">{stat.percentage}</StatHelpText>
              )}
            </Flex>
          </Stat>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default GenderStats;
