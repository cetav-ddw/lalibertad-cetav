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
  UnorderedList,
  Link
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
            Nuestra política de admisión se basa en generaciones, lo que significa que comenzamos a aceptar solicitudes cuando una generación está a punto de concluir y luego reabrimos el proceso para la siguiente generación.
            El período de admisión vigente, que actualmente está en curso, finalizará en enero de 2024. El próximo período de admisión debería ser de generación en generación y se extenderá hasta septiembre de 2025.
            No obstante, debido a las particularidades de nuestros programas de formación para el empleo, ocasionalmente abrimos oportunidades para técnicos antes de esa fecha. Les recomendamos seguirnos en las redes sociales para mantenerse al tanto de las actualizaciones.
            <Link color="#313677" fontWeight={"bold"} title="link de facebook" href="https://www.facebook.com/cetavcr?mibextid=9R9pXO"> Facebook e </Link>
            <Link color="#313677" fontWeight={"bold"} title="link de instagram" href="https://www.instagram.com/cetav_pll?igshid=OGQ5ZDc2ODk2ZA%3D%3D">Instagram</Link>
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
            Los técnicos tienen un costo de ₡100,000 al mes; Sin embargo, todas las personas que aplican al proceso de admisión se les hace un estudio socioeconómico para identificar:
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
                <ListItem>Deben haber aprobado la educación secundaria (bachillerato). Si en este momento están cursándola y el proceso de admisión está abierto, pueden iniciar el proceso. Sin embargo, si desaprueban alguno de los exámenes de bachillerato, no podrán continuar.</ListItem>
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
              <ListItem>No es un requisito para el técnico de Mercadeo, pero es necesario tener conocimiento comprobable en Adobe Photoshop y Adobe Illustrator,
                o programas de edición de imagen similares. Estos requisitos sí son obligatorios para el resto de los técnicos. </ListItem>
              <ListItem>En caso de extranjeros, tener su estatus migratorio al día.</ListItem>
              <ListItem>Disponibilidad de tiempo completo.</ListItem>
            </UnorderedList>
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
            No, es un requisito completar todo el bloque.
            En el caso del técnico de CiberSeguridad, si alguien ha aprobado recientemente alguno de los cursos de CISCO por su cuenta, se le pueden convalidar. Además, el inglés es una materia que se puede convalidar en todos los técnicos. Sin embargo, las demás materias no son convalidables.
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
            Actualmente, tenemos una tasa de inserción laboral del 90%, lo cual representa un nivel bastante alto de éxito.
            Realizamos un trabajo conjunto con las industrias para validar el perfil de nuestros estudiantes.
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
              <ListItem> En el caso de Post Producción, cada vez se busca más el enfoque en motion graphics, lo que lleva a nuestros graduados a trabajar en agencias digitales, canales de televisión o productoras audiovisuales.</ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>En el campo de la Animación, algunos de nuestros graduados trabajan en estudios de animación, mientras que otros se emplean en empresas de arquitectura, específicamente en la visualización arquitectónica.</ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>Los graduados en Mercadeo encuentran empleo en agencias digitales como Accenture, Hangar, Critical Mass y Wunderman Thompson.</ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>En el ámbito de Desarrollo Web, nuestros graduados son empleados por diversas empresas, tanto nacionales como internacionales, que buscan profesionales con habilidades sólidas de desarrollo. Ejemplos de estas empresas incluyen Accenture, Critical Mass, Avast y Magma. Estas empresas valoran el perfil de nuestros graduados debido a su amplio conjunto de habilidades.</ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>Existe una creciente demanda en la toma de decisiones basada en datos, lo que ha llevado a empresas que van desde Pozuelo hasta corporaciones internacionales como P&G a buscar perfiles de analistas de datos.</ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                En el campo de la Ciberseguridad, la demanda está en aumento en Costa Rica, con un promedio de contratación de alrededor de seis personas al mes para empresas que ofrecen servicios de ciberseguridad.</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

    </>)
}