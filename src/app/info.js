import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function CursosLibres() {
  return (
    <PHeading
    title={headingInfo.cursosL.title}
    titleColor={headingInfo.cursosL.titleColor}
    text={headingInfo.web.text}
    imgSrc={headingInfo.web.imgSrc}
  />
  );
}

import { Box, Heading, Text, Flex } from '@chakra-ui/react';

const PHeading = ({ title, titleColor, text, imgSrc }) => {
  return (
    <Box my='150px'>
      <Flex flex={1} alignItems="center" maxW="1180px" ml="auto" mr="auto">
        <Box w='700px' mr='150px'>
        <Heading as="h2" fontSize="4xl" fontWeight="bold" w='350px' mb='15px'>
          <Text>
            {title}
          </Text>
          <Text color="#427fdf">
            {titleColor}
          </Text>
        </Heading>

          <Text fontSize="lg" color="#444444" >
            {text}
          </Text>
        </Box>
        <Box
          backgroundImage={imgSrc}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          width="650px"
          height="300px"
        />
      </Flex>
    </Box>
  );
};

export default PHeading;

import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function AboutCetav() {
  return (
    <PHeading
    title={headingInfo.acercaN.title}
    titleColor={headingInfo.acercaN.titleColor}
    imgSrc={headingInfo.web.imgSrc}
  />
  );
}

import { Box, Heading, Text } from '@chakra-ui/react';


export default function Contacto() {
  return (
    <>
      <Box textAlign="center" padding="50">
        <Heading as="h1" fontSize="xx-large">
          Nuestra Información
          {/* TODO MOVER COLOR AL THEME */}
          <Text color="blue.500" as="span" display="block">
            de Contacto
          </Text>
        </Heading>
      </Box>

      const headingInfo = {
  web: {
    title: 'Diseño &',
    titleColor:'Desarrollo Web',
    text: 'El área de Desarrollo web se dedica al diseño y construcción de aplicaciones y sitios web, abarcando aspectos como la interacción, funcionalidad, accesibilidad y usabilidad, todos basados en estándares web reconocidos.',
    imgSrc: '/images/web.jpg',
  },
  mercadeo:{
  title:'Mercadeo',
  titleColor:'Digital'
  },
  post:{
    title: "Postproducción",
    titleColor:'Audiovisual'
  },
  animacion:{
    title:'Animación',
    titleColor:'3D'
  },
  ciber:{
    title:'Ciberseguridad',
  },
  anaDatos:{
    title:'Análisis y Vizualización',
    titleColor:'de Datos'
  },
  motion:{
    title:'Motion',
    titleColor:'Graphics',
  },
  paid:{
    title:'Paid',
    titleColor:'Media'
  },
  cursosL:{
    title:'Nuestros',
    titleColor:'Cursos Libres',
  },
  carrerasT:{
    title:'Nuestras',
    titleColor:'Carreras Técnicas',
  },
  acercaN:{
    title:'Más Acerca de',
    titleColor:'Nosotros',
  },
  egresados:{
    title:'Conoce a nuestros',
    titleColor:'egresad@s',
  },
  preguntas:{
    title:'Preguntas',
    titleColor:'Frecuentes',
  },
  contacto:{
    title:'Nuestra Información',
    titleColor:'de Contacto',
  }
};

export default headingInfo;

import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function CursosLibres() {
  return (
    <PHeading
    title={headingInfo.cursosL.title}
    titleColor={headingInfo.cursosL.titleColor}
    text={headingInfo.web.text}
    imgSrc={headingInfo.web.imgSrc}
  />
  );
}

import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function Egresados() {
  return (
    <PHeading
    title={headingInfo.egresados.title}
    titleColor={headingInfo.egresados.titleColor}
    text={headingInfo.web.text}
    imgSrc={headingInfo.web.imgSrc}
  />
  );
}

import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function Egresados() {
  return (
    <PHeading
    title={headingInfo.egresados.title}
    titleColor={headingInfo.egresados.titleColor}
    text={headingInfo.web.text}
    imgSrc={headingInfo.web.imgSrc}
  />
  );
}

import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function Faq() {
  return (
    <>
       <PHeading
        title={headingInfo.preguntas.title}
        titleColor={headingInfo.preguntas.titleColor}
        text={headingInfo.web.text}
        imgSrc={headingInfo.web.imgSrc}
      />

import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function Tecnicos() {
  return (
    <>
          <PHeading
        title={headingInfo.carrerasT.title}
        titleColor={headingInfo.carrerasT.titleColor}
        text={headingInfo.web.text}
        imgSrc={headingInfo.web.imgSrc}
      />

import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function Tecnicos() {
  return (
    <>
          <PHeading
        title={headingInfo.carrerasT.title}
        titleColor={headingInfo.carrerasT.titleColor}
        text={headingInfo.web.text}
        imgSrc={headingInfo.web.imgSrc}
      />

import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function AnalisisDatosPage() {
  return (
    <>
       <PHeading
        title={headingInfo.anaDatos.title}
        titleColor={headingInfo.anaDatos.titleColor}
        text={headingInfo.web.text}
        imgSrc={headingInfo.web.imgSrc}
      />

import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function Animacion3D() {
  return (
    <>
       <PHeading
        title={headingInfo.animacion.title}
        titleColor={headingInfo.animacion.titleColor}
        text={headingInfo.web.text}
        imgSrc={headingInfo.web.imgSrc}
      />

import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function CiberseguridadPage() {
  return (
    <>
      <PHeading
        title={headingInfo.ciber.title}
        text={headingInfo.web.text}
        imgSrc={headingInfo.web.imgSrc}
      />

import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function WebPage() {
  return (
    <>
      <PHeading
        title={headingInfo.web.title}
        titleColor={headingInfo.web.titleColor}
        text={headingInfo.web.text}
        imgSrc={headingInfo.web.imgSrc}
      />

import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function MercadeoPage() {
  return (
    <>
      <PHeading
        title={headingInfo.mercadeo.title}
        titleColor={headingInfo.mercadeo.titleColor}
        text={headingInfo.web.text}
        imgSrc={headingInfo.web.imgSrc}
      />

import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function MotionGraphicPage() {
  return (
    <>
        <PHeading
        title={headingInfo.motion.title}
        titleColor={headingInfo.motion.titleColor}
        text={headingInfo.web.text}
        imgSrc={headingInfo.web.imgSrc}
      />

import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function PaidMedia() {
  return (
    <>
      <PHeading
        title={headingInfo.paid.title}
        titleColor={headingInfo.paid.titleColor}
        text={headingInfo.web.text}
        imgSrc={headingInfo.web.imgSrc}
      />

import PHeading from '@/app/components/PageHeading';
import headingInfo from '@/app/content/pageHeading';

export default function PostProducionPage() {
  return (
    <>
      <PHeading
        title={headingInfo.post.title}
        titleColor={headingInfo.post.titleColor}
        text={headingInfo.web.text}
        imgSrc={headingInfo.web.imgSrc}
      />

import { Box, Heading, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
    <Box textAlign="center" padding="50" h="300px">
        <Heading as="h1" fontSize="xx-large">
          ¡Bienvenid@s al Cetav!
          {/* TODO MOVER COLOR AL THEME */}
          <Text as="span" display="block">
          ¿Qué debes saber?
          </Text>
        </Heading>
      </Box>