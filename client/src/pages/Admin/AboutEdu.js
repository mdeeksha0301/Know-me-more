
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form } from "antd";
import { hideLoading, ReloadData, showLoading } from "../../redux/rootSlice";
import { message } from "antd";
import axios from "axios";

export const AboutEdu = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { educations } = portfolioData;
  const [showModel, setShowModel] = React.useState(false);
  const [itemForEdit, setItemFoeEdit] = React.useState(null);
  const [type, setType] = React.useState("add");

  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      let response;
      if (itemForEdit) {
        response = await axios.post("/api/portfolio/update-education", {
          ...values,
          _id: itemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-education", values);
      }

      dispatch(hideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowModel(false);
        setItemFoeEdit(null);
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

  const onDelete = async (item) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/portfolio/delete-education", {
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
            setItemFoeEdit(null);
            setShowModel(true);
          }}
        >
          Add Education
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {educations.map((education) => (
          <div className="shadow border p-5 border-gray-400 flex flex-col ">
            <h1 className="text-secondary text-xl font-bold">
              {education.period}
            </h1>
            <hr />
            <h1>Company: {education.company}</h1>
            <h1>Role: {education.title} </h1>
            <h1> {education.description}</h1>
            <div className="flex justify-end gap-5 mt-5">
              <button
                className="bg-fivth text-white px-5 py-2 "
                onClick={() => {
                  onDelete(education);
                }}
              >
                Delete
              </button>
              <button
                className="bg-primary text-white px-5 py-2 "
                onClick={() => {
                  setItemFoeEdit(education);
                  setShowModel(true);
                  setType("edit");
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {(type === "add" || itemForEdit) && (
        <Modal
          visible={showModel}
          title={itemForEdit ? "Edit Education" : "Add Education"}
          footer={null}
          onCancel={() => {
            setShowModel(false);
            setItemFoeEdit(null);
          }}
        >
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={itemForEdit || {}}
          >
            <Form.Item name="period" label="Period">
              <input placeholder="Period" />
            </Form.Item>
            <Form.Item name="company" label="Company">
              <input placeholder="Company" />
            </Form.Item>
            <Form.Item name="title" label="Title">
              <input placeholder="Title" />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <input placeholder="Description" />
            </Form.Item>

            <div className="flex justify-end">
              <button
                className="border-primary text-primary px-5 py-2"
                onClick={() => {
                  setShowModel(false);
                  setItemFoeEdit(null);
                }}
              >
                Cancel
              </button>
              <button className="bg-primary text-white px-5 py-2">
                {itemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}
