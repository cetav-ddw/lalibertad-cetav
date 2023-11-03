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
import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function AnalisisDatosPage() {
  return (
    <>
       <PHeading
        title={headingInfo.anaDatos.title}
        titleColor={headingInfo.anaDatos.titleColor}
        text={headingInfo.web.text}
        imgSrc={headingInfo.web.imgSrc}
      />
      <InscriptionBanner />
      <GoodToKnowBanner topicList={preInscription.web} />
      <ExpectactionsBanner />
      <TestimonyList testimonies={testimonies.web} />
      <SoftSkillsBanner />
      <OurTeachers teacherList={teachers.web} />
      <FaqBanner />
    </>
  );
}
