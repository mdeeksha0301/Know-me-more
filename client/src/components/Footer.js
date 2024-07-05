import React from "react";

export const Footer = () => {
  const sampleData = [
    {
      socialMedia: "LinkedIn",
      iconClass: "ri-linkedin-box-fill",
      iconColor: "text-blue-500",
    },
    {
      socialMedia: "GitHub",
      iconClass: "ri-github-fill",
      iconColor: "text-gray-600",
    },
    {
      socialMedia: "Instagram",
      iconClass: "ri-instagram-fill",
      iconColor: "text-pink-500",
    },
    {
      socialMedia: "Behance",
      iconClass: "ri-behance-fill",
      iconColor: "text-blue-800",
    },
    {
      socialMedia: "Code",
      iconClass: "ri-code-s-slash-line",
      iconColor: "text-red-500",
    },
  ];

  const handleClick = (socialMedia) => {
    // Implement logic to fetch data based on the clicked social media
    console.log(`Fetching data for ${socialMedia}`);
  };

  return (
    <div className="py-10">
      <div className="h-[1px] w-full bg-third"></div>
      <div className="flex items-center justify-center mt-4 space-x-4">
        {sampleData.map((data, index) => (
          <div
            key={index}
            className="border border-white p-3 rounded-full cursor-pointer"
            onClick={() => handleClick(data.socialMedia)}
          >
            <i className={`${data.iconClass} ${data.iconColor} text-2xl`}></i>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center flex-col mt-6 opacity-70">
        <h1 className="text-white">Designed & Developed by</h1>
        <h1 className="text-white">
          <span className="text-fivth">Deeksha Mandal</span>
        </h1>
      </div>
    </div>
  );
};
