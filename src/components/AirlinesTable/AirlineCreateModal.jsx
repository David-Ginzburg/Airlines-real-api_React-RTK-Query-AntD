import { useState } from 'react'
import { Modal, Form, Input, InputNumber, Button } from 'antd'
import { useCreateAirlineMutation } from '../../API'

const layoutFields = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
}

const AirlineCreateModal = () => {
    const [isOpened, setIsOpened] = useState(false)
    const [form] = Form.useForm()
    const [createAirline] = useCreateAirlineMutation()
    
    const handleOpenModal = () => {
        setIsOpened(prev => !prev)
    }

    const handleCloseModal = () => {
        setIsOpened(prev => !prev)
        form.resetFields()
    }

    const handleCreateEditPassenger = () => {
        createAirline(form.getFieldsValue())
        handleCloseModal()
    }

    return (
        <>
            <Button type='primary' onClick={handleOpenModal}>Create Airline</Button>
            <Modal
                title='Create airline'
                visible={isOpened}
                onCancel={handleCloseModal}
                onOk={handleCreateEditPassenger}
                width={450}
                destroyOnClose
            >
                <Form
                    form={form}
                    { ... layoutFields }
                >
                    <Form.Item
                        label='Name'
                        name='name'
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Logo link'
                        name='logo'
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Country'
                        name='country'
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Slogan'
                        name='slogan'
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Head quaters'
                        name='head_quaters'
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Website'
                        name='website'
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Established'
                        name='established'
                    >
                        <InputNumber controls={false} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default AirlineCreateModal