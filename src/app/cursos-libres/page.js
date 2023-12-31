import { Box, Text } from '@chakra-ui/react';
import CourseList from '@/app/components/CourseList';
import cursos from '@/app/content/cursosData';
import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import SectionHeading from '@/app/components/SectionHeading';

export const metadata = {
  title: 'Nuestros cursos libres | CETAV',
  description:
    'Los Cursos Libres de Diseño elevan tus habilidades en herramientas clave para la industria, mejorando tu perfil profesional y conectando mejor con tu audiencia. Centros de Cómputo ofrece certificaciones en habilidades digitales y ofimáticas, adaptándose a tus horarios, para destacar en el mercado laboral.',
  openGraph: {
    title: 'Cursos libres',
    description:
      'Los Cursos Libres de Diseño y Certificaciones de Centros de Cómputo están diseñados para mejorar tus habilidades en herramientas clave de la industria y ofimáticas. Personaliza tu aprendizaje según tu horario y eleva tu perfil profesional para destacar en el mercado laboral y conectar efectivamente con tu audiencia.',
  },
};

export default function CursosLibres() {
  const paths = [
    { title: 'Inicio', path: '/' },
    { title: 'Cursos Libres', path: '/cursos-libres' },
  ];

  return (
    <>
      <Breadcrumbs paths={paths} />
      <PHeading
        title={headingInfo.cursosL.title}
        titleColor={headingInfo.cursosL.titleColor}
        text={headingInfo.cursosL.text}
        imgSrc={headingInfo.cursosL.imgSrc}
      />
      <Box mb="16" p={{ base: 4, md: 6 }}>
        <SectionHeading title="Cursos Libres de Diseño" />
        <Text maxWidth="1000px" mb="8" fontSize={{ base: 'md', md: 'lg' }}>
          Los Cursos Libres de Diseño son la mejor opción para que tus proyectos
          suban de nivel. Con nosotros aprenderás el manejo de las principales
          herramientas que se usan en la industria gráfica, audiovisual y en
          mercadeo digital, podrás ampliar o actualizar tus conocimientos para
          que tu perfil profesional se vuelva más atractivo y además, fortalecer
          tus competencias para que tu contenido logre conectar con tu público
          meta. Tenemos opciones presenciales y virtuales con gran variedad de
          horarios para ajustarnos a tus necesidades.
        </Text>
        <CourseList cursos={cursos.cursosLibresDiseno} showDescription />
      </Box>
      <Box mb="16" p={{ base: 4, md: 6 }} id="cursosComputo">
        <SectionHeading title="Cursos de Computo" />
        <Text maxWidth="1000px" mb="8" fontSize={{ base: 'md', md: 'lg' }}>
          Centros de Cómputo te ofrece cursos certificados de Alfabetización
          Digital, word, excel principiante, intermedio y avanzado, así como
          power BI, multimedia e introducción a la ciberseguridad para que tus
          competencias profesionales sean óptimas en el mercado laboral. Tenemos
          gran variedad de horarios para personas de 15 años en adelante y te
          ofrecemos los cursos en modalidad presencial y virtual, así podés
          elegir la opción que mejor te conviene.
        </Text>
        <CourseList cursos={cursos.cursosLibresComputo} showDescription />
      </Box>
    </>
  );
}
