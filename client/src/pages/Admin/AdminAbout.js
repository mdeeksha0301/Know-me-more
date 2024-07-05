import React from 'react';
import { Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {showLoading, hideLoading} from '../../redux/rootSlice';
import axios from 'axios';
import {message} from 'antd';

export const AdminAbout = () => {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);

    const onFinish = async(values) => {
        try {
            dispatch(showLoading())
            const response = await axios.post("/api/portfolio/update-about", {
                ...values,
                _id: portfolioData.about._id,
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
            <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData.about}>
                <Form.Item name='lottieURL' label='Lottie URL'>
                    <Input placeholder='Lottie URL' />
                </Form.Item>
                <Form.Item name='description1' label='Description1'>
                    <Input.TextArea placeholder='Description1' />
                </Form.Item>
                <Form.Item name='description2' label='Description2'>
                    <Input.TextArea placeholder='Description2' />
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
