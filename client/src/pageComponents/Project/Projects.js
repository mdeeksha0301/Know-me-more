// import React, { useState } from "react";
// import { useSelector } from 'react-redux';
// import { Link } from "react-router-dom";
// import { SectionTitle } from "../../components/SectionTitle";

// export const Projects = () => {
//   const { loading, portfolioData } = useSelector((state) => state.root);
//   const {projects} = portfolioData;
//   // const {welcomText, name, caption, decription} = projects;

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   // Extract unique categories from project data
//   const availableCategories = Array.from(
//     new Set(projects.map((project) => project.category.toLowerCase()))
//   );

//   // Ensure projects is defined and is an array
//   const filteredProjects =
//     Array.isArray(projects) && selectedCategory.toLowerCase() !== "all"
//       ? projects.filter(
//           (project) =>
//             project.category.toLowerCase() === selectedCategory.toLowerCase()
//         )
//       : projects;

//   return (
//     <div>
//       <SectionTitle title="Projects" className="mb-0 p-0" />
//       <div className="flex justify-center mb-7">
//   <div className="border border-fivth p-2 rounded">
//     <div className="flex gap-4  ">
//       {["All", ...availableCategories].map((category, index, array) => (
//         <React.Fragment key={category}>
//           <span
//             className={`workItem text-fivth uppercase ${
//               selectedCategory.toLowerCase() === category.toLowerCase()
//                 ? "selected"
//                 : ""
//             }`}
//             onClick={() => setSelectedCategory(category.toLowerCase())}
//           >
//             {category}
//           </span>
//           {index < array.length - 1 && <span className="text-white"> | </span>}
//         </React.Fragment>
//       ))}
//     </div>
//   </div>
// </div>

//       <div className="flex flex-wrap gap-9">
//         {filteredProjects.map((project, index) => (
//           <div
//             className="flex flex-col bg-fourth h-auto rounded mb-1 p-7 w-[31%] md:w-1/3"
//             key={index}
//           >
//             <div className="flex items-center justify-center mb-4">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-32 object-cover rounded"
//               />
//             </div>
//             <div className="flex flex-col gap-1">
//               <h1 className="text-white text-3xl">{project.title}</h1>
//               <h1 className="text-white  italic">{project.period}</h1>
//               <p className="text-white text-l text-justify">
//                 {project.description}
                
//               </p>
//               {project.technologies.length > 0 && (
//                 <div className="flex gap-2">
//                   {project.technologies.map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="bg-primary p-2 rounded text-white"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               )}
//               <div className="flex justify-center gap-2 mt-4">
//                 <Link
//                   to={project.link1}
//                   className="bg-secondary text-white py-2 px-4 rounded hover:bg-third"
//                 >
//                   Visit Link 1
//                 </Link>
//                 <Link
//                   to={project.link2}
//                   className="bg-fivth text-white py-2 px-4 rounded hover:bg-third"
//                 >
//                   Visit Link 2
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Modal from 'react-modal';
import { SectionTitle } from "../../components/SectionTitle";

Modal.setAppElement('#root'); // Set up modal root element

export const Projects = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Extract unique categories from project data
  const availableCategories = Array.from(
    new Set(projects.map((project) => project.category.toLowerCase()))
  );

  // Ensure projects is defined and is an array
  const filteredProjects =
    Array.isArray(projects) && selectedCategory.toLowerCase() !== "all"
      ? projects.filter(
          (project) =>
            project.category.toLowerCase() === selectedCategory.toLowerCase()
        )
      : projects;

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto p-4">
      <SectionTitle title="Projects" className="mb-0 p-0" />
      
      {/* Category Filter */}
      <div className="flex justify-center mb-7">
        <div className="border border-fivth p-2 rounded">
          <div className="flex gap-4">
            {["All", ...availableCategories].map((category, index, array) => (
              <React.Fragment key={category}>
                <span
                  className={`workItem text-fivth uppercase cursor-pointer ${
                    selectedCategory.toLowerCase() === category.toLowerCase()
                      ? "selected font-bold"
                      : ""
                  }`}
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                >
                  {category}
                </span>
                {index < array.length - 1 && <span className="text-white"> | </span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Project List */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> */}
      <div className="flex flex-wrap gap-9">
  {filteredProjects.map((project, index) => (
    <div
      className="w-[31%] relative bg-fourth rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
      key={index}
      onClick={() => openModal(project)}
    >
      <div className="flex justify-center overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-[60%] h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-5 bg-primary">
        <h2 className="text-white text-2xl font-semibold mb-2">{project.title}</h2>
        <button className="bg-third text-white py-2 px-4 rounded-lg font-semibold hover:bg-white hover:text-third transition-colors">
          Read More
        </button>
      </div>
    </div>
  ))}
</div>





      {/* Project Details Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="bg-primary p-6 rounded-lg max-w-2xl mx-auto shadow-lg outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
      >
        {selectedProject && (
          <>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-white text-3xl font-bold mb-2">{selectedProject.title}</h2>
            <p className="text-white text-lg mb-4">{selectedProject.description}</p>

            {selectedProject.technologies.length > 0 && (
              <div className="flex gap-2 mb-4">
                {selectedProject.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-secondary px-3 py-1 rounded text-white text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="flex justify-start gap-4 mt-4">
              {selectedProject.link1 && (
                <a
                  href={selectedProject.link1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex items-center gap-2 hover:text-third transition-colors"
                >
                  <FaGithub className="text-2xl" /> GitHub
                </a>
              )}
              {selectedProject.link2 && (
                <a
                  href={selectedProject.link2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex items-center gap-2 hover:text-third transition-colors"
                >
                  <FaExternalLinkAlt className="text-2xl" /> Live Demo
                </a>
              )}
            </div>

            <button
              onClick={closeModal}
              className="mt-6 bg-secondary text-white px-4 py-2 rounded hover:bg-third transition-colors"
            >
              Close
            </button>
          </>
        )}
      </Modal>
    </div>
  );
};
