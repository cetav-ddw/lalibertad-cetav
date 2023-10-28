import { Card, Heading, CardBody, Image } from '@chakra-ui/react';

export const ImageCard = (props) => {
  return (
    <Card maxW="260">
      <CardBody p="">
        <Image
          height="220"
          width="100%"
          src={props.src}
          alt={props.cont}
          borderRadius="lg"
        />
        <Heading size="md" pos="absolute" bottom="4" left="3" color="white">
          {props.text}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default ImageCard;
