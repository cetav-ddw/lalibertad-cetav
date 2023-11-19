import { Heading, Text } from '@chakra-ui/react';
import ContactDetail from '@/app/components/ContactDetail';

export default function Contacto() {
  return (
    <>
       <Heading
          as="h1"
          fontSize="xx-large"
          textAlign="center"
          maxWidth="800px"
          mx="auto"
        >
          Nuestra Información 
          {/* TODO MOVER COLOR AL THEME */}
          <Text
            as="span"
            display="block"
            fontSize="xx-large"
            mt="4"
            fontWeight="800px"
            mb="70px"
            color="blueHighlightColor"
          >
            de Contacto
          </Text>
        </Heading>
      <ContactDetail />
    </>
  );
}
