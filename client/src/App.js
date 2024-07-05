// Import necessary components from react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';  
import { useEffect, useState } from 'react';
import { Loader } from './components/Loader';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import Resume from './pages/ResumePage/Resume';
import ContactMe from './pages/Contact/ContactMe';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, setPortfolioData, showLoading, ReloadData } from './redux/rootSlice';
import { Admin } from './pages/Admin';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminRegister from './pages/Admin/AdminRegister';


function App() {
  const { loading, portfolioData, reloadData } = useSelector((state) => state.root);

  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch(showLoading(true));
      const response = await axios.get('/api/portfolio/get-portfolio-data');
      dispatch(setPortfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(hideLoading())
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  }

  useEffect(() => {
    if(!portfolioData){
      getPortfolioData();
    }
  }, [portfolioData]);

  useEffect(() => {
    if(reloadData){
      getPortfolioData();
    }
  }, [reloadData])
  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/admin" element={<Admin />} />
        <Route path='/login' element={<AdminLogin/>} />
        <Route path='/register' element={<AdminRegister/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
