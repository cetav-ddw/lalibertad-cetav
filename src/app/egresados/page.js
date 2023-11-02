
import {
  Heading,
} from '@chakra-ui/react';
import FilterMenu from './components/FilterMenu'

export default function Egresados() {
  return (

    <>
      <Heading as="h1" fontSize="xx-large">
        Egresados
      </Heading>
      <FilterMenu/>
    </>

  );
}
