import { Heading, Text } from '@chakra-ui/react';
import ContactDetail from '@/app/components/ContactDetail';
import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export default function Contacto() {
  const paths = [
    { title: "Inicio", path: "/" },
    { title: "Contacto", path: "/contacto" }
  ];
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
      <Breadcrumbs paths={paths} />
      <PHeading
        title={headingInfo.contacto.title}
        titleColor={headingInfo.contacto.titleColor}
      />
      <ContactDetail />
    </>
  );
}
