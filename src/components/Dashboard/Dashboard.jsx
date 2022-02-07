import { useGetAllAirlinesQuery } from '../../API';
import { Card, Col, Layout, PageHeader, Row } from 'antd'
// Components
import LineYearAirlines from './LineYearAirlines'
import PieCountryAirlines from './PieCountryAirlines';

const { Content } = Layout;

const Dashboard = () => {
    const { data = [] } = useGetAllAirlinesQuery()

    const lineYearData = Object.entries(data.reduce(
        (finalData, {established = ''}) => {
            if (established && established.length === 4 && Number(established) > 1900 && Number(established) < 2100 && finalData[established]) {
                return {...finalData, [established]: finalData[established] + 1}
            } else if (established && established.length === 4 && Number(established) > 1900 && Number(established) < 2100) {
                return {...finalData, [established]: 1}
            } else {
                return finalData
            }
        }, {})
    ).map(item => ({year: item[0], value: item[1]}))

    const pieCountryData = Object.entries(data.reduce(
        (finalData, {country = ''}) => {
            if (country && finalData[country]) {
                return {...finalData, [country]: finalData[country] + 1}
            } else if (country) {
                return {...finalData, [country]: 1}
            } else {
                return finalData
            }
        }, {})
    ).filter(item => item[1] > 30).map(item => ({type: item[0], value: item[1]}))
   
    return (
        <Layout className="site-layout">
            <PageHeader
                className="site-layout-background" 
                title='Dashboard'
            />
            <Content style={{ margin: '30px' }}>
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <Card
                            title="Airline registrations per year (between year 1900 and 2100)"
                        >
                            <LineYearAirlines lineYearData={lineYearData} />
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card
                            title="Airlines per countries (over 30 names)"
                        >
                            <PieCountryAirlines pieCountryData={pieCountryData} />
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
};

export default Dashboard