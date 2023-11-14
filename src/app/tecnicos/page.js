import FaqBanner from '@/app/components/FaqsBanner';
import images from '@/app/content/imageData';
import OurAllies from '@/app/components/OurAllies';
import CourseList from '@/app/components/CourseList';
import cursos from '@/app/content/cursosData';
import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function Tecnicos() {
  return (
    <>
      <PHeading
        title={headingInfo.carrerasT.title}
        titleColor={headingInfo.carrerasT.titleColor}
        text={headingInfo.web.text}
        imgSrc={headingInfo.web.imgSrc}
      />
      <CourseList cursos={cursos.tecnicos} showDescription />
      <OurAllies images={images} />
      <FaqBanner />
    </>
  );
}
