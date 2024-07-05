import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { SectionTitle } from "../../components/SectionTitle";

export const Projects = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const {projects} = portfolioData;
  // const {welcomText, name, caption, decription} = projects;

  const [selectedCategory, setSelectedCategory] = useState("All");

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

  return (
    <div>
      <SectionTitle title="Projects" className="mb-0 p-0" />
      <div className="flex justify-center mb-7">
  <div className="border border-fivth p-2 rounded">
    <div className="flex gap-4  ">
      {["All", ...availableCategories].map((category, index, array) => (
        <React.Fragment key={category}>
          <span
            className={`workItem text-fivth uppercase ${
              selectedCategory.toLowerCase() === category.toLowerCase()
                ? "selected"
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

      <div className="flex flex-wrap gap-9">
        {filteredProjects.map((project, index) => (
          <div
            className="flex flex-col bg-fourth h-auto rounded mb-1 p-7 w-[31%] md:w-1/3"
            key={index}
          >
            <div className="flex items-center justify-center mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-white text-3xl">{project.title}</h1>
              <h1 className="text-white  italic">{project.period}</h1>
              <p className="text-white text-l text-justify">
                {project.description}
                
              </p>
              {project.technologies.length > 0 && (
                <div className="flex gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary p-2 rounded text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex justify-center gap-2 mt-4">
                <Link
                  to={project.link1}
                  className="bg-secondary text-white py-2 px-4 rounded hover:bg-third"
                >
                  Visit Link 1
                </Link>
                <Link
                  to={project.link2}
                  className="bg-fivth text-white py-2 px-4 rounded hover:bg-third"
                >
                  Visit Link 2
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
