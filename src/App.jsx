import { Switch, Route, Redirect } from 'react-router-dom'
// Libraries
import { Layout } from 'antd'
import './App.less'
// Components
import MenuComponent from "./components/MenuComponent"
import AirlinesTable from "./components/AirlinesTable/AirlinesTable"
import PassengersTable from "./components/PassengersTable/PassengersTable"
import FooterComponent from "./components/FooterComponent"
import PassengersInfinityScroll from "./components/PassengersInfinityScroll/PassengersInfinityScroll"
import Dashboard from "./components/Dashboard/Dashboard"

const App = () => {
    return (
		<Layout style={{ minHeight: '100vh', width: 'auto' }}>
			<MenuComponent />
			<Layout style={{ width: 'auto' }}>
				<Switch>
					<Route exact path="/airlines" component={AirlinesTable} />
					<Route exact path="/passengers" component={PassengersTable} />
					<Route exact path="/passengersInfinityScroll" component={PassengersInfinityScroll} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Redirect from="*" to="/airlines" />
				</Switch>
				<FooterComponent />
			</Layout>
		</Layout>
    )
}

export default App;