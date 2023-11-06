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

export default function Faq() {
  return (
    <>
      <PHeading
        title={headingInfo.preguntas.title}
        titleColor={headingInfo.preguntas.titleColor}
      />
      <SectionHeading title="Sobre el CETAV" />
      <Accordion allowMultiple>
        <AccordionItem m={10} mb={20} borderStyle={'none'}>
          <h3>
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
          </h3>
          <AccordionPanel pb={4}>
            Cada dos años el CETAV realiza un proceso de reclutamiento, el
            próximo dará inicio a partir de setiembre del 2023.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <SectionHeading title="Financiamiento" />
      <Accordion allowMultiple>
        <AccordionItem m={10} borderStyle={'none'}>
          <h3>
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
          </h3>
          <AccordionPanel pb={4}>
            El costo mensual de la carrera técnica es de ₡100,000 en caso de
            obtener la beca Empleate, gestionada en conjunto con el CETAV, el
            50% del monto recibido es para pagar colegiatura y el 50% restante
            para transporte y alimentación.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem m={10} mb={20} borderStyle={'none'}>
          <h3>
            <AccordionButton
              bg="#E1E7F8"
              p={4}
              color="#313677"
              rounded="lg"
              fontWeight={'bold'}
            >
              <Box as="span" flex="1" textAlign="left">
                ¿Cuánto pagan los estudiantes que reciben beca de EMPLEATE?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4}>
            El 50% de la beca asignada es para pagar sus estudios en el CETAV y
            el 50% restante para cubrir alimentación y transporte.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <SectionHeading title="Sobre nuestro proceso de admisión" />
      <Accordion allowMultiple>
        <AccordionItem m={10} borderStyle={'none'}>
          <h3>
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
          </h3>
          <AccordionPanel pb={4}>
            <OrderedList>
              <ListItem>
                Comprobar si cumplís con todos los requisitos y llenar el
                formulario:
                <Link
                  color="#313677"
                  fontWeight={'bold'}
                  title="link a los requisitos"
                  href="#"
                >
                  {' '}
                  click aquí
                </Link>
              </ListItem>
              <ListItem>
                Si necesitás la beca de EMPLEATE debés llenar el siguiente
                formulario para iniciar el proceso:
                <Link
                  color="#313677"
                  fontWeight={'bold'}
                  title="link al formulario"
                  href="#"
                >
                  {' '}
                  click aquí
                </Link>
              </ListItem>
              <UnorderedList>
                <ListItem>
                  Al llenar el formulario, en el punto IV. REFERENCIAS : ¿Ha
                  sido referido por una institución o actividad específica? debe
                  elegir SÍ
                </ListItem>
                <ListItem>
                  En “Indique el nombre de la institución”, especificar: CETAV
                  Parque La Libertad.
                </ListItem>
              </UnorderedList>
              <ListItem>
                Nosotros nos estaremos comunicando con vos para convocarte a las
                pruebas de admisión.
              </ListItem>
            </OrderedList>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem m={10} borderStyle={'none'}>
          <h3>
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
          </h3>
          <AccordionPanel pb={4}>
            <UnorderedList>
              <ListItem>Tener entre 17 y 27 años.</ListItem>
              <ListItem>Bachillerato aprobado.</ListItem>
              <ListItem>
                Conocimiento comprobable en Adobe Photoshop y Adobe Ilustrador
                básico o programas de edición de imagen similares. Si no los
                tienen, pueden llamar al Centro de Cómputo del Parque La
                Libertad al 2276-9400 ext 2092, donde estos cursos se imparten
                de manera regular.
              </ListItem>
              <ListItem>
                En caso de extranjeros, tener su estatus migratorio al día.
              </ListItem>
              <ListItem>Interés en aprender inglés.</ListItem>
              <ListItem>Disponibilidad de tiempo completo.</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem m={10} borderStyle={'none'}>
          <h3>
            <AccordionButton
              bg="#E1E7F8"
              p={4}
              color="#313677"
              rounded="lg"
              fontWeight={'bold'}
            >
              <Box as="span" flex="1" textAlign="left">
                ¿Cuál es la edad límite para poder entrar al CETAV?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4}>Entre 17 y 27 años.</AccordionPanel>
        </AccordionItem>
        <AccordionItem m={10} mb={20} borderStyle={'none'}>
          <h3>
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
          </h3>
          <AccordionPanel pb={4}>
            No, es requisito llevar el bloque completo.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <SectionHeading title="Inserción Laboral" />
      <Accordion mb={10} allowMultiple>
        <AccordionItem m={10} borderStyle={'none'}>
          <h3>
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
          </h3>
          <AccordionPanel pb={4}>
            El promedio oscila entre 80% y 90% de inserción laboral.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem m={10} mb={20} borderStyle={'none'}>
          <h3>
            <AccordionButton
              bg="#E1E7F8"
              p={4}
              color="#313677"
              rounded="lg"
              fontWeight={'bold'}
            >
              <Box as="span" flex="1" textAlign="left">
                ¿En qué empresas trabajan los egresados de cada carrera?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4}>
            Dependiendo del área de especialidad. Entre las principales destacan
            canales de televisión como Repretel y Televisora de Costa Rica,
            agencias digitales como Accenture, The Hangar, estudios de diseño y
            arquitectura, agencias de publicidad, estudios de animación, entre
            otras.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
