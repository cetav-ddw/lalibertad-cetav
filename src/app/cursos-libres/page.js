import CourseList from '@/app/components/CourseList';
import cursos from '@/app/content/cursosData';
import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export default function CursosLibres() {
  const paths = [
    { title: "Inicio", path: "/" },
    { title: "Cursos Libres", path: "/cursos-libres" }
  ];
  return (
    <>
    <Breadcrumbs paths={paths} />
      <PHeading
        title={headingInfo.cursosL.title}
        titleColor={headingInfo.cursosL.titleColor}
        text={headingInfo.cursosL.text}
        imgSrc={headingInfo.cursosL.imgSrc}
      />
      <CourseList
        cursos={cursos.cursosLibresDiseno}
        showDescription
        title={'Cursos de Diseño'}
      />
      <CourseList
        cursos={cursos.cursosLibresComputo}
        showDescription
        title={'Cursos de Computo'}
      />
    </>
  );
}
