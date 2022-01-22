import React from "react";
import { Link } from "react-router-dom";
import { Space, Button } from "antd";
import { useDeletePassengerMutation } from '../../API'
import {
	DeleteOutlined,
} from '@ant-design/icons'

const DeletePassenger = ({id}) => {
    const [deletePassenger] = useDeletePassengerMutation()
    const handleDeletePassenger = () => {
        deletePassenger(id)
    }

    return <Button type="danger" icon={<DeleteOutlined />} onClick={handleDeletePassenger} />
}


const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        width: 300,
        render: (rec) => rec ? rec : '-',
    },
    {
        title: "Trips",
        dataIndex: "trips",
        key: "trips",
        width: 20,
        render: (rec) => rec ? rec : 0,
    },
    {
        title: "Airline",
        dataIndex: "airline",
        key: "airline",
        width: '80%',
        render: (rec) => rec[0].name,
    },
    {
        title: "Action",
        key: "action",
        align: 'center',
        render: (_, record) => (
            <Space size="middle">
                <Link to={`/passengers/${record._id}`}>View</Link>
                <DeletePassenger id={record._id} />
            </Space>
        ),
    },
];

export default columns;