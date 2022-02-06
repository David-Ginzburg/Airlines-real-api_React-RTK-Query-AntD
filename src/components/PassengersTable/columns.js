import { useDeletePassengerMutation } from '../../API'
// Libraries
import { Space, Button, Popconfirm } from "antd";
import {
	DeleteOutlined,
    EditOutlined
} from '@ant-design/icons'

const DeletePassenger = ({id}) => {
    const [deletePassenger] = useDeletePassengerMutation()
    const handleDeletePassenger = () => {
        deletePassenger(id)
    }

    return (
        <Popconfirm
            onConfirm={handleDeletePassenger}
            title="Are you sure?" 
            okText="Yes"
            cancelText="No"
        >
            <Button type="danger" icon={<DeleteOutlined />} />
        </Popconfirm>
    )
}

const columns = (handleOpenModal) => [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        width: 200,
        render: (rec) => rec ? rec : '-',
    },
    {
        title: "Trips",
        dataIndex: "trips",
        key: "trips",
        width: 100,
        render: (rec) => rec ? rec : 0,
    },
    {
        title: "Airline",
        dataIndex: "airline",
        key: "airline",
        width: '60%',
        render: (rec) => rec[0].name,
    },
    {
        title: "Action",
        key: "action",
        align: 'center',
        width: 100,
        render: (_, record) => (
            <Space size="middle">
                <Button onClick={() => handleOpenModal(record)} icon={<EditOutlined />} type='primary' />
                <DeletePassenger id={record._id} />
            </Space>
        ),
    },
];

export default columns;