import {
  Card,
  Heading,
  CardBody,
  Image,
  Wrap,
  WrapItem,
  Text,
} from '@chakra-ui/react';
import Cursos from '@/app/content/cursosData';

export const ListaTecnicos = ({ cursos }) => {
  return (
    <Wrap spacing="30px" justify="center">
      {Cursos.map(({ id }) => {
        return <WrapItem key={cursos.id}></WrapItem>;
      })}
    </Wrap>
  );
};

export default ListaTecnicos;
