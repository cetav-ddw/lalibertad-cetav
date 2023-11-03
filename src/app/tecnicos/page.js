import Link from 'next/link';
import FaqBanner from '../components/FaqsBanner';
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
      <FaqBanner />
    </>
  );
}
