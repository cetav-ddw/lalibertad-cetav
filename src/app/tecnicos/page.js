import Link from 'next/link';

export default function Tecnicos() {
  return (
    <main>
      <h1>TECNICOS PAGE</h1>
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
      <div>
        <Link href="/">HOME</Link>
      </div>
    </main>
  );
}
