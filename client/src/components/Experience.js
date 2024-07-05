import React from "react";
import { SectionTitle } from "./SectionTitle";
import { useSelector } from "react-redux";
// import { experiences } from "../pages/resoources/experiences";

export const Experience = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title={"Experience"} />

      <div className="flex py-10 gap-10 mobile:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-2/3 mobile:flex-row mobile:overflow-x-scroll mobile:w-full">
          {experiences.map((experience, index) => (
            <div
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
            {experiences[selectedItemIndex].title || ''}
          </h1>
          <h1 className="text-third text-2xl">
            {experiences[selectedItemIndex].company || ''}
          </h1>
          <p className="text-white">
          {experiences[selectedItemIndex].description || ''}
          </p>
        </div>
      </div>
    </div>
  );
};
