import Link from 'next/link';
import { Heading } from '@chakra-ui/react';

export default function Tecnicos() {
  return (
    <>
      <Heading as="h1">TECNICOS PAGE</Heading>
      <div>
        <Link href="/tecnicos/diseno-desarrollo-web">
          Diseño y desarrollo web
        </Link>
      </div>
      <div>
        <Link href="/tecnicos/animacion-3d">Animacion 3D</Link>
      </div>
      <div>
        <Link href="/tecnicos/post-produccion-audiovisual">
          PostProducion Audiovisual
        </Link>
      </div>
      <div>
        <Link href="/tecnicos/mercadeo-digital-diseno">
          Mercadeo Digital y Diseño
        </Link>
      </div>
      <div>
        <Link href="/tecnicos/analisis-visualizacion-de-datos">
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
    </>
  );
}
