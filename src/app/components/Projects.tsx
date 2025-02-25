function Projects(){

    return (
      <div className="project-card min-h-screen flex justify-center items-center px-4 max-[1000px]:mt-20" id="projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
      
        <div className="bg-white w-full max-w-[320px] h-auto p-4 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src="/ImgCard/Login.png"
            alt="Proyecto 1"
            className="w-full object-contain rounded-md"
          />
        </div>
      
        <div className="bg-white w-full max-w-[320px] h-auto p-4 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src="/ImgCard/productos.png"
            alt="Proyecto 2"
            className="w-full object-contain rounded-md"
          />
        </div>

        <div className="bg-white w-full max-w-[320px] h-auto p-4 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src="/ImgCard/Diamantes.png"
            alt="Proyecto 3"
            className="w-full object-contain rounded-md"
          />
        </div>
      </div>
    </div>
    )
}
export default Projects;