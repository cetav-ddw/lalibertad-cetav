import { Card, Stack, CardBody, Heading, Text, Image, CardFooter, Button } from '@chakra-ui/react'

const RegisterBanner = () =>{
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



export default RegisterBanner;