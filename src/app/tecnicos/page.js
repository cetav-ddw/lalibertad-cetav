import { Heading } from '@chakra-ui/react';
import Link from 'next/link';
import FaqBanner from '../components/FaqsBanner';
import images from '../content/imageData';
import OurAllies from '../components/OurAllies';

export default function Tecnicos() {
  return (
    <>
      <Heading as="h1" fontSize="xx-large">
        Técnicos
      </Heading>
      <div>
        <Link href="/tecnicos/dis-y-des-web">Diseño y desarrollo web</Link>
      </div>
      <div>
        <Link href="/tecnicos/animacion-3d">Animacion 3D</Link>
      </div>
      <div>
        <Link href="/tecnicos/post-produc-audiovisual">
          PostProducion Audiovisual
        </Link>
      </div>
      <div>
        <Link href="/tecnicos/merc-digital-y-diseno">
          Mercadeo Digital y Diseño
        </Link>
      </div>
      <div>
        <Link href="/tecnicos/analisis-y-visuali-de-datos">
          Analisis y Visualizacion de Datos
        </Link>
      </div>
      <div>
        <Link href="/tecnicos/ciberseguridad">Ciberseguridad</Link>
      </div>
      <div>
        <Link href="/tecnicos/paid-media">Paid Media</Link>
      </div>
      <div>
        <Link href="/tecnicos/motion-graphics">Motion Graphics</Link>
      </div>
      <OurAllies images={images} />
      <FaqBanner />
    </>
  );
}
