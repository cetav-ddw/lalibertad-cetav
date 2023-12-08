import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import FaqBanner from '@/app/components/FaqsBanner';
import TestimonyList from '@/app/components/Testimonies/TestimonyList';
import OurTeachers from '@/app/components/OurTeachers';
import ExpectactionsBanner from '@/app/components/ExpectactionsBanner';
import GoodToKnowBanner from '@/app/components/GoodToKnowBanner';
import SoftSkillsBanner from '@/app/components/SoftSkillsBanner';
import testimonies from '@/app/content/testimonies';
import teachers from '@/app/content/teachers';
import preInscription from '@/app/content/pre-inscription';
import ExploreOtherCareers from '@/app/components/ExploreOtherCareers';
import TechniciansCharacteristics from '@/app/components/TechniciansCharacteristics';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export const metadata = {
  title: 'Diseño y desarrollo web | CETAV',
  description:
    'El área de Desarrollo web está dirigido al diseño de aplicaciones y sitios digitales que abarcan la interacción, funcionalidad, accesibilidad y usabilidad basadas en los estándares Web.',
  openGraph: {
    title: 'Diseño y desarrollo web',
    description:
      'En nuestro programa de Diseño y Desarrollo Web, te capacitamos en el diseño de aplicaciones y sitios digitales con un enfoque en interacción, funcionalidad, accesibilidad y usabilidad.',
  },
};

export default function WebPage() {
  const currentCourseId = 'tecWeb';
  const paths = [
    { title: 'Inicio', path: '/' },
    { title: 'Cursos Técnicos', path: '/tecnicos' },
    {
      title: 'Diseño y desarrollo web',
      path: '/tecnicos/diseno-desarrollo-web',
    },
  ];
  return (
    <>
      <Breadcrumbs paths={paths} />
      <PHeading
        title={headingInfo.web.title}
        titleColor={headingInfo.web.titleColor}
        text={headingInfo.web.text}
        videoSrc={headingInfo.web.videoSrc}
        poster={headingInfo.web.poster}
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
        items={3}
        title={'Explora nuestras carreras'}
      />
      <FaqBanner />
    </>
  );
}
