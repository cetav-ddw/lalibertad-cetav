import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function Egresados() {
  return (
    <PHeading
    title={headingInfo.egresados.title}
    titleColor={headingInfo.egresados.titleColor}
    text={headingInfo.web.text}
    imgSrc={headingInfo.web.imgSrc}
  />
  );
}
