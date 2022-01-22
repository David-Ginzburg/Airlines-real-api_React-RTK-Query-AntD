import React from 'react'
import { useGetAllPassengersQuery } from '../../API'
// Libraries
import columns from './columns'
// Components
import { Layout, Table } from 'antd'
import usePagination, { paginationConfig } from '../../hooks/usePagination';

const { Header, Content } = Layout;

const PassengersTable = () => {
    const [filters, setFilters] = usePagination()

    const { data: { data = [], totalPassengers = '' } = {}, isLoading } = useGetAllPassengersQuery(filters)

    const handlePaginationChange = (current, pageSize) => {
        setFilters((prev) => ({ ...prev, current, pageSize }))
    }

    return (
        <Layout className="site-layout">
            <Header className="site-layout-background">All Passengers Table</Header>
            <Content style={{ margin: '16px' }}>
                <Table 
                    columns={columns} 
                    dataSource={data} 
                    rowKey="_id" 
                    loading={isLoading} 
                    pagination={{
                        ...paginationConfig,
                        pageSize: filters.pageSize,
                        current: filters.current,
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