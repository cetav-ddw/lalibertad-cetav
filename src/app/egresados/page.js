import { Heading, Wrap } from '@chakra-ui/react';
import YearbookCard from './components/YearbookCards';

export default function Egresados() {
  return (
    <>
      <Heading as="h1">EGRESADOS PAGE</Heading>

      <Wrap my='110' spacing="10" justify='center'>
        <YearbookCard
          imageUrl="https://res.cloudinary.com/adriandeveloper/image/upload/v1698815399/CETAV-PAGE/wskwstnvr9cagrfvafdo.png"
          imageAlt="1er Generación imagen"
          title="1er Generación"
          reelLink="#"
          Yearbook="#"
        />
        <YearbookCard
          imageUrl="https://res.cloudinary.com/adriandeveloper/image/upload/v1698815399/CETAV-PAGE/wskwstnvr9cagrfvafdo.png"
          imageAlt="2da Generación imagen"
          title="2da Generación"
          reelLink="#"
          Yearbook="#"
        />
        <YearbookCard
          imageUrl="https://res.cloudinary.com/adriandeveloper/image/upload/v1698815399/CETAV-PAGE/wskwstnvr9cagrfvafdo.png"
          imageAlt="3er Generación imagen"
          title="3er Generación"
          reelLink="#"
          Yearbook="#"
        /> 
        <YearbookCard
          imageUrl="https://res.cloudinary.com/adriandeveloper/image/upload/v1698815399/CETAV-PAGE/wskwstnvr9cagrfvafdo.png"
          imageAlt="4ta Generación imagen"
          title="4ta Generación"
          reelLink="#"
          Yearbook="#"
        />
        <YearbookCard
          imageUrl="https://res.cloudinary.com/adriandeveloper/image/upload/v1698815399/CETAV-PAGE/wskwstnvr9cagrfvafdo.png"
          imageAlt="5ta Generación imagen"
          title="5ta Generación"
          reelLink="#"
          Yearbook="#"
        />
        <YearbookCard
          imageUrl="https://res.cloudinary.com/adriandeveloper/image/upload/v1698815399/CETAV-PAGE/wskwstnvr9cagrfvafdo.png"
          imageAlt="6ta Generación imagen"
          title="6ta Generación"
          reelLink="#"
          Yearbook="#"
        />
      </Wrap>
    </>
  );
}
