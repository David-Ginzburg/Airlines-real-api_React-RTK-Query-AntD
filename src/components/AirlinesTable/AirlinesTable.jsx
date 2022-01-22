import React, { useState } from 'react'
import { useGetAllAirlinesQuery } from '../../API'
// Libraries
import { Layout, Table, Image, Space, Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'
// Components
import AirlineModal from './AirlineModal';
//import columns from './columns'

const { Header, Content } = Layout;

const AirlinesTable = () => {
    const { data = [], isLoading } = useGetAllAirlinesQuery()
    const [selectedAirline, setSelectedAirline] = useState({})

    const handleUpdateClick = (record) => {
        setSelectedAirline(record)
    }

    const columns = [
        {
            title: "logo",
            dataIndex: "logo",
            key: "logo",
            render: (text, record) => (
                <Image width={100} src={text} alt={record.name} />
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
            align:  'center',
            sorter: (a, b) => a.established - b.established,
        },
        {
            title: "Action",
            key: "action",
            align:  'center',
            render: (_, record) => (
                <Space size="middle">
                    <Button onClick={() => handleUpdateClick(record)} icon={<EditOutlined/>} type='primary' />
                </Space>
            ),
        },
    ];

    return (
        <Layout className="site-layout">
            <AirlineModal selectedAirline={selectedAirline} setSelectedAirline={setSelectedAirline} />
            <Header className="site-layout-background">All Airlines Table</Header>
            <Content style={{ margin: '16px' }}>
                <Table 
                    columns={columns} 
                    dataSource={data} 
                    rowKey="id" 
                    loading={isLoading} 
                    bordered
                />
            </Content>
        </Layout>
    )
}

export default AirlinesTable