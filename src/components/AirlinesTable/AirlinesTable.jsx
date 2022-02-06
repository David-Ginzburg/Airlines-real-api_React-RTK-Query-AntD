import { useState } from 'react'
import { useGetAllAirlinesQuery } from '../../API'
// Libraries
import { Layout, PageHeader, Table } from 'antd'
// Components
import AirlineViewModal from './AirlineViewModal';
import AirlineCreateModal from './AirlineCreateModal';
import columns from './Columns';

const { Content } = Layout;

const AirlinesTable = () => {
    const { data = [], isLoading } = useGetAllAirlinesQuery()
    const [selectedAirline, setSelectedAirline] = useState({})

    const handleOpenModal = (record) => {
        setSelectedAirline(record)
    }

    return (
        <Layout className="site-layout">
            <AirlineViewModal selectedAirline={selectedAirline} setSelectedAirline={setSelectedAirline} />
            <PageHeader 
                className="site-layout-background" 
                title='All Airlines Table' 
                extra={[<AirlineCreateModal key={1} />]}
            />
            <Content style={{ margin: '16px' }}>
                <Table 
                    columns={columns(handleOpenModal)} 
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