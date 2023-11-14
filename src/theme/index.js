import { extendTheme } from '@chakra-ui/react';
import typography from '@/theme/foundations/typography';
import colors from '@/theme/foundations/colors';

const overrides = {
  ...typography,
  colors,
};

export default extendTheme(overrides);
