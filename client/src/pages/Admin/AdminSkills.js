// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Modal, Form } from "antd";
// import { hideLoading, ReloadData, showLoading } from "../../redux/rootSlice";
// import { message } from "antd";
// import axios from "axios";

// const AdminSkills = () => {
//   const dispatch = useDispatch();
//   const { portfolioData } = useSelector((state) => state.root);
//   const { skills } = portfolioData;
//   const [showModel, setShowModel] = React.useState(false);
//   const [itemForEdit, setItemForEdit] = React.useState(null);
//   const [type, setType] = React.useState("add");

//   const onFinish = async (values) => {
//     try {
//       dispatch(showLoading());
//       let response;
//       if (itemForEdit) {
//         // Check if values contain skills
//         if (values.skills) {
//           // Update existing skills
//           response = await axios.post("/api/portfolio/update-skill", {
//             ...values,
//             _id: itemForEdit._id,
//           });
//         } else {
//           // Update existing title
//           response = await axios.post("/api/portfolio/update-title", {
//             ...values,
//             _id: itemForEdit._id,
//           });
//         }
//       } else {
//         // Check if values contain skills
//         if (values.skills) {
//           // Add new skills
//           response = await axios.post("/api/portfolio/add-skill", values);
//         } else {
//           // Add new title
//           response = await axios.post("/api/portfolio/add-title", values);
//         }
//       }
  
//       dispatch(hideLoading());
//       if (response.data.success) {
//         message.success(response.data.message);
//         setShowModel(false);
//         setItemForEdit(null);
//         dispatch(hideLoading());
//         dispatch(ReloadData(true));
//       } else {
//         message.error(response.data.message);
//       }
//     } catch (error) {
//       dispatch(hideLoading());
//       message.error(error.message);
//     }
//   };
  
//   const onDeleteCategory = async (category) => {
//     try {
//       dispatch(showLoading());
//       const response = await axios.post("/api/portfolio/delete-title", {
//         _id: category._id,
//       });
//       dispatch(hideLoading());
//       if (response.data.success) {
//         message.success(response.data.message);
//         dispatch(hideLoading());
//         dispatch(ReloadData(true));
//       } else {
//         message.error(response.data.message);
//       }
//     } catch (error) {
//       dispatch(hideLoading());
//       message.error(error.message);
//     }
//   };

//   const onDeleteSkill = async (skill) => {
//     try {
//       dispatch(showLoading());
//       const response = await axios.post("/api/portfolio/delete-skill", {
//         _id: skill._id,
//       });
//       dispatch(hideLoading());
//       if (response.data.success) {
//         message.success(response.data.message);
//         dispatch(hideLoading());
//         dispatch(ReloadData(true));
//       } else {
//         message.error(response.data.message);
//       }
//     } catch (error) {
//       dispatch(hideLoading());
//       message.error(error.message);
//     }
//   };

//   const addSkill = () => {
//     setType("add");
//     setShowModel(true);
//     setItemForEdit(null);
//   };

//   const addCategory = () => {
//     setType("add");
//     setShowModel(true);
//     setItemForEdit(null);
//   };

