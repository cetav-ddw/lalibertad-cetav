import { Heading, Wrap } from '@chakra-ui/react';
import YearbookCard from './components/YearbookCards';

export default function Egresados() {
  return (
    <>
      <Heading as="h1">EGRESADOS PAGE</Heading>

      <Wrap my='110' spacing="10" justify='center'>
        <YearbookCard
          generationImage="generation_2013.png"
          title="1er Generación"
          reelLink="#"
          cardLink="#"
        />
        <YearbookCard
          generationImage="generation_2015.png"
          title="2da Generación"
          reelLink="#"
          cardLink="#"
        />
        <YearbookCard
          generationImage="generation_2017.jpg"
          title="3er Generación"
          reelLink="#"
          cardLink="#"
        /> 
        <YearbookCard
          generationImage="generation_2019.jpg"
          title="4ta Generación"
          reelLink="#"
          cardLink="#"
        />
        <YearbookCard
          generationImage="generation_2021.jpg"
          title="5ta Generación"
          reelLink="#"
          cardLink="#"
        />
      </Wrap>
    </>
  );
}
