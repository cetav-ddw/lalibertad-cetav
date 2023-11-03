import { Heading, Wrap } from '@chakra-ui/react';
import YearbookCard from './components/YearbookCards';
import FilterMenu from './components/FilterMenu';

export default function Egresados() {
  return (
    <>
      <Heading as="h1" fontSize="xx-large">
        Egresados
      </Heading>
      <FilterMenu />
      <Wrap my="110" spacing="10" justify="center">
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
    </>
  );
}
