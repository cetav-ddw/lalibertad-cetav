import { Card, Stack, CardBody, Heading, Text, Image, CardFooter, Button } from '@chakra-ui/react'

const CardOne = () => {
  return(
    <Card maxW='sm'>
    <CardBody w='100%' p='0' border='solid black'>
      <Image
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
        
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md' pos='relative' bottom='3' >Living room Sofa</Heading>
        <Text>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces, earthy toned spaces and for people who love a chic design with a
          sprinkle of vintage design.
        </Text>
      </Stack>
    </CardBody>
</Card>
  )
}

const CardSecond = () =>{
  return(
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  bg='blue'
  w='60%'
>  

  <Stack p='0'>
    <CardBody>
      <Heading size='md' fontWeight='700' color='white'>The perfect latte</Heading>

      <Text mt='6' color='white'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
    <Button colorScheme='teal' variant='link' fontSize='26' color='white'>
      Button
    </Button>
    </CardFooter>
  </Stack>
  
  <Image
    objectFit='cover'
    maxW={{ base: '100%', md: '300px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />
  </Card>
  )
}

const CardThird = () =>{
  return(
    <Card maxW='sm' border='solid black'>
    <CardBody w='100%' p='0'>
      <Image
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='0'>
        <Heading size='md' pos='relative' bottom='50'>Living room Sofa</Heading>
        <Text pos='relative' bottom='7'>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces, earthy toned spaces and for people who love a chic design with a
          sprinkle of vintage design.
        </Text>
      </Stack>
    </CardBody>
</Card>
  )
}

export { CardOne, CardSecond, CardThird };