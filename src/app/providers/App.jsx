import { Switch, Route, Redirect } from 'react-router-dom'
// Libraries
import { Layout } from 'antd'
import '../styles/App.less'
// Components
import { AppMenu, AppFooter } from '../ui';
import AirlinesPage from '../../pages/AirlinesPage';
import PassengersPage from '../../pages/PassengersPage';
import PassengersInfinityPage from '../../pages/PassengersInfinityPage';
import DashboardPage from '../../pages/DashboardPage';

const App = () => {
    return (
		<Layout style={{ minHeight: '100vh', width: 'auto' }}>
			<AppMenu />
			<Layout style={{ width: 'auto' }}>
				<Switch>
					<Route exact path="/airlines" component={AirlinesPage} />
					<Route exact path="/passengers" component={PassengersPage} />
					<Route exact path="/passengersInfinityScroll" component={PassengersInfinityPage} />
					<Route exact path="/dashboard" component={DashboardPage} />
					<Redirect from="*" to="/airlines" />
				</Switch>
				<AppFooter />
			</Layout>
		</Layout>
    )
}

export default App;
