import { useState, useMemo } from 'react'
import { useGetAllAirlinesQuery, useGetAllPassengersQuery } from '../../API'
import usePagination, { paginationConfig } from '../../hooks/usePagination';
// Libraries
import { Layout, PageHeader, Table, Button } from 'antd'
// Components
import columns from './columns'
import PassengerModal from './PassengerModal'

const { Content } = Layout;

const PassengersTable = () => {
    const [pagination, setPagination] = usePagination()
    const [selectedPassenger, setSelectedPassenger] = useState({})

    const { data: { data: allPassengers = [], totalPassengers = '' } = {}, isLoading: allPassengersLoading } = useGetAllPassengersQuery(pagination)
    const { data: allAirlines = [], isLoading: allAirlinesLoading } = useGetAllAirlinesQuery()

    const allAirlinesOptions = useMemo(() => allAirlines.map(item => ({value: item.id, label: item.name})), [allAirlines])

    const handlePaginationChange = (current, pageSize) => {
        setPagination((prev) => ({ ...prev, current, pageSize }))
    }

    const handleOpenModal = (record = {new: true}) => {
        setSelectedPassenger(record)
    }

    return (
        <Layout className="site-layout">
            <PassengerModal setSelectedPassenger={setSelectedPassenger} selectedPassenger={selectedPassenger} allAirlinesOptions={allAirlinesOptions} allAirlinesLoading={allAirlinesLoading} />
            <PageHeader 
                className="site-layout-background" 
                title='All Passengers Table' 
                extra={[<Button key='1' onClick={() => handleOpenModal()} type='primary'>Create passenger</Button>]}
            />
            <Content style={{ margin: '16px' }}>
                <Table 
                    columns={columns(handleOpenModal)}
                    dataSource={allPassengers} 
                    rowKey="_id"
                    loading={allPassengersLoading} 
                    pagination={{
                        ...paginationConfig,
                        pageSize: pagination.pageSize,
                        current: pagination.current,
                        total: totalPassengers || 0,
                        onChange: handlePaginationChange,
                    }}
                    bordered
                />
            </Content>
        </Layout>
    )
}

export default PassengersTable