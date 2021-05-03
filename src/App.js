import React from "react"
import { Switch, Route, Redirect } from 'react-router-dom'

import { Layout } from 'antd'
import "antd/dist/antd.css"

import MenuComponent from "./components/MenuComponent"
import AirlinesDetails from "./components/AirlineDetails/AirlinesDetails"
import FooterComponent from "./components/FooterComponent"

const App = () => {
    return (
		<Layout style={{ minHeight: '100vh' }}>
			<MenuComponent />
			<Layout>
				<Switch>
					<Route exact path="/airlines" component={AirlinesDetails} />
					<Route exact path="/passengers" component={AirlinesDetails} />
					<Redirect from="*" to="/airlines" />
				</Switch>
				<FooterComponent />
			</Layout>
		</Layout>
    )
}

export default App;