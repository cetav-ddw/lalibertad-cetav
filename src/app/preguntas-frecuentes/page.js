'use client'
import { Heading } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react';
import SectionHeading from '../components/SectionHeading';


export default function Faq() {
  return (
    <>
      <Heading as="h1">Preguntas frecuentes</Heading>
      <SectionHeading title="Sobre el CETAV" />
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                ¿Cada cuánto tiempo se abre el proceso de admisión?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          Cada dos años el CETAV realiza un proceso de reclutamiento, 
          el próximo dará inicio a partir de setiembre del 2023.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <SectionHeading title="Financiamiento" />
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                ¿Cuál es el costo mensual de las carreras técnicas del CETAV?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          El costo mensual de la carrera técnica es de ₡100,000 en caso de obtener la beca Empleate, gestionada en conjunto con el CETAV, 
          el 50% del monto recibido es para pagar colegiatura y el 50% restante para transporte y alimentación.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
              ¿Cuánto pagan los estudiantes que reciben beca de EMPLEATE?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          El 50% de la beca asignada es para pagar sus estudios en el CETAV y
          el 50% restante para cubrir alimentación y transporte.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <SectionHeading title="Sobre nuestro proceso de admisión" />
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
              ¿Cuál es el proceso para entrar al CETAV?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
              ¿Cuáles son los requisitos para entrar al CETAV?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
              ¿Cuál es la edad límite para poder entrar al CETAV?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
              ¿Puedo escoger qué materias matricular y en qué orden llevarlas?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <SectionHeading title="Inserción Laboral" />
      <Accordion mb={10} defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
              ¿Cuál es el promedio de inserción laboral de egresados y egresadas del CETAV?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          El promedio oscila entre 80% y 90% de inserción laboral.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
              ¿En qué empresas trabajan los egresados de cada carrera?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          Dependiendo del área de especialidad. Entre las principales destacan canales de televisión como Repretel y Televisora de Costa Rica, 
          agencias digitales como Accenture, The Hangar, estudios de diseño y arquitectura, agencias de publicidad, estudios de animación, entre otras.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

    </>)
}



