import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchAllAirlinesDetails, clearData } from '../../features/allAirlinesDetailsSlice'
import columns from './columns'

import { Layout, Breadcrumb, Table } from 'antd'

const { Header, Content } = Layout;

const AirlinesDetails = () => {
    const dispatch = useDispatch()
    const {data} = useSelector(state => state.allAirlinesDetails)

    useEffect(() => {
        dispatch(fetchAllAirlinesDetails())
        return () => dispatch(clearData())
    }, [dispatch])

    return (
        <Layout className="site-layout">
            <Header className="site-layout-background">All Airlines Table</Header>
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>All Airlines</Breadcrumb.Item>
                </Breadcrumb>
                <Table columns={columns} dataSource={data} rowKey="id" />
            </Content>
        </Layout>
    )
}

export default AirlinesDetails