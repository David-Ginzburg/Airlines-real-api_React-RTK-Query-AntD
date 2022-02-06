import { Layout } from 'antd'

const { Footer } = Layout;

const FooterComponent = () => {
    return (
        <Footer style={{ textAlign: 'center' }}>
            This was made for educational purposes. Api provided by <a href='https://www.instantwebtools.net/fake-rest-api' target='_blank' rel="noreferrer">https://www.instantwebtools.net/fake-rest-api</a>
        </Footer>
    )
}

export default FooterComponent