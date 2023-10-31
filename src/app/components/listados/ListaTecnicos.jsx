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

export const ListaTecnicos = () => {
  return (
    <Wrap spacing="30px" justify="center">
      {Cursos.map((cursos) => {
        return (
          <WrapItem key>
            <Card maxW="sm">
              <CardBody p>
                <Image src="" borderRadius="lg" />
                <Heading position="absolute" left="3" bottom="150" size="md">
                  Living room Sofa
                </Heading>
                <Text
                  mt="5"
                  mb="5"
                  ml="auto"
                  mr="auto"
                  textAlign="justify"
                  width="90%"
                >
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
              </CardBody>
            </Card>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default ImageCard;
