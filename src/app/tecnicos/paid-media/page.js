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
