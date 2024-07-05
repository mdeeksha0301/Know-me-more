import React from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { skills } from "../../data/constants";
import { useSelector } from "react-redux";

export const Skills = () => {

  const { loading, portfolioData } = useSelector((state) => state.root);
  const {skills} = portfolioData;

    if (!skills || !Array.isArray(skills) || skills.length === 0) {
        return <div>No skills data available.</div>;
      }
  return (
    <div>
      <SectionTitle title="Skills" />
      <div className="text-left mt-0 mb-2 text-lg max-w-600px text-fivth md:text-base">
            Here are some of my skills on which I have been working on.
          </div>
      <div
        id="skills"
        className="flex flex-col justify-center relative z-1 items-center text-white"
      >
        <div className="relative flex justify-between items-center flex-col w-full max-w-1100px gap-12 md:flex-col">
          
          
          <div className="w-full grid grid-cols-2 gap-8 mt-30 justify-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="w-full max-w-500px bg-card border-0.1 border border-primary-80 border-white shadow-card rounded-lg p-6 md:max-w-400px md:p-3 md:max-w-330px"
              >
                <h2 className="text-2xl font-semibold text-fivth mb-4 text-center">
                  {skill.title}
                </h2>
                <div className="flex justify-center flex-wrap gap-2 mb-4">
                  {Array.isArray(skill.skills) &&
                    skill.skills.map((item, i) => (
                      <div
                        key={i}
                        className="text-base font-normal text-primary-80 border border-primary-80 rounded-lg p-4 flex items-center justify-center gap-2 md:text-sm md:p-2 md:gap-1 md:font-medium"
                      >
                        <img
                          className="w-6 h-6"
                          src={item.image}
                          alt={item.name}
                        />
                        {item.name}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
