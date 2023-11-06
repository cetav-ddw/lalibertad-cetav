import ContactDetail from '../components/contactDetail';
import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function Contacto() {
  return (
    <>
      <PHeading
        title={headingInfo.contacto.title}
        titleColor={headingInfo.contacto.titleColor}
      />
      <ContactDetail />
    </>
  );
}
