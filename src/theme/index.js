import { extendTheme } from '@chakra-ui/react';
import typography from './foundations/typography';
import colors from './foundations/colors';

const overrides = {
  ...typography,
  colors,
};

export default extendTheme(overrides);
