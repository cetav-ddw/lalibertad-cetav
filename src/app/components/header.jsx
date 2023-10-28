import { Box } from '@chakra-ui/react';
import Navigation from './navigation';

const Header = () =>{
  return(
    <Box wMax='1180' h='250' bg='gray'>
      <Navigation />
    </Box>
  )
}

export default Header;