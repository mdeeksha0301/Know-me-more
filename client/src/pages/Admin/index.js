import React, { useEffect } from "react";
import { Tabs } from "antd";
import { AdminIntro } from "./AdminIntro";
import { AdminAbout } from "./AdminAbout";
import { useSelector } from "react-redux";
import AdminSkills from "./AdminSkills";
import AdminProject from "./AdminProject";
import { AboutEdu } from "./AboutEdu";
import AboutExp from "./AboutExp";
// import AdminLogin from './AdminLogin';
const { TabPane } = Tabs;

export const Admin = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };
  const { portfolioData } = useSelector((state) => state.root);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <div>
      <div className="flex gap-10 items-center px-5 py-2 justify-between">
        <div className="flex gap-10 items-center">
          <h1 className="text-3xl text-primary"> Admin Panel</h1>
          <div className="w-60 h-[1px] bg-gray-500"></div>
        </div>
        <h1 className="underline text-primary text-xl cursor-pointer"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
        >Logout</h1>
      </div>

      {portfolioData && (
        <div className="mt-5 p-5">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Intro" key="1">
              <AdminIntro />
            </TabPane>
            <TabPane tab="About" key="2">
              <AdminAbout />
            </TabPane>
            <TabPane tab="Skills" key="3">
              <AdminSkills />
            </TabPane>
            <TabPane tab="Projects" key="4">
              <AdminProject />
            </TabPane>
            <TabPane tab="Experience" key="5">
              <AboutExp />
            </TabPane>
            <TabPane tab="Education" key="6">
              <AboutEdu />
            </TabPane>
          </Tabs>
        </div>
      )}
    </div>
  );
};
