import React from 'react';
import { Box } from '@chakra-ui/react';

const LocationMap = () => {
  const googleMapsUrl = `https://www.google.com/maps?q=Edificio+Cetav,+Parque+La+Libertad&output=embed`;

  return (
    <Box
      width="100%"
      height={["350px", "500px"]}
    >
      <iframe
        title="Ubicación CETAV"
        src={googleMapsUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
      />
    </Box>
  );
};

export default LocationMap;