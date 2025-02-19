function Projects(){

    return (
        <div className="project-card h-[100vh] flex justify-center items-center" id="projects">
  <div className="grid grid-cols-3 gap-12 px-4">
    {/* Card 1 */}
    <div className="bg-white w-[320px] h-auto p-4 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
  <img
    src="/ImgCard/Login.png"
    alt="Proyecto 1"
    className="w-[304px] object-contain rounded-md"
  />
</div>
    {/* Card 2 */}
    <div className="bg-white w-[320px] h-auto p-4 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
  <img
    src="/ImgCard/productos.png"
    alt="Proyecto 1"
    className="w-[304px] object-contain rounded-md"
  />
</div>

    {/* Card 3 */}
    <div className="bg-white w-[320px] h-auto p-4 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
  
  <img
    src="/ImgCard/Diamantes.png"
    alt="Proyecto 1"
    className="w-[304px] object-contain rounded-md"
  />
</div>
  </div>
</div>
    )
}
export default Projects;