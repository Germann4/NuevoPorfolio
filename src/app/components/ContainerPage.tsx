import AboutMe from "./AboutMe"
import Skills from "./Skills"

export default function ContainerPage(){
   return (
      <div>
       <AboutMe />
       <Skills />
      
       <div className="project-card">
      <h2 className="text-xl font-bold">Mi Proyecto</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        alt="Proyecto Real"
        width={300}
        height={200}
        className="rounded-lg shadow-md"
      />
      <p className="mt-4 text-gray-600">
        Este es un proyecto increíble que utiliza tecnología moderna.
      </p>
    </div>
      </div>
   )
}
