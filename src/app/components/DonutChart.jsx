'use client';
import { Box, Text, Image, Flex } from '@chakra-ui/react';
import { donutChartStats } from '../content/statsData';

const DonutChart = () => {
  return (
    <Flex position="relative">
      <Image src="/images/grafico-anillo.png" alt="Gráfico de anillo" />
      {donutChartStats.map((stat, index) => (
        <Box key={index} position="absolute" {...stat.position}>
          <Text fontWeight="bold">
            {stat.number} | {stat.percentage}
          </Text>
          <Text fontSize="sm">{stat.label}</Text>
        </Box>
      ))}
    </Flex>
  );
};

export default DonutChart;
