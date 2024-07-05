import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form } from "antd";
import { hideLoading, ReloadData, showLoading } from "../../redux/rootSlice";
import { message } from "antd";
import axios from "axios";

const AdminProject = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  const [showAddEditModel, setShowAddEditModel] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type, setType] = React.useState("add");
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log(values); 
    try {
      const tempTechnologies = values.technologies.split(",");
      values.technologies = tempTechnologies;
      dispatch(showLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post("/api/portfolio/update-project", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-project", values);
      }

      dispatch(hideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModel(false);
        setSelectedItemForEdit(null);
        dispatch(hideLoading());
        dispatch(ReloadData(true));
        form.resetFields();
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message);
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/portfolio/delete-project", {
        _id: item._id,
      });
      dispatch(hideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(hideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="bg-primary hover:bg-third text-white font-bold py-2 px-5 mt-5 rounded"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModel(true);
          }}
        >
          Add Project
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {projects.map((project) => (
          <div key={project._id}  className="shadow border p-5 border-gray-400 flex flex-col ">
            <h1 className="text-secondary text-xl font-bold">
              {project.title}
            </h1>
            <hr />
            <img src={project.image} className="h-62 w-82" />
            <h1>Category: {project.category} </h1>
            <h1>title: {project.title} </h1>
            <h1> {project.link1} </h1>
            <h1> {project.link2} </h1>
            <h1> {project.description}</h1>
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
            <div className="flex justify-end gap-5 mt-5">
              <button
                className="bg-fivth text-white px-5 py-2 "
                onClick={() => {
                  onDelete(project);
                }}
              >
                Delete
              </button>
              <button
                className="bg-primary text-white px-5 py-2 "
                onClick={() => {
                  setSelectedItemForEdit(project);
                  setShowAddEditModel(true);
                  setType("edit");
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {(type === "add" || selectedItemForEdit) && (
        <Modal
          open={showAddEditModel}
          title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
          footer={null}
          onCancel={() => {
            setShowAddEditModel(false);
            setSelectedItemForEdit(null);
          }}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={
              {
                ...selectedItemForEdit,
                // category: selectedItemForEdit?.category,
                technologies: selectedItemForEdit?.technologies.join(" , "),
              } || {}
            }
          >
            
            <Form.Item name="overview" label="Overview">
              <input placeholder="Overview" />
            </Form.Item>
            <Form.Item name="image" label="Image">
              <input placeholder="Image" />
            </Form.Item>
            <Form.Item name="title" label="Title">
              <input placeholder="Title" />
            </Form.Item>
            <Form.Item name="period" label="Period">
              <input placeholder="Period" />
            </Form.Item>
            <Form.Item name="link1" label="Link1 ">
              <input placeholder="Link1 " />
            </Form.Item>
            <Form.Item name="link2" label="Link2 ">
              <input placeholder="Link2 " />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <textarea placeholder="Description" />
            </Form.Item>
            <Form.Item name="technologies" label="Technologies">
              <input placeholder="Technologies" />
            </Form.Item>
            <Form.Item name="category" label="Category">
              <input placeholder="Category" />
            </Form.Item>

            <div className="flex justify-end">
              <button
                className="border-primary text-primary px-5 py-2"
                onClick={() => {
                  setShowAddEditModel(false);
                  setSelectedItemForEdit(null);
                }}
              >
                Cancel
              </button>
              <button className="bg-primary text-white px-5 py-2">
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default AdminProject;
