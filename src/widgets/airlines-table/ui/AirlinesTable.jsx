import { useState } from 'react'
import { useGetAllAirlinesQuery } from '../../../entities/airline/api';
// Libraries
import { Layout, PageHeader, Table } from 'antd'
// Components
import { AirlineViewModal } from '../../../features/airline-view';
import { AirlineCreateModal } from '../../../features/airline-create';
import columns from '../lib/Columns';

const { Content } = Layout;

const AirlinesTableWidget = () => {
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

export default AirlinesTableWidget
