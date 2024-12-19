function Projects(){

    return (
        <div className="project-card h-[100vh] flex justify-center items-center" id="projects">
  <div className="grid grid-cols-3 gap-12 px-4">
    {/* Card 1 */}
    <div className="bg-white w-[320px] h-[420px] p-4 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <h2 className="text-xl font-bold mb-4">Proyecto 1</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        alt="Proyecto 1"
        className="w-full h-[260px] object-cover rounded-md"
      />
      <p className="mt-4 text-gray-600">
        Este es un proyecto increíble que utiliza tecnología moderna.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white w-[320px] h-[420px] p-4 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <h2 className="text-xl font-bold mb-4">Proyecto 2</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        alt="Proyecto 2"
        className="w-full h-[260px] object-cover rounded-md"
      />
      <p className="mt-4 text-gray-600">
        Este proyecto es un ejemplo de desarrollo avanzado.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white w-[320px] h-[420px] p-4 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <h2 className="text-xl font-bold mb-4">Proyecto 3</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        alt="Proyecto 3"
        className="w-full h-[260px] object-cover rounded-md"
      />
      <p className="mt-4 text-gray-600">
        Este proyecto demuestra creatividad y diseño.
      </p>
    </div>
  </div>
</div>
    )
}
export default Projects;