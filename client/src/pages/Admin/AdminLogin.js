// import { message } from "antd";
// import React, { useState } from "react";
// import { hideLoading, showLoading } from "../../redux/rootSlice";
// import axios from 'axios';
// import { useDispatch } from "react-redux";

// const AdminLogin = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const dispatch = useDispatch();

//   const handleSubmit = async () => {
//     try {
//       dispatch(showLoading());
//       const response = await axios.post("/api/portfolio/login", formData);
//       dispatch(hideLoading());
//       if (response.data.success){
//         message.success(response.data.message);
//         localStorage.setItem('token', JSON.stringify(response.data));
//         window.location.href = '/admin';
//       }
//       else {
//         alert(response.data.message);
//         dispatch(hideLoading());
//       }
    
//       const data = await response.json();   
//      } catch (error) {
//       message.error(error.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       {/* <h1>Login</h1> */}
//       <form className="w-full max-w-xs">
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//             Username
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="username"
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={(e) => setFormData({ ...formData, username: e.target.value })}
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//             id="password"
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//             onClick={handleSubmit}
//           >
//             Sign In
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;

import { message } from "antd";
import React, { useState } from "react";
import { hideLoading, showLoading } from "../../redux/rootSlice";
import axios from 'axios';
import { useDispatch } from "react-redux";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent default form submission
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/auth/login", formData);
      dispatch(hideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        localStorage.setItem('token', JSON.stringify(response.data.token));
        window.location.href = '/admin';
      } else {
        message.error(response.data.message);  // Use message.error for consistency
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-xs" onSubmit={handleSubmit}>  {/* Attach onSubmit to form */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            name="username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
