import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function AboutCetav() {
  return (
    <PHeading
    title={headingInfo.acercaN.title}
    titleColor={headingInfo.acercaN.titleColor}
    imgSrc={headingInfo.web.imgSrc}
  />
  );
}
