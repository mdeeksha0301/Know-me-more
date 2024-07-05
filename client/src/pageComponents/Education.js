import React, { useState } from "react";
import { SectionTitle } from "../components/SectionTitle";
import { useSelector } from 'react-redux';

export const Education = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { educations } = portfolioData;

  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  if (!educations || !Array.isArray(educations) || educations.length === 0) {
    return <div>No education data available.</div>;
  }

  return (
    <div>
      <SectionTitle title={"Education"} />

      <div className="flex py-10 gap-10 mobile:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-2/3 mobile:flex-row mobile:overflow-x-scroll mobile:w-full">
          {educations.map((experience, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-10
                 ${
                   selectedItemIndex === index
                     ? "text-fivth border-fivth border-l-4 -ml-1/2 bg-fivth-opacity-10 mobile:w-full"
                     : "text-white"
                 }`}
              >
                {experience.period || ''}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-fourth text-2xl">
            {educations[selectedItemIndex].title || ''}
          </h1>
          <h1 className="text-third text-2xl">
            {educations[selectedItemIndex].company || ''}
          </h1>
          <p className="text-white">
          {/* {educations[selectedItemIndex].description || ''} */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};
