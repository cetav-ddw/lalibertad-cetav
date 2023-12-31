import { Wrap, Box } from '@chakra-ui/react';
import YearbookCard from '@/app/components/YearbookCards';
import FilterMenu from '@/app/components/FilterMenu';
import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';
import SectionHeading from '@/app/components/SectionHeading';
import TestimonyList from '@/app/components/Testimonies/TestimonyList';
import testimonies from '@/app/content/testimonies';
import Breadcrumbs from '@/app/components/Breadcrumbs';

export const metadata = {
  title: 'Conoce a nuestros egresad@s | CETAV',
  description:
    'Nuestra página web te permite explorar y conectarte con nuestra red de personas egresadas. Podés acceder a sus portafolios por carrera, y así encontrar rápidamente el talento adecuado para el trabajo.',
  openGraph: {
    title: 'Nuestros egresados',
    description:
      'Descubre y conecta con nuestros exitosos egresados a través de nuestra página web. Explora sus portafolios organizados por carrera para encontrar el talento perfecto que se ajuste a tus necesidades laborales o proyectos.',
  },
};

export default function Egresados() {
  const paths = [
    { title: 'Inicio', path: '/' },
    { title: 'Egresados', path: '/egresados' },
  ];
  return (
    <>
      <Breadcrumbs paths={paths} />
      <PHeading
        title={headingInfo.egresados.title}
        titleColor={headingInfo.egresados.titleColor}
        text={headingInfo.egresados.text}
        imgSrc={headingInfo.web.imgSrc}
      />
      <TestimonyList testimonies={testimonies.web} />
      <SectionHeading title="Nuestros Egresados por Técnico" />
      <FilterMenu />

      <Box mb="16">
        <SectionHeading title="Explora nuestros anuarios" />
        <Wrap spacing="10" justify="center">
          <YearbookCard
            generationImage="generation_2013.png"
            title="1er Generación"
            reelLink="https://vimeo.com/82142254"
            yearbookLink="https://issuu.com/parquelalibertad/docs/_anuario_2013-4_cetav"
          />
          <YearbookCard
            generationImage="generation_2015.png"
            title="2da Generación"
            reelLink="https://vimeo.com/149185849"
            yearbookLink="https://issuu.com/parquelalibertad/docs/anuario_2015_segunda_generacio__n"
          />
          <YearbookCard
            generationImage="generation_2017.jpg"
            title="3er Generación"
            reelLink="https://vimeo.com/247321835"
            yearbookLink="https://issuu.com/parquelalibertad/docs/anurario_2017_tercera_generacion"
          />
          <YearbookCard
            generationImage="generation_2019.jpg"
            title="4ta Generación"
            reelLink="https://vimeo.com/373945663"
            yearbookLink="https://issuu.com/parquelalibertad/docs/anuraio_cetav_2019"
          />
          <YearbookCard
            generationImage="generation_2021.jpg"
            title="5ta Generación"
            reelLink="https://vimeo.com/653480750"
            yearbookLink="https://issuu.com/parquelalibertad/docs/anuario_2021"
          />
        </Wrap>
      </Box>
    </>
  );
}
