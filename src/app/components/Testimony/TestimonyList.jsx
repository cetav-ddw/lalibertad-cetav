import { Box } from '@chakra-ui/react';
import Testimony from '@/app/components/Testimony/Testimony';
import SectionHeading from '@/app/components/SectionHeading';

// TODO debe recibir una lista de testimonios
export default function TestimonyList() {
  return (
    <Box>
      <SectionHeading title="Testimonios" />
      <Box display="flex" flexWrap="wrap" justifyContent="space-around">
        <Testimony
          name="Diana Chavarría"
          position="Frontend Developer"
          avatarSrc="https://parquelalibertad.org/cetav/sites/default/files/styles/img_cita/public/david_henry_vargas_copia.png?itok=w3Lwcair"
          quote=" Además de permitirme descubrir mi carrera y desarrollarme profesionalmente, me brindaron habilidades blandas que me impulsaron a desarrollar mi emprendimiento de manera exitosa."
        />
        <Testimony
          name="David Henry Vargas"
          position="Frontend Developer"
          quote="Al tener profesores y profesoras que han trabajado por años en el medio, no solo me enseñaron la parte técnica de la carrera, me enseñaron buenos hábitos y formas de lidiar y buscar soluciones en el trabajo de una manera mucho más efectiva, ahorrando tiempo y dinero."
        />
        <Testimony
          name="Elena Solís"
          position="Frontend Developer"
          quote="El CETAV nos expuso ante nuevos escenarios al colaborar con clientes reales durante la carrera, lo cual me ayudó a explorar mis habilidades técnicas y creativas impulsándome a ser competitiva en el ámbito audiovisual."
        />
        <Testimony
          name="Irene Sanchez"
          position="Frontend Developer"
          quote="Lorem ipsum something soemthin"
        />
      </Box>
    </Box>
  );
}
