import { Box, Flex, Text, Image } from '@chakra-ui/react';
import professorsData from '../content/professorsData';

const ProfessorCard = () => {
  return (
    <Flex wrap="wrap" justify="center" gap={6} p={5}>
      {professorsData.map((professor, index) => (
        <Box
          key={index}
          borderWidth="1px"
          borderRadius="lg"
          position="relative"
          width="355.22px"
          height="314px"
        >
          <Image
            src={professor.photo}
            alt={`Photo of ${professor.name}`}
            width="100%"
            height="100%"
            objectFit="cover"
            borderRadius="lg"
          />
          <Box position="absolute" bottom="10px" left="10px" color="white">
            <Text>{professor.name}</Text>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default ProfessorCard;
