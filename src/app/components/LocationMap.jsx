import React from 'react';
import { Box } from '@chakra-ui/react';

const LocationMap = () => {
  const googleMapsUrl = `https://www.google.com/maps?q=Edificio+Cetav,+Parque+La+Libertad&output=embed`;

  return (
    <Box>
      <iframe
        title="Ubicación CETAV"
        src={googleMapsUrl}
        width="600"
        height="500"
        style={{ border: 0 }}
        loading="lazy"
      />
    </Box>
  );
};

export default LocationMap;
