import React from "react"
import { Switch, Route, Redirect } from 'react-router-dom'
// Libraries
import { Layout } from 'antd'
import './App.less'
// Components
import MenuComponent from "./components/MenuComponent"
import AirlinesTable from "./components/AirlinesTable/AirlinesTable"
import PassengersTable from "./components/PassengersTable/PassengersTable"
import FooterComponent from "./components/FooterComponent"

const App = () => {
    return (
		<Layout style={{ minHeight: '100vh' }}>
			<MenuComponent />
			<Layout>
				<Switch>
					<Route exact path="/airlines" component={AirlinesTable} />
					<Route exact path="/passengers" component={PassengersTable} />
					<Redirect from="*" to="/airlines" />
				</Switch>
				<FooterComponent />
			</Layout>
		</Layout>
    )
}

export default App;