import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function CursosLibres() {
  return (
    <PHeading
    title={headingInfo.cursosL.title}
    titleColor={headingInfo.cursosL.titleColor}
    text={headingInfo.web.text}
    imgSrc={headingInfo.web.imgSrc}
  />
  );
}
