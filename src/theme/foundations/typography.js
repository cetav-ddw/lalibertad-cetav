import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

const typography = {
  fonts: {
    body: montserrat.style.fontFamily,
    heading: montserrat.style.fontFamily,
  },
};

export default typography;
