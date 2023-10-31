import {
  Card,
  Heading,
  CardBody,
  Image,
  Wrap,
  WrapItem,
  Text,
} from '@chakra-ui/react';
import Cursos from '@/app/conf/data';

export const ListaTecnicos = ({ cursos }) => {
  return (
    <Wrap spacing="30px" justify="center">
      {Cursos.map(({ id }) => {
        return (
          <WrapItem key={cursos.id}>
            <Card maxW="sm">
              <CardBody p>
                <Image src="{cursos.imgSrc}" alt="" borderRadius="lg" />
                <Heading position="absolute" left="3" bottom="150" size="md">
                  {cursos.title}
                </Heading>
                <Text
                  mt="5"
                  mb="5"
                  ml="auto"
                  mr="auto"
                  textAlign="justify"
                  width="90%"
                >
                  {cursos.descripcion}
                </Text>
              </CardBody>
            </Card>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default ListaTecnicos;
