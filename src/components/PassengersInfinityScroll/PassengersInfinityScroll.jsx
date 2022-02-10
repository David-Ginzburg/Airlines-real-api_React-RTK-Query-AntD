import { useState, useEffect, useRef } from 'react'
import { useGetAllPassengersQuery } from '../../API'
import usePagination from '../../hooks/usePagination';
// Libraries
import { Layout, List, Card, PageHeader, Spin } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { useObserver } from '../../hooks/useObserver';

const { Content } = Layout;

const PassengersInfinityScroll = () => {
    const [pagination, setPagination] = usePagination()
    const [passengers, setPassengers] = useState([])
    const lastElement = useRef()

    const { data: { data = [], totalPassengers = '' } = {}, isFetching } = useGetAllPassengersQuery(pagination)

    const cb = () => {
        setPagination(prev => ({current: prev.current + 1, pageSize: prev.pageSize}))
    }

    useObserver(lastElement, data.length < totalPassengers, isFetching, cb)

    useEffect(() => {
        data.length && setPassengers(prev => [...prev, ...data])
    }, [data])

    return (
        <Layout className="site-layout">
            <PageHeader className="site-layout-background" title='All Passengers infinity scroll' />
            <Content style={{ margin: '10px' }}>
                <List
                    dataSource={passengers}
                    loading={isFetching}
                    style={{padding: '5px'}}
                    renderItem={item => (
                        <List.Item
                            key={item.id}
                        >
                            <Card style={{width: '100%'}}>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.airline[0].logo} />}
                                    title={item.name}
                                    description={`country: ${item.airline[0].country} company: ${item.airline[0].name} slogan: ${item.airline[0].slogan}`}
                                />
                            </Card>
                        </List.Item>
                    )}
                />
                <div ref={lastElement}></div>
                <Spin spinning={isFetching} size='large' style={{width: '100%'}} />
            </Content>
        </Layout>
        
    )
}

export default PassengersInfinityScroll