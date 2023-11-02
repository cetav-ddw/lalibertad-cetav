import {
  Heading,
  ListItem,
  OrderedList,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  UnorderedList
} from '@chakra-ui/react';
import SectionHeading from '../components/SectionHeading';

export default function Faq() {
  return (
    <>
      <Heading as="h1">Preguntas frecuentes</Heading>
      <SectionHeading title="Sobre el CETAV" />
      <Accordion allowMultiple>
        <AccordionItem m={10} mb={20} borderStyle={"none"}>
          <h3>
            <AccordionButton bg="#E1E7F8" p={4} color="#313677" rounded="lg" fontWeight={"bold"}>
              <Box as="span" flex='1' textAlign='left'>
                ¿Cada cuánto tiempo se abre el proceso de admisión?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4}>
            Nosotros trabajamos por generación. Significa que abrimos cuando una generación va a finalizar volvemos a abrir para la siguiente generación.
            El periodo que ahora está abierto se cierra en enero del 2024 y el siguiente periodo debería ser por generación hasta septiembre del 2025,
            sin embargo como son programas de formación para el empleo a veces se habilitan espacios de técnicos antes, les invitamos que nos sigan en redes sociales.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <SectionHeading title="Financiamiento" />
      <Accordion allowMultiple>
        <AccordionItem m={10} borderStyle={"none"}>
          <h3>
            <AccordionButton bg="#E1E7F8" p={4} color="#313677" rounded="lg" fontWeight={"bold"}>
              <Box as="span" flex='1' textAlign='left'>
                ¿Cuál es el costo mensual de las carreras técnicas del CETAV?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4}>
            Los técnicos tienen un costo de ₡100,000 al mes, sin embargo, todas las personas que aplican al proceso de admisión se les hace un estudio socioeconómico para identificar:
            <OrderedList>
              <ListItem>Si la persona está en condición de pagar.</ListItem>
              <ListItem>Si la persona necesita una exoneración. </ListItem>
              <ListItem>Si la persona necesita un subsidio. Esto quiere decir un apoyo económico para venir a estudiar. </ListItem>
            </OrderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <SectionHeading title="Sobre nuestro proceso de admisión" />
      <Accordion allowMultiple>
        <AccordionItem m={10} borderStyle={"none"}>
          <h3>
            <AccordionButton bg="#E1E7F8" p={4} color="#313677" rounded="lg" fontWeight={"bold"}>
              <Box as="span" flex='1' textAlign='left'>
                ¿Cuál es el proceso para entrar al CETAV?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4}>
            Lo primero es ingresar la información básica en nuestra base de datos.
            Esto lo puede hacer a través del correo solicitando el formulario a través del correo cetav@lalibertadcr.org
            Además los requisitos son los siguientes:
            <OrderedList>
              <UnorderedList>
                <ListItem>Deben tener un mínimo de edad de 17 años y un máximo de 35 años.</ListItem>
                <ListItem>Deben haber aprobado bachillerato secundaria, si en este momento lo están cursando
                  y el proceso está abierto si se puede iniciar con el proceso, pero, si desaprueba alguno de los exámenes de bachillerato no puede continuar.</ListItem>
              </UnorderedList>
            </OrderedList>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem m={10} borderStyle={"none"}>
          <h3>
            <AccordionButton bg="#E1E7F8" p={4} color="#313677" rounded="lg" fontWeight={"bold"}>
              <Box as="span" flex='1' textAlign='left'>
                ¿Cuáles son los requisitos para entrar al CETAV?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4}>
            <UnorderedList>
              <ListItem>Tener entre 17 y 35 años.</ListItem>
              <ListItem>Bachillerato aprobado.</ListItem>
              <ListItem>No es requisito para el técnico de Mercadeo. El conocimiento comprobable en Adobe Photoshop y Adobe Ilustrator básico o programas de edición de imagen similares,
                pero si son requisitos para el resto de los técnicos. </ListItem>
              <ListItem>En caso de extranjeros, tener su estatus migratorio al día.</ListItem>
              <ListItem>Disponibilidad de tiempo completo.</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem m={10} borderStyle={"none"}>
          <h3>
            <AccordionButton bg="#E1E7F8" p={4} color="#313677" rounded="lg" fontWeight={"bold"}>
              <Box as="span" flex='1' textAlign='left'>
                ¿Cuál es la edad para poder entrar al CETAV?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4}>
            Mínimo 17 años, máximo 35 años.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem m={10} mb={20} borderStyle={"none"}>
          <h3>
            <AccordionButton bg="#E1E7F8" p={4} color="#313677" rounded="lg" fontWeight={"bold"}>
              <Box as="span" flex='1' textAlign='left'>
                ¿Puedo escoger qué materias matricular y en qué orden llevarlas?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4}>
            No, es un requisito llevar el bloque completo.
            En el caso del técnico de CiberSeguridad si alguien recientemente ha aprobado alguno de los cursos de CISCO por su cuenta se le puede convalidar
            e inglés es una materia que en todos los técnicos se pueden convalidar, fuera de ahí las demás no se convalidan.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <SectionHeading title="Inserción Laboral" />
      <Accordion mb={10} allowMultiple>
        <AccordionItem m={10} borderStyle={"none"}>
          <h3>
            <AccordionButton bg="#E1E7F8" p={4} color="#313677" rounded="lg" fontWeight={"bold"}>
              <Box as="span" flex='1' textAlign='left'>
                ¿Cuál es el promedio de inserción laboral de egresados y egresadas del CETAV?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4}>
            Nosotros ahora estamos en un 90% de inserción laboral, es un proceso bastante alto, hay todo un trabajo
            que se hace con las industrias para validar el perfil.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem m={10} mb={20} borderStyle={"none"}>
          <h3>
            <AccordionButton bg="#E1E7F8" p={4} color="#313677" rounded="lg" fontWeight={"bold"}>
              <Box as="span" flex='1' textAlign='left'>
                ¿En qué tipo de empresas trabajan las personas egresadas de cada carrera?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4}>

            Dependiendo de su especialidad.
            <UnorderedList>
              <ListItem> En el caso de PostProducción cada vez buscan más hacia el lado de motion graphics, entonces trabajan en agencias digitales, canales de televisión o productoras audiovisuales.</ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>Animación, en estudios de animación propiamente algunos trabajan en empresas de arquitectura, en visualización arquitectónica propiamente, pero la mayoría en estudios de animación.</ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>Mercadeo, trabajan en agencias digitales como Accenture, Hangar, Critical Mass y Wunderman Thompson.</ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>Web, trabajan en muchos tipos de empresas nacionales e internacionales, que buscan el perfil de desarrolladores.Por ejemplo, Accenture, Critical Mass, Avast Magma. Hay muchas empresas que buscan el perfil de nosotros ya que es bastante completo en las habilidades básicas que se necesitan para entrar en estas empresas.</ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
            También hay empresas que están creciendo cada vez más en  la toma de decisiones a partir de los datos. Vamos desde Pozuelo hasta empresas internacionales como P&G, que buscan este perfil porque cada vez necesitan más analistas de datos.</ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
              En caso de CiberSeguridad, hay muchas empresas en Costa Rica cada vez más en oferta de venta de servicios de ciberseguridad para las empresas, más o menos el promedio es de seis personas que se contratan al mes.
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

    </>)
}