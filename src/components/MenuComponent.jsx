import { useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
// Libraries
import { Menu, Layout } from 'antd';
import {
	DingtalkOutlined,
	UserOutlined,
	LoadingOutlined,
	DashboardOutlined
} from '@ant-design/icons'
import { useGetAllAirlinesQuery, useGetAllPassengersQuery } from '../API';
import usePagination from '../hooks/usePagination';

const { Sider } = Layout;

const MenuComponent = withRouter(props => {
	const [collapsed, setCollapsed] = useState(false)
	const { location } = props
	const [filters] = usePagination()
	const { isLoading: isAirlinesLoading } = useGetAllAirlinesQuery()
	const { isLoading: isPassengersLoading } = useGetAllPassengersQuery(filters)

	return (
		<Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(prev => !prev)}>
			<img src='https://www.instantwebtools.net/images/insta_main_logo.png' alt='Logo' style={{display: 'block', backgroundColor: 'gray', width: '100%'}} />
			<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" selectedKeys={[location.pathname]}>
				<Menu.Item key="airlines" icon={<DingtalkOutlined />}>
					<Link to="/airlines">Airlines {isAirlinesLoading && <LoadingOutlined />}</Link>
				</Menu.Item>
				<Menu.Item key="passengers" icon={<UserOutlined />}>
					<Link to="/passengers">Passengers {isPassengersLoading && <LoadingOutlined />}</Link>
				</Menu.Item>
				<Menu.Item key="passengersInfinityScroll" icon={<UserOutlined />}>
					<Link to="/passengersInfinityScroll">Passengers infinity {isPassengersLoading && <LoadingOutlined />}</Link>
				</Menu.Item>
				<Menu.Item key="dashboard" icon={<DashboardOutlined />}>
					<Link to="/dashboard">Dashboard {(isPassengersLoading || isAirlinesLoading) && <LoadingOutlined />}</Link>
				</Menu.Item>
			</Menu>
		</Sider>
	)
})

export default MenuComponent