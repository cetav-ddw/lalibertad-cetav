import { Box, Flex, Text, Image } from '@chakra-ui/react';
import teamData from '../content/teamData';
import SectionHeading from './SectionHeading';

const OurTeamCard = () => {
  return (
    <>
      <SectionHeading title="Equipo CETAV" />
      <Flex wrap="wrap" justify="center" gap={6} p={5} mb="16">
        {teamData.map((team, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            position="relative"
            width="300px"
            height="200px"
          >
            <Image
              src={team.photo}
              alt={`Miembro del team llamado ${team.name}`}
              width="100%"
              height="100%"
              objectFit="cover"
              borderRadius="lg"
            />
            <Box position="absolute" bottom="10px" left="10px" color="white">
              {/* TODO AGREGAR COLOR AL THEME */}
              <Text textShadow="2px 2px 2px #333333">{team.name}</Text>
              <Text textShadow="2px 2px 2px #333333">{team.position}</Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default OurTeamCard;
