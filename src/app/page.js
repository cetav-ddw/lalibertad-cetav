import { Text, Code, Stack, Button } from '@chakra-ui/react';
import BoxOrange from './components/box'

const Main = (props) => (
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="48rem"
    pt="8rem"
    px="1rem"
    {...props}
  />
);

export default function Home() {
  return (
    <main>
      <BoxOrange />
      <Main>
        <Stack spacing={4} direction="row" align="center">
          <Text>
            Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code>{' '}
            + <Code>TypeScript</Code>.
          </Text>
          <Button colorScheme="teal" size="xs">
            Button
          </Button>
          <Button colorScheme="teal" size="sm">
            Button
          </Button>
          <Button colorScheme="teal" size="md">
            Button
          </Button>
          <Button colorScheme="teal" size="lg">
            Button
          </Button>
        </Stack>
      </Main>
    </main>
  );
}