import { useEffect } from 'react'
import { Modal, Form, Input, Select, InputNumber } from 'antd'
import { isVoidObject } from '../../helpers/index'
import { useCreatePassengerMutation, useEditPassengerMutation } from '../../API'

const layoutFields = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
}

const PassengerModal = ({selectedPassenger, setSelectedPassenger, allAirlinesOptions, allAirlinesLoading}) => {
    const [form] = Form.useForm()
    const [createPassenger] = useCreatePassengerMutation()
    const [editPassenger] = useEditPassengerMutation()
    
    const handleCloseModal = () => {
        setSelectedPassenger({})
        form.resetFields()
    }

    const handleCreateEditPassenger = () => {
        if (selectedPassenger.new) {
            createPassenger(form.getFieldsValue())
        } else {
            editPassenger({body: {...form.getFieldsValue()}, id: selectedPassenger['_id']})
        }
        handleCloseModal()
    }

    useEffect(() => {
        !isVoidObject(selectedPassenger) && !selectedPassenger.new && form.setFieldsValue({name: selectedPassenger.name, trips: selectedPassenger.trips, airline: selectedPassenger.airline?.[0].id})
    }, [selectedPassenger, form])

    return (
        <Modal
            title={selectedPassenger.new ? 'Create passenger' : 'Edit passenger'}
            visible={selectedPassenger.name || selectedPassenger.new}
            onCancel={handleCloseModal}
            onOk={handleCreateEditPassenger}
            width={400}
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
                    label='Trips'
                    name='trips'
                >
                    <InputNumber controls={false} />
                </Form.Item>
                <Form.Item
                    label='Airline'
                    name='airline'
                >
                    <Select options={allAirlinesOptions} loading={allAirlinesLoading} />
                </Form.Item>
            </Form>
        </Modal>)
}

export default PassengerModal