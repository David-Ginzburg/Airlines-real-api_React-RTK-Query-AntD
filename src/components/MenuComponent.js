import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom';

import { Menu, Layout } from 'antd';
import {
	DingtalkOutlined,
	UserOutlined
  } from '@ant-design/icons'

const { Sider } = Layout;

const MenuComponent = withRouter(props => {
	const [collapsed, setCollapsed] = useState(false)
	const { location } = props

	return (
		<Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
			<div className="logo" />
			<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" selectedKeys={[location.pathname]}>
				<Menu.Item key="/airlines" icon={<DingtalkOutlined />}>
					<Link to="/airlines">Airlines</Link>
				</Menu.Item>
				<Menu.Item key="/passengers" icon={<UserOutlined />}>
					<Link to="/passengers">Passengers</Link>
				</Menu.Item>
			</Menu>
		</Sider>
	)
})


export default MenuComponent