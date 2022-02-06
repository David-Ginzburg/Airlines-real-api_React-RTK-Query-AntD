import { useState, useEffect, useCallback } from 'react'
import { useGetAllPassengersQuery } from '../../API'
import usePagination from '../../hooks/usePagination';
// Libraries
import { Layout, List, Card, PageHeader } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';

const { Content } = Layout;

const PassengersInfinityScroll = () => {
    const [pagination, setPagination] = usePagination()
    const [passengers, setPassengers] = useState([])
    const [fetching, setFetching] = useState(false)

    const { data: { data = [], totalPassengers = '' } = {}, isLoading } = useGetAllPassengersQuery(pagination)

    useEffect(() => {
        if (fetching) {
            setPagination(prev => ({current: prev.current + 1, pageSize: prev.pageSize}))
            setFetching(prev => !prev)
        }
    }, [fetching, setPagination])

    useEffect(() => {
        data.length && setPassengers(prev => [...prev, ...data])
    }, [data])

    const scrollHandler = useCallback((e) => {
        if ((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) && (passengers.length < totalPassengers)) {
            setFetching(prev => !prev)
        }
    }, [passengers.length, totalPassengers])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function() {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [scrollHandler])

    return (
        <Layout className="site-layout">
            <PageHeader className="site-layout-background" title='All Passengers Infinity Scroll' />
            <Content style={{ margin: '10px' }}>
                <List
                    dataSource={passengers}
                    loading={isLoading}
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
            </Content>
        </Layout>
        
    )
}

export default PassengersInfinityScroll