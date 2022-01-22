import React from "react";
import { Link } from "react-router-dom";
import { Image, Space } from "antd";

const columns = [
    {
        title: "logo",
        dataIndex: "logo",
        key: "logo",
        render: (logo, record) => (
            <Image width={200} src={logo} alt={record.name} />
        ),
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Country",
        dataIndex: "country",
        key: "country",
    },
    {
        title: "Slogan",
        dataIndex: "slogan",
        key: "slogan",
    },
    {
        title: "Head quaters",
        key: "head_quaters",
        dataIndex: "head_quaters",
    },
    {
        title: "Website",
        key: "website",
        dataIndex: "website",
        render: (text) => (
            <a
                href={`https://${text}`}
                rel="noopener noreferrer"
                target="_blank"
            >
                {text}
            </a>
        ),
    },
    {
        title: "Established",
        key: "established",
        dataIndex: "established",
        sorter: (a, b) => a.established - b.established,
    },
    {
        title: "Action",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <Link to={`/airlines/${record.id}`}>View</Link>
            </Space>
        ),
    },
];

export default columns;