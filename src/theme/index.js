import { extendTheme } from '@chakra-ui/react';
import typography from './foundations/typography';

const overrides = {
  ...typography,
};

export default extendTheme(overrides);
