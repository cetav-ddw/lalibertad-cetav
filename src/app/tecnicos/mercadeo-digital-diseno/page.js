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
  title: 'Mercadeo digital | CETAV',
  description:
    'Consiste en desarrollar contenidos visuales y manejo de redes que responden a las características técnicas y patrones socioculturales para la comunicación de un mensaje específico y la interacción con los usuarios de diversas plataformas digitales, desde los tres ejes principales que abarca el técnico: principios del mercadeo digital, diseño gráfico e imagen/ fotografía y que, en conjunto, crean un profesional integral e interdisciplinario.',
  openGraph: {
    title: 'Mercadeo digital',
    description:
      'Descubre el arte del Mercadeo Digital en nuestro programa integral, donde aprenderás a desarrollar contenidos visuales y a manejar redes sociales, enfocándote en técnicas y patrones socioculturales para comunicar mensajes específicos y interactuar eficazmente en diversas plataformas digitales.',
  },
};

export default function MercadeoPage() {
  const currentCourseId = 'tecMarketing';
  const paths = [
    { title: 'Inicio', path: '/' },
    { title: 'Cursos Técnicos', path: '/tecnicos' },
    { title: 'Mercadeo Digital', path: '/tecnicos/mercadeo-digital-diseno' },
  ];
  return (
    <>
      <Breadcrumbs paths={paths} />
      <PHeading
        title={headingInfo.mercadeo.title}
        titleColor={headingInfo.mercadeo.titleColor}
        text={headingInfo.mercadeo.text}
        videoSrc={headingInfo.mercadeo.videoSrc}
        poster={headingInfo.mercadeo.poster}
      />
      <TechniciansCharacteristics />
      <InscriptionBanner />
      <GoodToKnowBanner topicList={preInscription.mercadeo} />
      <ExpectactionsBanner />
      <TestimonyList testimonies={testimonies.mercadeo} />
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
