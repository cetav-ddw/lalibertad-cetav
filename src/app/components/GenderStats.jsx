'use client';
import React from 'react';
import {
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Flex,
} from '@chakra-ui/react';
import { genderStatsData } from '../content/statsData';

const GenderStats = () => {
  return (
    <SimpleGrid columns={[2]} spacing={10}>
      {genderStatsData.map((stat, index) => (
        <Stat key={index} textAlign="center">
          <Flex direction="row" align="center" justify="center">
            {stat.icon && <Box as={stat.icon} fontSize="80px" />}
            <Box>
              <StatNumber fontSize="60px" fontWeight="bold">
                {stat.number}
              </StatNumber>
              <Flex direction="column" align="baseline">
                <StatLabel fontSize="md" fontWeight="bold">
                  {stat.label}
                </StatLabel>
                {stat.percentage && (
                  <StatHelpText fontSize="20px">{stat.percentage}</StatHelpText>
                )}
              </Flex>
            </Box>
          </Flex>
        </Stat>
      ))}
    </SimpleGrid>
  );
};

export default GenderStats;
