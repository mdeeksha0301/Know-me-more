import React from 'react';
import { Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {showLoading, hideLoading} from '../../redux/rootSlice';
import axios from 'axios';
import {message} from 'antd';

export const AdminIntro = () => {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);

    const onFinish = async(values) => {
        try {
            dispatch(showLoading())
            const response = await axios.post("/api/portfolio/update-intro", {
                ...values,
                _id: portfolioData.intro._id,
            });
            dispatch(hideLoading())
            if(response.data.success){
                message.success(response.data.message);
            }
            else{
                message.error(response.data.message)
            }
        } catch (error) {
            dispatch(hideLoading());
            message.error(error.message)
        }
    };

    return (
        <div>
            <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData.intro}>
                <Form.Item name='welcomText' label='Welcome Text'>
                    <Input placeholder='Welcome Text' />
                </Form.Item>
                <Form.Item name='name' label='Name'>
                    <Input placeholder='Name' />
                </Form.Item>
                <Form.Item name='caption' label='Caption'>
                    <Input placeholder='Caption' />
                </Form.Item>
                <Form.Item name='decription' label='Description'>
                    <Input.TextArea placeholder='Description' />
                </Form.Item>
                <Form.Item name='image' label='Image URL'>
                    <Input placeholder='Image URL' />
                </Form.Item>
                <div className='flex justify-end'>
                    <button className='px-10 py-2 bg-primary text-fivth' type='submit'>
                        Save
                    </button>
                </div>
            </Form>
        </div>
    );
};
