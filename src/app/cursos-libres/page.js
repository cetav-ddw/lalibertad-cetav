import CourseList from '@/app/components/CourseList';
import cursos from '@/app/content/cursosData';
import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function CursosLibres() {
  return (
    <>
      <PHeading
        title={headingInfo.cursosL.title}
        titleColor={headingInfo.cursosL.titleColor}
        text={headingInfo.web.text}
        imgSrc={headingInfo.web.imgSrc}
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
