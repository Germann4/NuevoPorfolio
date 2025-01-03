// Importamos el componente Head de Next.js para agregar elementos al <head> del HTML, como fuentes.
import Head from 'next/head';
// Importamos el componente MenuButton desde la carpeta components.
import MenuButton from "./components/MenuButton";
// Importamos el componente Introduction desde la carpeta components.
import ContainerPage from './components/ContainerPage';

export default function Home() {
  return (
  // Contenedor principal de la página con altura mínima de pantalla y fondo gris oscuro.  
<div className="min-h-screen bg-gray-800 flex flex-col scroll-smooth">
       {/* Añadimos la fuente Roboto al <head> para usarla en la página. */}
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
  {/* Sección superior con fondo gris más claro y una sombra para darle profundidad. */}    
  <div className="sticky top-0 z-10 shadow-lg bg-black bg-opacity-70 w-full h-30 flex items-center justify-between p-2"> 
    {/* Contenedor para el nombre y la descripción alineados a la izquierda. */}
    <div className="flex flex-col items-start ml-4 xs:ml-5 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12 2xl:ml-16">
      {/* Título con el nombre German Diorio, con tamaños de texto que varían según el tamaño de la pantalla. */}
      <h1 className="text-white text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-serif text-left">
        German Diorio
      </h1>
      {/* Descripción del rol Full Stack Developer, con diferentes fuentes. */}
      <p className="text-white text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-sans text-left">
        Full Stack Developer
      </p>
    </div>
    {/* Botón de menú alineado a la derecha. */}
    <MenuButton />
  </div>
   {/* Componente Introduction que podría incluir más información sobre ti o tus proyectos. */}
  <ContainerPage /> 
  
</div>
  );
}

