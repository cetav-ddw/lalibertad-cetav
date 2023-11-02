import { Heading } from '@chakra-ui/react';
import FaqBanner from '@/app/components/FaqsBanner';
import images from '../content/imageData';
import OurAllies from '@/app/components/OurAllies';
import CourseList from '@/app/components/CourseList';
import cursos from '../content/cursosData';

export default function Tecnicos() {
  return (
    <>
      <Heading as="h1">Técnicos</Heading>
      <CourseList cursos={cursos.tecnicos} showDescription />
      <OurAllies images={images} />
      <FaqBanner />
    </>
  );
}
