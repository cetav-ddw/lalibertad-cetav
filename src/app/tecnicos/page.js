import FaqBanner from '@/app/components/FaqsBanner';
import images from '@/app/content/imageData';
import OurAllies from '@/app/components/OurAllies';
import CourseList from '@/app/components/CourseList';
import cursos from '@/app/content/cursosData';
import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export const metadata = {
  title: 'Nuestras carreras técnicas | CETAV',
  description: '',
  openGraph: {
    title: 'Nuestras carreras técnicas',
    description:
      'Los programas técnicos de formación laboral se actualizan en cada generación, siguiendo el Marco Nacional de Cualificaciones y supervisados por el INA y el sector empresarial para satisfacer las necesidades del mercado. Además, el CETAV promueve un modelo educativo integral que integra programación, currículo y formación, fomentando un entorno dinámico de enseñanza-aprendizaje centrado en el estudiante como protagonista de su desarrollo.',
  },
};

export default function Tecnicos() {
  const paths = [
    { title: 'Inicio', path: '/' },
    { title: 'Cursos Técnicos', path: '/tecnicos' },
  ];

  return (
    <>
      <Breadcrumbs paths={paths} />
      <PHeading
        title={headingInfo.carrerasT.title}
        titleColor={headingInfo.carrerasT.titleColor}
        text={headingInfo.carrerasT.text}
        imgSrc={headingInfo.carrerasT.imgSrc}
      />
      <CourseList cursos={cursos.tecnicos} showDescription />
      <OurAllies images={images} />
      <FaqBanner />
    </>
  );
}
