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
  Link,
} from '@chakra-ui/react';
import SectionHeading from '@/app/components/SectionHeading';
import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export default function Faq() {
  const paths = [
    { title: "Inicio", path: "/" },
    { title: "Preguntas frecuentes", path: "/preguntas-frecuentes" }
  ];
  return (
    <>
      <Breadcrumbs paths={paths} />
      <PHeading
        title={headingInfo.preguntas.title}
        titleColor={headingInfo.preguntas.titleColor}
      />
      <SectionHeading title="Sobre el CETAV" />
      <Accordion allowMultiple>
        <AccordionItem m={10} mb={20} borderStyle={'none'}>
          <Heading as="h3">
            <AccordionButton
              bg="#E1E7F8"
              p={4}
              color="#313677"
              rounded="lg"
              fontWeight={'bold'}
            >
              <Box as="span" flex="1" textAlign="left">
                ¿Cada cuánto tiempo se abre el proceso de admisión?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            Nuestra política de admisión se basa en generaciones, lo que
            significa que comenzamos a aceptar solicitudes cuando una generación
            está a punto de concluir y luego reabrimos el proceso para la
            siguiente generación. El período de admisión vigente finalizará en
            enero de 2024. El próximo período de admisión debería ser de
            generación en generación y se extenderá hasta septiembre de 2025. No
            obstante, debido a las particularidades de nuestros programas de
            formación para el empleo, ocasionalmente abrimos oportunidades para
            técnicos antes de esa fecha. Les recomendamos seguirnos en las redes
            sociales para mantenerse al tanto de las actualizaciones{' '}
            <Link
              color="#313677"
              fontWeight={'bold'}
              title="link de facebook"
              href="https://www.facebook.com/cetavcr?mibextid=9R9pXO"
            >
              Facebook{' '}
            </Link>
            e{' '}
            <Link
              color="#313677"
              fontWeight={'bold'}
              title="link de instagram"
              href="https://www.instagram.com/cetav_pll?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
            >
              Instagram
            </Link>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <SectionHeading title="Financiamiento" />
      <Accordion allowMultiple>
        <AccordionItem m={10} borderStyle={'none'}>
          <Heading as="h3">
            <AccordionButton
              bg="#E1E7F8"
              p={4}
              color="#313677"
              rounded="lg"
              fontWeight={'bold'}
            >
              <Box as="span" flex="1" textAlign="left">
                ¿Cuál es el costo mensual de las carreras técnicas del CETAV?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            Los técnicos tienen un costo de ₡100,000 al mes; sin embargo, todas
            las personas que aplican al proceso de admisión se les hace un
            estudio socioeconómico para identificar:
            <OrderedList>
              <ListItem>Si la persona está en condición de pagar.</ListItem>
              <ListItem>Si la persona necesita una exoneración. </ListItem>
              <ListItem>
                Si la persona necesita un subsidio o apoyo económico para venir
                a estudiar.
              </ListItem>
            </OrderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <SectionHeading title="Sobre nuestro proceso de admisión" />
      <Accordion allowMultiple>
        <AccordionItem m={10} borderStyle={'none'}>
          <Heading as="h3">
            <AccordionButton
              bg="#E1E7F8"
              p={4}
              color="#313677"
              rounded="lg"
              fontWeight={'bold'}
            >
              <Box as="span" flex="1" textAlign="left">
                ¿Cuál es el proceso para entrar al CETAV?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            El primer paso es solicitar el formulario de registro al correo
            cetav@lalibertadcr.org, completarlo y enviarlo, con esto quedará
            registrado en nuestra base de datos. Además de lo anterior, los
            requisitos generales son:
            <OrderedList>
              <UnorderedList>
                <ListItem>
                  Tener un mínimo de edad de 17 años y un máximo de 35 años.
                </ListItem>
                <ListItem>
                  Haber aprobado la educación secundaria (bachillerato). Si en
                  este momento están cursándola y el proceso de admisión está
                  abierto, pueden iniciar el proceso. Sin embargo, si
                  desaprueban alguno de los exámenes de bachillerato, no podrán
                  continuar.
                </ListItem>
              </UnorderedList>
            </OrderedList>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem m={10} borderStyle={'none'}>
          <Heading as="h3">
            <AccordionButton
              bg="#E1E7F8"
              p={4}
              color="#313677"
              rounded="lg"
              fontWeight={'bold'}
            >
              <Box as="span" flex="1" textAlign="left">
                ¿Cuáles son los requisitos para entrar al CETAV?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <UnorderedList>
              <ListItem>Tener entre 17 y 35 años.</ListItem>
              <ListItem>Bachillerato aprobado.</ListItem>
              <ListItem>
                Conocimiento comprobable en Adobe Photoshop y Adobe Illustrator,
                o programas de edición de imagen similares; lo anterior no es
                requisito para el
                <Link
                  color="#313677"
                  fontWeight={'bold'}
                  title="link a tecnico de mercadeo"
                  href="/tecnicos/mercadeo-digital-diseno"
                >
                  {' '}
                  técnico de Mercadeo digital y diseño.{' '}
                </Link>
              </ListItem>
              <ListItem>
                En caso de extranjeros, tener su estatus migratorio al día.
              </ListItem>
              <ListItem>Disponibilidad de tiempo completo.</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem m={10} borderStyle={'none'}>
          <Heading as="h3">
            <AccordionButton
              bg="#E1E7F8"
              p={4}
              color="#313677"
              rounded="lg"
              fontWeight={'bold'}
            >
              <Box as="span" flex="1" textAlign="left">
                ¿Se pueden convalidar cursos?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            En el caso del técnico de CiberSeguridad, si alguien ha aprobado
            recientemente alguno de los cursos de CISCO por su cuenta, se le
            pueden convalidar. Además, el inglés es una materia que se puede
            convalidar en todos los técnicos. Sin embargo, las demás materias no
            son convalidables.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem m={10} mb={20} borderStyle={'none'}>
          <Heading as="h3">
            <AccordionButton
              bg="#E1E7F8"
              p={4}
              color="#313677"
              rounded="lg"
              fontWeight={'bold'}
            >
              <Box as="span" flex="1" textAlign="left">
                ¿Puedo escoger qué materias matricular y en qué orden llevarlas?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            No, es un requisito completar todo el bloque.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <SectionHeading title="Inserción Laboral" />
      <Accordion mb={10} allowMultiple>
        <AccordionItem m={10} borderStyle={'none'}>
          <Heading as="h3">
            <AccordionButton
              bg="#E1E7F8"
              p={4}
              color="#313677"
              rounded="lg"
              fontWeight={'bold'}
            >
              <Box as="span" flex="1" textAlign="left">
                ¿Cuál es el promedio de inserción laboral de egresados y
                egresadas del CETAV?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            Actualmente, tenemos una tasa de inserción laboral del 90%.
            Realizamos un trabajo conjunto con las industrias para validar el
            perfil de nuestros estudiantes.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem m={10} mb={20} borderStyle={'none'}>
          <Heading as="h3">
            <AccordionButton
              bg="#E1E7F8"
              p={4}
              color="#313677"
              rounded="lg"
              fontWeight={'bold'}
            >
              <Box as="span" flex="1" textAlign="left">
                ¿En qué tipo de empresas trabajan las personas egresadas de cada
                carrera?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            Dependiendo de su especialidad.
            <UnorderedList>
              <ListItem>
                {' '}
                En el caso de Post Producción, cada vez se busca más el enfoque
                en motion graphics, lo que lleva a nuestros graduados a trabajar
                en agencias digitales, canales de televisión o productoras
                audiovisuales.
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                En el campo de la Animación, algunos de nuestros graduados
                trabajan en estudios de animación, mientras que otros se emplean
                en empresas de arquitectura, específicamente en la visualización
                arquitectónica.
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                Los graduados en Mercadeo encuentran empleo en agencias
                digitales como Accenture, Hangar, Critical Mass y Wunderman
                Thompson.
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                En el ámbito de Desarrollo Web, nuestros graduados son empleados
                por diversas empresas, tanto nacionales como internacionales,
                que buscan profesionales con habilidades sólidas de desarrollo.
                Ejemplos de estas empresas incluyen Accenture, Critical Mass,
                Avast y Magma. Estas empresas valoran el perfil de nuestros
                graduados debido a su amplio conjunto de habilidades.
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                Existe una creciente demanda en la toma de decisiones basada en
                datos, lo que ha llevado a empresas que van desde Pozuelo hasta
                corporaciones internacionales como P&G a buscar perfiles de
                analistas de datos.
              </ListItem>
            </UnorderedList>
            <UnorderedList>
              <ListItem>
                En el campo de la Ciberseguridad, la demanda está en aumento en
                Costa Rica, con un promedio de contratación de alrededor de seis
                personas al mes para empresas que ofrecen servicios de
                ciberseguridad.
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
