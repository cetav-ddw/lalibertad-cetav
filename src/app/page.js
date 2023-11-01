import InscriptionBanner from '@/app/components/InscriptionBanner';
import LaboralFormation from '@/app/components/LaboralFormation';
import CourseList from '@/app/components/CourseList';
import cursos from './content/cursosData';

export default function Home() {
  return (
    <>
      <CourseList cursos={cursos.tecnicos} />
      <InscriptionBanner />
      <LaboralFormation />
    </>
  );
}
