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
  openGraph: {
    title: 'Motion graphics',
    description:
      'Participa en nuestro programa intensivo de Motion Graphics, donde aprenderás a crear animaciones y composiciones cautivadoras a partir de ilustraciones. Este curso se centra en generar contenidos animados en 2D para aplicaciones publicitarias, educativas y de entretenimiento.',
  },
};

export default function MotionGraphicPage() {
  const currentCourseId = 'tecMotionGraphics';
  const paths = [
    { title: 'Inicio', path: '/' },
    { title: 'Cursos Técnicos', path: '/tecnicos' },
    { title: 'Motion Graphics', path: '/tecnicos/motion-graphics' },
  ];
  return (
    <>
      <Breadcrumbs paths={paths} />
      <PHeading
        title={headingInfo.motion.title}
        titleColor={headingInfo.motion.titleColor}
        text={headingInfo.motion.text}
        videoSrc={headingInfo.motion.videoSrc}
        poster={headingInfo.motion.poster}
      />
      <TechniciansCharacteristics />
      <InscriptionBanner />
      <GoodToKnowBanner topicList={preInscription.motion} />
      <ExpectactionsBanner />
      <TestimonyList testimonies={testimonies.motion} />
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