//   return (
//     <div>
//       <div className="flex justify-end">
//       <button
//           className="bg-primary hover:bg-third text-white font-bold py-2 px-5 mt-5 rounded"
//           onClick={() => {
//             setItemForEdit(null);
//             setShowModel(true);
//             setType("add");
//           }}
//         >
//           Add Category
//         </button>
//         \
//       </div>
//       <div className="grid grid-cols-4 gap-5">
//         {skills.map((item) => (
//           <div key={item._id} className="shadow border p-5 border-gray-400 flex flex-col ">
//             <h1 className="text-secondary text-xl font-bold">
//               {item.title}
//             </h1>
//             <hr />
//             {Array.isArray(item.skills) &&
//               item.skills.map((skill, i) => (
//                 <div key={i}>
//                   <div className="text-base font-normal text-primary-80 border border-primary-80 rounded-lg p-4 flex items-center justify-between gap-2 md:text-sm md:p-2 md:gap-1 md:font-medium">
//                     <div>
//                       <img
//                         className="w-6 h-6"
//                         src={skill.image}
//                         alt={skill.name}
//                       />
//                       {skill.name}
//                     </div>
//                     <div>
//                       <button
//                         className="bg-fivth text-white px-5 py-2 mr-2"
//                         onClick={() => onDeleteSkill(skill)}
//                       >
//                         Delete
//                       </button>
                      
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             <div className="flex justify-end gap-5 mt-5">
//               <button
//                 className="bg-fivth text-white px-5 py-2"
//                 onClick={() => onDeleteCategory(item)}
//               >
//                 Delete Category
//               </button>
//               <button
//                 className="bg-primary text-white px-5 py-2 "
//                 onClick={() => {
//                   setItemForEdit(item);
//                   setShowModel(true);
//                   setType("edit");
//                 }}
//               >
//                 Edit
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {(type === "add" || itemForEdit) && (
//         <Modal
//         visible={showModel}
//         title={itemForEdit ? "Edit item" : "Add Skill"}
//         footer={null}
//         onCancel={() => {
//           setShowModel(false);
//           setItemForEdit(null);
//         }}
//       >
//         <Form
//           layout="vertical"
//           onFinish={onFinish}
//           initialValues={itemForEdit || {}}
//         >
//             <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please input title!' }]}>
//               <input placeholder="Title" />
//             </Form.Item>
//             <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input Name!' }]}>
//               <input placeholder="Name the Skill" />
//             </Form.Item>
//             <Form.Item name="skil" label="Skill" rules={[{ required: true, message: 'Please input Image!' }]}>
//               <input placeholder="Image of Skill" />
//             </Form.Item>
            
            
//           {Array.isArray(itemForEdit?.skills) &&
//   itemForEdit.skills.map((skill, i) => (
//     <div key={i}>
        
        
//       <Form.Item name={`skills[${i}].name`} label="Name">
//         <input placeholder="Name" defaultValue={skill.name} />
//       </Form.Item>
//       <Form.Item name={`skills[${i}].image`} label="ImageURL">
//         <input placeholder="ImageURL" defaultValue={skill.image} />
//       </Form.Item>
      
//     </div>
//   ))}

//           <div className="flex justify-end">
         
//             <button
//               className="border-primary text-primary px-5 py-2"
//               onClick={() => {
//                 setShowModel(false);
//                 setItemForEdit(null);
//               }}
//             >
//               Cancel
//             </button>
//             <button className="bg-primary text-white px-5 py-2">
//               {itemForEdit ? "Update" : "Add"}
//             </button>
//           </div>
//         </Form>
//       </Modal>
      
//       )}
//     </div>
//   );
// };

// export default AdminSkills;


// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Modal, Form, message } from "antd";
// import axios from "axios";
// import { hideLoading, ReloadData, showLoading } from "../../redux/rootSlice";

// const AdminSkills = () => {
//   const dispatch = useDispatch();
//   const { portfolioData } = useSelector((state) => state.root);
//   const { skills } = portfolioData;
//   const [showModal, setShowModal] = useState(false);
//   const [itemForEdit, setItemForEdit] = useState(null);
//   const [type, setType] = useState("add");
//   const [form] = Form.useForm();

//   useEffect(() => {
//     form.resetFields();
//   }, [showModal, itemForEdit, form]);

//   const onFinish = async (values) => {
//     try {
//       dispatch(showLoading());

//       let response;
//       if (type === "edit") {
//         if (values.skills) {
//           response = await axios.put(`/api/skills/update-category/${itemForEdit._id}`, {
//             title: values.title,
//           });
//         } else {
//           response = await axios.put(`/api/skills/update-title/${itemForEdit._id}`, {
//             title: values.title,
//           });
//         }
//       } else {
//         if (values.skills) {
//           response = await axios.post("/api/skills/add-skill", values);
//         } else {
//           response = await axios.post("/api/skills/add-title", values);
//         }
//       }

//       dispatch(hideLoading());
//       if (response.data.success) {
//         message.success(response.data.message);
//         setShowModal(false);
//         setItemForEdit(null);
//         dispatch(ReloadData(true));
//       } else {
//         message.error(response.data.message);
//       }
//     } catch (error) {
//       dispatch(hideLoading());
//       message.error(error.message);
//     }
//   };

//   const onDeleteCategory = async (category) => {
//     try {
//       dispatch(showLoading());
//       const response = await axios.delete(`/api/skills/delete-category/${category._id}`);
//       dispatch(hideLoading());
//       if (response.data.success) {
//         message.success(response.data.message);
//         dispatch(ReloadData(true));
//       } else {
//         message.error(response.data.message);
//       }
//     } catch (error) {
//       dispatch(hideLoading());
//       message.error(error.message);
//     }
//   };

//   const onDeleteSkill = async (skill) => {
//     try {
//       dispatch(showLoading());
//       const response = await axios.delete(`/api/skills/delete-skill/${skill._id}`);
//       dispatch(hideLoading());
//       if (response.data.success) {
//         message.success(response.data.message);
//         dispatch(ReloadData(true));
//       } else {
//         message.error(response.data.message);
//       }
//     } catch (error) {
//       dispatch(hideLoading());
//       message.error(error.message);
//     }
//   };

//   const addSkill = () => {
//     setType("add");
//     setShowModal(true);
//     setItemForEdit(null);
//   };

//   const addCategory = () => {
//     setType("add");
//     setShowModal(true);
//     setItemForEdit(null);
//   };

//   return (
//     <div>
//       <div className="flex justify-end">
//         <button
//           className="bg-primary hover:bg-third text-white font-bold py-2 px-5 mt-5 rounded"
//           onClick={addCategory}
//         >
//           Add Category
//         </button>
//       </div>
//       <div className="grid grid-cols-4 gap-5">
//         {skills.map((item) => (
//           <div key={item._id} className="shadow border p-5 border-gray-400 flex flex-col">
//             <h1 className="text-secondary text-xl font-bold">{item.title}</h1>
//             <hr />
//             {Array.isArray(item.skills) &&
//               item.skills.map((skill, i) => (
//                 <div key={i}>
//                   <div className="text-base font-normal text-primary-80 border border-primary-80 rounded-lg p-4 flex items-center justify-between gap-2 md:text-sm md:p-2 md:gap-1 md:font-medium">
//                     <div>
//                       <img className="w-6 h-6" src={skill.image} alt={skill.name} />
//                       {skill.name}
//                     </div>
//                     <div>
//                       <button className="bg-fivth text-white px-5 py-2 mr-2" onClick={() => onDeleteSkill(skill)}>
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             <div className="flex justify-end gap-5 mt-5">
//               <button className="bg-fivth text-white px-5 py-2" onClick={() => onDeleteCategory(item)}>
//                 Delete Category
//               </button>
//               <button
//                 className="bg-primary text-white px-5 py-2"
//                 onClick={() => {
//                   setItemForEdit(item);
//                   setShowModal(true);
//                   setType("edit");
//                 }}
//               >
//                 Edit
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {(type === "add" || itemForEdit) && (
//         <Modal visible={showModal} title={itemForEdit ? "Edit item" : "Add Skill"} footer={null} onCancel={() => setShowModal(false)}>
//           <Form form={form} layout="vertical" onFinish={onFinish} initialValues={itemForEdit || {}}>
//             <Form.Item
//               name="title"
//               label="Title"
//               rules={[{ required: true, message: "Please input title!" }]}
//             >
//               <input placeholder="Title" />
//             </Form.Item>

//             {!itemForEdit && (
//               <Form.Item
//                 name="name"
//                 label="Name"
//                 rules={[{ required: true, message: "Please input Name!" }]}
//               >
//                 <input placeholder="Name the Skill" />
//               </Form.Item>
//             )}

//             {!itemForEdit && (
//               <Form.Item
//                 name="image"
//                 label="Image"
//                 rules={[{ required: true, message: "Please input Image URL!" }]}
//               >
//                 <input placeholder="Image URL" />
//               </Form.Item>
//             )}

//             {Array.isArray(itemForEdit?.skills) &&
//               itemForEdit.skills.map((skill, i) => (
//                 <div key={i}>
//                   <Form.Item name={`skills[${i}].name`} label="Name">
//                     <input placeholder="Name" defaultValue={skill.name} />
//                   </Form.Item>
//                   <Form.Item name={`skills[${i}].image`} label="Image URL">
//                     <input placeholder="Image URL" defaultValue={skill.image} />
//                   </Form.Item>
//                 </div>
//               ))}

//             <div className="flex justify-end">
//               <button
//                 className="border-primary text-primary px-5 py-2"
//                 onClick={() => {
//                   setShowModal(false);
//                   setItemForEdit(null);
//                 }}
//               >
//                 Cancel
//               </button>
//               <button className="bg-primary text-white px-5 py-2" htmlType="submit">
//                 {itemForEdit ? "Update" : "Add"}
//               </button>
//             </div>
//           </Form>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default AdminSkills;

// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Modal, Form, message } from "antd";
// import axios from "axios";
// import { hideLoading, ReloadData, showLoading } from "../../redux/rootSlice";

// const AdminSkills = () => {
//   const dispatch = useDispatch();
//   const { portfolioData } = useSelector((state) => state.root);
//   const { skills } = portfolioData;
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [itemForEdit, setItemForEdit] = useState(null);
//   const [form] = Form.useForm();

//   useEffect(() => {
//     form.resetFields();
//   }, [showAddModal, showEditModal, itemForEdit, form]);

  
//   return (
//     <div>
//       <div className="flex justify-end">
//         <button
//           className="bg-primary hover:bg-third text-white font-bold py-2 px-5 mt-5 rounded"
//           onClick={}
//         >
//           Add Category
//         </button>
//       </div>
//       <div className="grid grid-cols-4 gap-5">
//         {skills.map((item) => (
//           <div key={item._id} className="shadow border p-5 border-gray-400 flex flex-col">
//             <h1 className="text-secondary text-xl font-bold">{item.title}</h1>
//             <hr />
//             {Array.isArray(item.skills) &&
//               item.skills.map((skill, i) => (
//                 <div key={i}>
//                   <div className="text-base font-normal text-primary-80 border border-primary-80 rounded-lg p-4 flex items-center justify-between gap-2 md:text-sm md:p-2 md:gap-1 md:font-medium">
//                     <div>
//                       <img className="w-6 h-6" src={skill.image} alt={skill.name} />
//                       {skill.name}
//                     </div>
//                     <div>
//                       <button className="bg-fivth text-white px-5 py-2 mr-2" onClick={() => onDeleteSkill()}>
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             <div className="flex justify-end gap-5 mt-5">
//               <button className="bg-fivth text-white px-5 py-2" onClick={() => onDeleteCategory()}>
//                 Delete Category
//               </button>
//               <button
//                 className="bg-primary text-white px-5 py-2"
//                 onClick={() => onEditSkill()}
//               >
//                 Edit
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Modal visible={showAddModal} title="Add Category" footer={null} onCancel={() => setShowAddModal(false)}>
//         <Form form={form} layout="vertical" onFinish={onFinishAdd}>
//           <Form.Item
//             name="title"
//             label="Title"
//             rules={[{ required: true, message: "Please input title!" }]}
//           >
//             <input placeholder="Title" />
//           </Form.Item>
//           <Form.Item
//             name="name"
//             label="Name"
//             rules={[{ required: true, message: "Please input Name!" }]}
//           >
//             <input placeholder="Name the Skill" />
//           </Form.Item>
//           <Form.Item
//             name="image"
//             label="Image"
//             rules={[{ required: true, message: "Please input Image URL!" }]}
//           >
//             <input placeholder="Image URL" />
//           </Form.Item>
//           <div className="flex justify-end">
//             <button
//               className="border-primary text-primary px-5 py-2"
//               onClick={() => }
//             >
//               Cancel
//             </button>
//             <button className="bg-primary text-white px-5 py-2" htmlType="submit">
//               Add
//             </button>
//           </div>
//         </Form>
//       </Modal>

//       <Modal visible={showEditModal} title="Edit Skill" footer={null} onCancel={() => setShowEditModal(false)}>
//         <Form form={form} layout="vertical" onFinish={onFinishEdit} initialValues={itemForEdit || {}}>
          
//           {Array.isArray(itemForEdit?.skills) &&
//             itemForEdit.skills.map((skill, i) => (
//               <div key={i}>
//                 <Form.Item name={`skills[${i}].name`} label="Name">
//                   <input placeholder="Name" defaultValue={skill.name} />
//                 </Form.Item>
//                 <Form.Item name={`skills[${i}].image`} label="Image URL">
//                   <input placeholder="Image URL" defaultValue={skill.image} />
//                 </Form.Item>
//               </div>
//             ))}
//           <div className="flex justify-end">
//             <button
//               className="border-primary text-primary px-5 py-2"
//               onClick={()=>}
//             >
//               Cancel
//             </button>
//             <button className="bg-primary text-white px-5 py-2" htmlType="submit">
//               Update
//             </button>
//           </div>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default AdminSkills;


// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Modal, Form, message } from "antd";
// import axios from "axios";
// import { hideLoading, ReloadData, showLoading } from "../../redux/rootSlice";

// const AdminSkills = () => {
//   const dispatch = useDispatch();
//   const { portfolioData } = useSelector((state) => state.root);
//   const { skills } = portfolioData;
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [itemForEdit, setItemForEdit] = useState(null);
//   const [form] = Form.useForm();

//   useEffect(() => {
//     form.resetFields();
//   }, [showAddModal, showEditModal, itemForEdit, form]);

//   const onAddCategory = () => {
//     setShowAddModal(true);
//   };

//   const onDeleteSkill = async (categoryId, skillIndex) => {
//     try {
//       dispatch(showLoading());
//       const category = skills.find((item) => item._id === categoryId);
//       category.skills.splice(skillIndex, 1);
//       await axios.put(`/api/portfolio/update-title/${categoryId}`, category);
//       dispatch(ReloadData());
//       dispatch(hideLoading());
//       message.success("Skill deleted successfully");
//     } catch (error) {
//       dispatch(hideLoading());
//       message.error("Failed to delete skill");
//     }
//   };

//   const onDeleteCategory = async (id) => {
//     try {
//       dispatch(showLoading());
//       await axios.delete(`/api/portfolio/delete-title/${id}`);
//       dispatch(ReloadData());
//       dispatch(hideLoading());
//       message.success("Category deleted successfully");
//     } catch (error) {
//       dispatch(hideLoading());
//       message.error("Failed to delete category");
//     }
//   };

//   const onEditSkill = (item) => {
//     setItemForEdit(item);
//     setShowEditModal(true);
//   };

//   const onFinishAdd = async (values) => {
//     try {
//       dispatch(showLoading());
//       await axios.post("/api/portfolio/add-skill", values);
//       dispatch(ReloadData());
//       dispatch(hideLoading());
//       message.success("Category added successfully");
//       setShowAddModal(false);
//     } catch (error) {
//       dispatch(hideLoading());
//       message.error("Failed to add category");
//     }
//   };

//   const onFinishEdit = async (values) => {
//     try {
//       dispatch(showLoading());
//       await axios.put(`/api/portfolio/update-title/${itemForEdit._id}`, values);
//       dispatch(ReloadData());
//       dispatch(hideLoading());
//       message.success("Category updated successfully");
//       setShowEditModal(false);
//     } catch (error) {
//       dispatch(hideLoading());
//       message.error("Failed to update category");
//     }
//   };

//   return (
//     <div>
//       <div className="flex justify-end">
//         <button
//           className="bg-primary hover:bg-third text-white font-bold py-2 px-5 mt-5 rounded"
//           onClick={onAddCategory}
//         >
//           Add Category
//         </button>
//       </div>
//       <div className="grid grid-cols-4 gap-5">
//         {skills.map((item) => (
//           <div key={item._id} className="shadow border p-5 border-gray-400 flex flex-col">
//             <h1 className="text-secondary text-xl font-bold">{item.title}</h1>
//             <hr />
//             {Array.isArray(item.skills) &&
//               item.skills.map((skill, i) => (
//                 <div key={i}>
//                   <div className="text-base font-normal text-primary-80 border border-primary-80 rounded-lg p-4 flex items-center justify-between gap-2 md:text-sm md:p-2 md:gap-1 md:font-medium">
//                     <div>
//                       <img className="w-6 h-6" src={skill.image} alt={skill.name} />
//                       {skill.name}
//                     </div>
//                     <div>
//                       <button className="bg-fivth text-white px-5 py-2 mr-2" onClick={() => onDeleteSkill(item._id, i)}>
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             <div className="flex justify-end gap-5 mt-5">
//               <button className="bg-fivth text-white px-5 py-2" onClick={() => onDeleteCategory(item._id)}>
//                 Delete Category
//               </button>
//               <button
//                 className="bg-primary text-white px-5 py-2"
//                 onClick={() => onEditSkill(item)}
//               >
//                 Edit
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Modal visible={showAddModal} title="Add Category" footer={null} onCancel={() => setShowAddModal(false)}>
//         <Form form={form} layout="vertical" onFinish={onFinishAdd}>
//           <Form.Item
//             name="title"
//             label="Title"
//             rules={[{ required: true, message: "Please input title!" }]}
//           >
//             <input placeholder="Title" />
//           </Form.Item>
//           <Form.Item
//             name="name"
//             label="Name"
//             rules={[{ required: true, message: "Please input Name!" }]}
//           >
//             <input placeholder="Name the Skill" />
//           </Form.Item>
//           <Form.Item
//             name="image"
//             label="Image"
//             rules={[{ required: true, message: "Please input Image URL!" }]}
//           >
//             <input placeholder="Image URL" />
//           </Form.Item>
//           <div className="flex justify-end">
//             <button
//               className="border-primary text-primary px-5 py-2"
//               onClick={() => setShowAddModal(false)}
//             >
//               Cancel
//             </button>
//             <button className="bg-primary text-white px-5 py-2" htmlType="submit">
//               Add
//             </button>
//           </div>
//         </Form>
//       </Modal>

//       <Modal visible={showEditModal} title="Edit Skill" footer={null} onCancel={() => setShowEditModal(false)}>
//         <Form form={form} layout="vertical" onFinish={onFinishEdit} initialValues={itemForEdit || {}}>
          
//           {Array.isArray(itemForEdit?.skills) &&
//             itemForEdit.skills.map((skill, i) => (
//               <div key={i}>
//                 <Form.Item name={`skills[${i}].name`} label="Name">
//                   <input placeholder="Name" defaultValue={skill.name} />
//                 </Form.Item>
//                 <Form.Item name={`skills[${i}].image`} label="Image URL">
//                   <input placeholder="Image URL" defaultValue={skill.image} />
//                 </Form.Item>
//               </div>
//             ))}
//           <div className="flex justify-end">
//             <button
//               className="border-primary text-primary px-5 py-2"
//               onClick={() => setShowEditModal(false)}
//             >
//               Cancel
//             </button>
//             <button className="bg-primary text-white px-5 py-2" htmlType="submit">
//               Update
//             </button>
//           </div>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default AdminSkills;


import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, message } from "antd";
import axios from "axios";
import { hideLoading, ReloadData, showLoading } from "../../redux/rootSlice";

const AdminSkills = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { skills } = portfolioData;
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [itemForEdit, setItemForEdit] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [showAddModal, showEditModal, itemForEdit, form]);

  const onAddCategory = () => {
    setShowAddModal(true);
  };

  // const onDeleteSkill = async (categoryId, skillIndex) => {
  //   try {
  //     dispatch(showLoading());
  //     const category = skills.find((item) => item._id === categoryId);
  //     category.skills.splice(skillIndex, 1);
  //     await axios.put(`/api/skill/update-title/${categoryId}`, category);
  //     dispatch(ReloadData());
  //     dispatch(hideLoading());
  //     message.success("Skill deleted successfully");
  //   } catch (error) {
  //     console.error("Error deleting skill:", error.response ? error.response.data : error.message);
  //     dispatch(hideLoading());
  //     message.error("Failed to delete skill");
  //   }
  // };

  const onDeleteSkill = async (categoryId, skillIndex) => {
    try {
      dispatch(showLoading());
      const category = skills.find((item) => item._id === categoryId);
      category.skills.splice(skillIndex, 1);
      await axios.put(`/api/skill/update-title/${categoryId}`, category);
      dispatch(ReloadData());
      dispatch(hideLoading());
      message.success("Skill deleted successfully");
    } catch (error) {
      console.error("Error deleting skill:", error.response ? error.response.data : error.message);
      dispatch(hideLoading());
      message.error("Failed to delete skill");
    }
  };
  


  const onDeleteCategory = async (id) => {
    try {
      dispatch(showLoading());
      await axios.delete(`/api/skill/delete-title/${id}`);
      dispatch(ReloadData());
      dispatch(hideLoading());
      message.success("Category deleted successfully");
    } catch (error) {
      console.error("Error deleting category:", error.response ? error.response.data : error.message);
      dispatch(hideLoading());
      message.error("Failed to delete category");
    }
  };

  // const onEditSkill = (item) => {
  //   setItemForEdit(item);
  //   setShowEditModal(true);
  // };
  const onEditSkill = (item) => {
    setItemForEdit(item);
    setShowEditModal(true);
  };
  
  const onFinishEdit = async (values) => {
    try {
      dispatch(showLoading());
      await axios.put(`/api/skill/update-title/${itemForEdit._id}`, values);
      dispatch(ReloadData());
      dispatch(hideLoading());
      message.success("Category updated successfully");
      setShowEditModal(false);
    } catch (error) {
      console.error("Error updating category:", error.response ? error.response.data : error.message);
      dispatch(hideLoading());
      message.error("Failed to update category");
    }
  };
  
  // const onFinishAdd = async (values) => {
  //   try {
  //     dispatch(showLoading());
  //     await axios.post("/api/skill/add-skill", values);
  //     dispatch(ReloadData());
  //     dispatch(hideLoading());
  //     message.success("Category added successfully");
  //     setShowAddModal(false);
  //   } catch (error) {
  //     console.error("Error adding category:", error.response ? error.response.data : error.message);
  //     dispatch(hideLoading());
  //     message.error("Failed to add category");
  //   }
  // };
  const onFinishAdd = async (values) => {
    const { title, name, image } = values;
  
    try {
      dispatch(showLoading());
      // Check if the category already exists
      const existingCategory = skills.find(item => item.title === title);
  
      if (existingCategory) {
        // Category exists, add the skill to existing category
        existingCategory.skills.push({ name, image });
        await axios.put(`/api/skill/update-title/${existingCategory._id}`, existingCategory);
      } else {
        // Category does not exist, create a new category with the skill
        await axios.post("/api/skill/add-skill", { title, skillsList: [{ name, image }] });
      }
  
      dispatch(ReloadData());
      dispatch(hideLoading());
      message.success("Category and skill added successfully");
      setShowAddModal(false);
    } catch (error) {
      console.error("Error adding category and skill:", error.response ? error.response.data : error.message);
      dispatch(hideLoading());
      message.error("Failed to add category and skill");
    }
  };
  

  // const onFinishEdit = async (values) => {
  //   try {
  //     dispatch(showLoading());
  //     await axios.put(`/api/skill/update-title/${itemForEdit._id}`, values);
  //     dispatch(ReloadData());
  //     dispatch(hideLoading());
  //     message.success("Category updated successfully");
  //     setShowEditModal(false);
  //   } catch (error) {
  //     console.error("Error updating category:", error.response ? error.response.data : error.message);
  //     dispatch(hideLoading());
  //     message.error("Failed to update category");
  //   }
  // };

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="bg-primary hover:bg-third text-white font-bold py-2 px-5 mt-5 rounded"
          onClick={onAddCategory}
        >
          Add Category
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {skills.map((item) => (
          <div key={item._id} className="shadow border p-5 border-gray-400 flex flex-col">
            <h1 className="text-secondary text-xl font-bold">{item.title}</h1>
            <hr />
            {Array.isArray(item.skills) &&
              item.skills.map((skill, i) => (
                <div key={i}>
                  <div className="text-base font-normal text-primary-80 border border-primary-80 rounded-lg p-4 flex items-center justify-between gap-2 md:text-sm md:p-2 md:gap-1 md:font-medium">
                    <div>
                      <img className="w-6 h-6" src={skill.image} alt={skill.name} />
                      {skill.name}
                    </div>
                    <div>
                      <button className="bg-fivth text-white px-5 py-2 mr-2" onClick={() => onDeleteSkill(item._id, i)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            <div className="flex justify-end gap-5 mt-5">
              <button className="bg-fivth text-white px-5 py-2" onClick={() => onDeleteCategory(item._id)}>
                Delete Category
              </button>
              <button
                className="bg-primary text-white px-5 py-2"
                onClick={() => onEditSkill(item)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal visible={showAddModal} title="Add Category" footer={null} onCancel={() => setShowAddModal(false)}>
        <Form form={form} layout="vertical" onFinish={onFinishAdd}>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please input title!" }]}
          >
            <input placeholder="Title" />
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input Name!" }]}
          >
            <input placeholder="Name the Skill" />
          </Form.Item>
          <Form.Item
            name="image"
            label="Image"
            rules={[{ required: true, message: "Please input Image URL!" }]}
          >
            <input placeholder="Image URL" />
          </Form.Item>
          <div className="flex justify-end">
            <button
              className="border-primary text-primary px-5 py-2"
              onClick={() => setShowAddModal(false)}
            >
              Cancel
            </button>
            <button className="bg-primary text-white px-5 py-2" htmlType="submit">
              Add
            </button>
          </div>
        </Form>
      </Modal>

      <Modal visible={showEditModal} title="Edit Skill" footer={null} onCancel={() => setShowEditModal(false)}>
        <Form form={form} layout="vertical" onFinish={onFinishEdit} initialValues={itemForEdit || {}}>
          
          {Array.isArray(itemForEdit?.skills) &&
            itemForEdit.skills.map((skill, i) => (
              <div key={i}>
                <Form.Item name={`skills[${i}].name`} label="Name">
                  <input placeholder="Name" defaultValue={skill.name} />
                </Form.Item>
                <Form.Item name={`skills[${i}].image`} label="Image URL">
                  <input placeholder="Image URL" defaultValue={skill.image} />
                </Form.Item>
              </div>
            ))}
          <div className="flex justify-end">
            <button
              className="border-primary text-primary px-5 py-2"
              onClick={() => setShowEditModal(false)}
            >
              Cancel
            </button>
            <button className="bg-primary text-white px-5 py-2" htmlType="submit">
              Update
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminSkills;
