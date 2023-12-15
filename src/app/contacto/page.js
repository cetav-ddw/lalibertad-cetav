import ContactDetail from '@/app/components/ContactDetail';
import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export const metadata = {
  title: 'Nuestra informaciónde contacto | CETAV',
  description:
    '¿Necesitas más información o tienes alguna consulta? Visita nuestra sección de Contacto para conocer todas las formas en que puedes comunicarte con nosotros.',
  openGraph: {
    title: 'Nuestra informacion de contacto',
    description:
      '¿Necesitas más información o tienes alguna consulta? Visita nuestra sección de Contacto para conocer todas las formas en que puedes comunicarte con nosotros. ',
  },
};

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
