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
  title: 'Postproducción audiovisual | CETAV',
  description:
    'En la postproducción se incluyen todos los procesos que van desde la recepción del material, la edición de imagen y sonido, los efectos especiales como eliminación de fondo verde, la colorización, el subtitulado, animaciones 2d y hasta la entrega de un producto final.',
  openGraph: {
    title: 'Postproducción audiovisual',
    description:
      'Ofrecemos un completo programa de postproducción audiovisual, donde los estudiantes aprenden a editar, colorear y animar con las últimas tecnologías y técnicas, preparándolos para carreras exitosas en la industria.',
  },
};

export default function PostProducionPage() {
  const currentCourseId = 'tecPostProduccion';
  const paths = [
    { title: 'Inicio', path: '/' },
    { title: 'Cursos Técnicos', path: '/tecnicos' },
    {
      title: 'Postproducción audiovisual',
      path: '/tecnicos/post-produccion-audiovisual',
    },
  ];
  return (
    <>
      <Breadcrumbs paths={paths} />
      <PHeading
        title={headingInfo.post.title}
        titleColor={headingInfo.post.titleColor}
        text={headingInfo.post.text}
        videoSrc={headingInfo.post.videoSrc}
        poster={headingInfo.post.poster}
      />
      <TechniciansCharacteristics />
      <InscriptionBanner />
      <GoodToKnowBanner topicList={preInscription.post} />
      <ExpectactionsBanner />
      <TestimonyList testimonies={testimonies.post} />
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
