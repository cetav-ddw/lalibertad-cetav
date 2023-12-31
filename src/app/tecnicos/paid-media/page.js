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
  title: 'Paid media | CETAV',
  description:
    'Las personas participantes de este programa adquieren las competencias para trabajar en la pauta de medios digitales, campañas, creación de contenidos y estrategias de comunicación que se utilizan en redes sociales para la venta de productos.',
  openGraph: {
    title: 'Paid media',
    description:
      'Este programa de Paid Media está diseñado para equipar a los participantes con habilidades esenciales en publicidad digital, desde la planificación de campañas hasta la creación de contenidos y estrategias de comunicación efectivas en redes sociales, enfocándose en impulsar la venta de productos en el ámbito digital.',
  },
};

export default function PaidMedia() {
  const currentCourseId = 'tecPaidMedia';
  const paths = [
    { title: 'Inicio', path: '/' },
    { title: 'Cursos Técnicos', path: '/tecnicos' },
    { title: 'Paid Media', path: '/tecnicos/paid-media' },
  ];
  return (
    <>
      <Breadcrumbs paths={paths} />
      <PHeading
        title={headingInfo.paid.title}
        titleColor={headingInfo.paid.titleColor}
        text={headingInfo.paid.text}
        videoSrc={headingInfo.paid.videoSrc}
        poster={headingInfo.paid.poster}
      />
      <TechniciansCharacteristics />
      <InscriptionBanner />
      <GoodToKnowBanner topicList={preInscription.paid} />
      <ExpectactionsBanner />
      <TestimonyList testimonies={testimonies.paid} />
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
