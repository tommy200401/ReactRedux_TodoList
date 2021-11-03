import { useState } from 'react';
import { Modal, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../apis/todos';

const EditTodoBox = ({ todo }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [text, setText] = useState("")
    const dispatch = useDispatch();
    
    // show box
    const showModal = () => {
        setIsModalVisible(true);
    };

    // when click ok
    const handleOk = () => {
        updateTodo({ id: todo.id, text, done: todo.done })     // unchange id and status
            .then(response => (dispatch({ type: 'todo/updateStatus', payload: response.data })));
        setIsModalVisible(false);
    };

    // when click cancel
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button icon={<EditOutlined />} onClick={showModal}></Button>
            <Modal title="Edit your todo item here:" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input placeholder='e.g. Finish parking boy exercise' onChange={event => setText(event.target.value)}></Input>
            </Modal>
        </>
    );
};

export default EditTodoBox;