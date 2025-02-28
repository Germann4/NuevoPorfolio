import Link from "next/link";

function AboutMe(){
  return (
    <div className="mt-20 ml-20 bg-dark flex flex-row items-start space-x-4 h-[100vh] flex-wrap md:flex-nowrap max-w-[500px]:flex-col max-w-[500px]:items-center" id="aboutMe">
    <div className="w-[900px] max-w-[500px]:text-center">
     <h2 className="z-20 text-blue-600 font-mono text-[22px] md:text-[24px] lg:text-[27px] xl:text-[35px] relative overflow-hidden glitch-effect text-xs-mobile">
     Desarrollador Full Stack
     </h2>

    <p className="mr-20 text-white font-sans mt-6 text-[15px] md:text-[16px] lg:text-[17px] xl:text-[23px] relative overflow-hidden glitch-effect textAction">
      Hola, mi nombre es Germán y soy Desarrollador Full Stack con más de cinco años de experiencia en el desarrollo de soluciones web y móviles. Me especializo en tecnologías como JavaScript, Node.js, React, HTML y CSS. Tengo una sólida experiencia en el diseño de API RESTful, optimización de código y gestión de autenticación de usuarios. Soy proactivo, orientado a resultados y siempre enfocado en mejorar la experiencia del usuario. A lo largo de mi carrera, he combinado habilidades avanzadas en bases de datos, control de versiones y herramientas de desarrollo para crear productos eficientes, escalables y de alto impacto.
    </p>
  </div>
  <div className="social-icons">
  <Link href="https://www.linkedin.com/in/germ%C3%A1n-diorio-1360301ab/" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" className="icon-linkedin" viewBox="0 0 48 48">
      <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"></path>
      <path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12 c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698 c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19 c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
    </svg>
  </Link>
  <Link href="https://github.com/Germann4/NuevoPorfolio" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" className="icon-github" viewBox="0 0 48 48">
      <path fill="#181717" d="M24,4C12.954,4,4,12.954,4,24c0,8.887,5.801,16.411,13.82,19.016h12.36C38.199,40.411,44,32.887,44,24 C44,12.954,35.046,4,24,4z"></path>
      <path fill="#fff" d="M30.01,41.996L30,36.198c0-0.939-0.22-1.856-0.642-2.687c5.641-1.133,8.386-4.468,8.386-10.177 c0-2.255-0.665-4.246-1.976-5.92c0.1-0.317,0.174-0.645,0.22-0.981c0.188-1.369-0.023-2.264-0.193-2.984l-0.027-0.116 c-0.186-0.796-0.409-1.364-0.418-1.388l-0.111-0.282l-0.111-0.282l-0.302-0.032l-0.303-0.032c0,0-0.199-0.021-0.501-0.021 c-0.419,0-1.04,0.042-1.627,0.241l-0.196,0.066c-0.74,0.249-1.439,0.485-2.417,1.069c-0.286,0.171-0.599,0.366-0.934,0.584 C27.334,12.881,25.705,12.69,24,12.69c-1.722,0-3.365,0.192-4.889,0.571c-0.339-0.22-0.654-0.417-0.942-0.589 c-0.978-0.584-1.677-0.819-2.417-1.069l-0.196-0.066c-0.585-0.199-1.207-0.241-1.626-0.241c-0.302,0-0.501,0.021-0.501,0.021 l-0.302,0.032l-0.3,0.031l-0.112,0.281l-0.113,0.283c-0.01,0.026-0.233,0.594-0.419,1.391l-0.027,0.115 c-0.17,0.719-0.381,1.615-0.193,2.983c0.048,0.346,0.125,0.685,0.23,1.011c-1.285,1.666-1.936,3.646-1.936,5.89 c0,5.695,2.748,9.028,8.397,10.17c-0.194,0.388-0.345,0.798-0.452,1.224c-0.197,0.067-0.378,0.112-0.538,0.137 c-0.238,0.036-0.487,0.054-0.739,0.054c-0.686,0-1.225-0.134-1.435-0.259c-0.313-0.186-0.872-0.727-1.414-1.518 c-0.463-0.675-1.185-1.558-1.992-1.927c-0.698-0.319-1.437-0.502-2.029-0.502-1.184,0.074-1.184,1.184,0,1.184H6v4h36V24H6V8h36V24z"></path>
    </svg>
  </Link>
</div>
</div>
  )
}
export default AboutMe;