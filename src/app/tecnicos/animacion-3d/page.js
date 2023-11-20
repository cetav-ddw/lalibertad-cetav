import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import TestimonyList from '@/app/components/Testimonies/TestimonyList';
import OurTeachers from '@/app/components/OurTeachers';
import FaqBanner from '@/app/components/FaqsBanner';
import ExpectactionsBanner from '@/app/components/ExpectactionsBanner';
import GoodToKnowBanner from '@/app/components/GoodToKnowBanner';
import SoftSkillsBanner from '@/app/components/SoftSkillsBanner';
import testimonies from '@/app/content/testimonies';
import teachers from '@/app/content/teachers';
import preInscription from '@/app/content/pre-inscription';
import ExploreOtherCareers from '@/app/components/ExploreOtherCareers';
import TechniciansCharacteristics from '@/app/components/TechniciansCharacteristics';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export default function Animacion3D() {
  const currentCourseId = 'tecAnimacion3d';
  const paths = [
    { title: "Inicio", path: "/" },
    { title: "Cursos Técnicos", path: "/tecnicos" },
    { title: "Animación 3D", path: "/tecnicos/animacion-3d" },
  ];
  return (
    <>
      <Breadcrumbs paths={paths} />
      <PHeading
        title={headingInfo.animacion.title}
        titleColor={headingInfo.animacion.titleColor}
        text={headingInfo.animacion.text}
        videoSrc={headingInfo.animacion.videoSrc}
        isTecnico="true"
      />
      <TechniciansCharacteristics />
      <InscriptionBanner />
      <GoodToKnowBanner topicList={preInscription.web} />
      <ExpectactionsBanner />
      <TestimonyList testimonies={testimonies.web} />
      <SoftSkillsBanner />
      <OurTeachers teacherList={teachers.web} />
      <ExploreOtherCareers
        currentCourseId={currentCourseId}
        title={'Explora nuestras carreras'}
      />
      <FaqBanner />
    </>
  );
}
