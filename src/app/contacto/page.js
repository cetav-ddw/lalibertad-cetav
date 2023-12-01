import ContactDetail from '@/app/components/ContactDetail';
import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export default function Contacto() {
  const paths = [
    { title: 'Inicio', path: '/' },
    { title: 'Contacto', path: '/contacto' },
  ];
  return (
    <>
      <Breadcrumbs paths={paths} />
      <PHeading
        title={headingInfo.contacto.title}
        titleColor={headingInfo.contacto.titleColor}
        imgSrc={headingInfo.contacto.imgSrc}
      />
      <ContactDetail />
    </>
  );
}
