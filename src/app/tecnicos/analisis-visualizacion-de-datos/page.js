import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';
import TestimonyList from '@/app/components/Testimonies/TestimonyList';
import InscriptionBanner from '@/app/components/InscriptionBanner';
import FaqBanner from '@/app/components/FaqsBanner';
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
  title: 'Análisis y vizualización de datos | CETAV ',
  description:
    'Las personas participantes de este programa desarrollan las competencias necesarias para el manejo y administración de bases de datos, así como la creación de visualizaciones interactivas, aplicadas en las estrategias de la empresa para extraer el conocimiento y comunicarlo de forma que permita mejorar el proceso de toma de decisiones.',
  openGraph: {
    title: 'Análisis y visualización de datos',
    description:
      'En nuestro programa de Análisis y Visualización de Datos, formamos expertos en el manejo y administración de bases de datos, y en la creación de visualizaciones interactivas, para potenciar la toma de decisiones empresariales basada en datos.',
  },
};

export default function AnalisisDatosPage() {
  const currentCourseId = 'tecAnalisisDatos';
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
        title={headingInfo.anaDatos.title}
        titleColor={headingInfo.anaDatos.titleColor}
        text={headingInfo.anaDatos.text}
        videoSrc={headingInfo.anaDatos.videoSrc}
        poster={headingInfo.anaDatos.poster}
      />
      <TechniciansCharacteristics />
      <InscriptionBanner />
      <GoodToKnowBanner topicList={preInscription.anaDatos} />
      <ExpectactionsBanner />
      <TestimonyList testimonies={testimonies.anaDatos} />
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
