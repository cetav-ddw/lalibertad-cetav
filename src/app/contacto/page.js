import ContactDetail from '../components/contactDetail';
import { Box, Heading, Text } from '@chakra-ui/react';


export default function Contacto() {
  return (
    <>
      <Box textAlign="center" padding="50">
        <Heading as="h1" fontSize="xx-large">
          Nuestra Información
          {/* TODO MOVER COLOR AL THEME */}
          <Text color="blue.500" as="span" display="block">
            de Contacto
          </Text>
        </Heading>
      </Box>

      <ContactDetail />
    </>
  );
}
