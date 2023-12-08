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
  title: 'Ciberseguridad | CETAV',
  description:
    'El área de la cyberseguridad se dedica al diseño y construcción de aplicaciones y sitios web, abarcando aspectos como la interacción, funcionalidad, accesibilidad y usabilidad, todos basados en estándares web reconocidos.',
  openGraph: {
    title: 'Ciberseguridad',
    description:
      'Nuestro programa de Ciberseguridad te prepara para crear aplicaciones y sitios web seguros, enfocándote en funcionalidad y cumplimiento de estándares web, para una carrera en la protección y seguridad digital.',
  },
};

export default function CiberseguridadPage() {
  const currentCourseId = 'tecCiberseguridad';
  const paths = [
    { title: 'Inicio', path: '/' },
    { title: 'Cursos Técnicos', path: '/tecnicos' },
    {
      title: 'Análisis y vizualización de datos',
      path: '/tecnicos/analisis-visualizacion-de-datos',
    },
  ];
  return (
    <>
      <Breadcrumbs paths={paths} />
      <PHeading
        title={headingInfo.ciber.title}
        text={headingInfo.ciber.text}
        videoSrc={headingInfo.ciber.videoSrc}
        poster={headingInfo.ciber.poster}
      />
      <TechniciansCharacteristics />
      <InscriptionBanner />
      <GoodToKnowBanner topicList={preInscription.ciber} />
      <ExpectactionsBanner />
      <TestimonyList testimonies={testimonies.ciber} />
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
