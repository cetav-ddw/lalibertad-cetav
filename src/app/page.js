import InscriptionBanner from '@/app/components/InscriptionBanner';
import LaboralFormation from '@/app/components/LaboralFormation';
import images from './content/imageData';
import CourseList from '@/app/components/CourseList';
import cursos from './content/cursosData';
import OurAllies from '@/app/components/OurAllies';
import ExploreOtherCareers from './components/ExploreOtherCareers';

export default function Home() {
  return (
    <>
      <CourseList
        cursos={cursos.tecnicos}
        title={'Nuestras Carreras Técnicas'}
      />
      <InscriptionBanner />
      <LaboralFormation />
      <OurAllies images={images} />
      <ExploreOtherCareers items={2} ishomePage={true} />
    </>
  );
}
