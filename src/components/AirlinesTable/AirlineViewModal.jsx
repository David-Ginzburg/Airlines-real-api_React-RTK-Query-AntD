import { Modal, Descriptions, Image } from 'antd'

const AirlineViewModal = ({selectedAirline, setSelectedAirline}) => {
    const handleCloseModal = () => {
        setSelectedAirline({})
    }

    return (
        <Modal
            title={selectedAirline.name}
            visible={selectedAirline.name} 
            onCancel={handleCloseModal}
            width={800}
            footer={false}
        >
            <Descriptions bordered>
                <Descriptions.Item label='Country'>{selectedAirline.country}</Descriptions.Item>
                <Descriptions.Item label='Established' span={2}>{selectedAirline.established}</Descriptions.Item>
                <Descriptions.Item label='Logo'><Image width={100} src={selectedAirline.logo} alt={selectedAirline.name} preview={false} /></Descriptions.Item>
                <Descriptions.Item label='Slogan' span={2}>{selectedAirline.slogan}</Descriptions.Item>
                <Descriptions.Item label='Head quaters' span={4}>{selectedAirline.head_quaters}</Descriptions.Item>
                <Descriptions.Item label='Website'>
                    <a
                        href={`https://${selectedAirline.website}`}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {selectedAirline.website}
                    </a>
                </Descriptions.Item>
            </Descriptions>
        </Modal>)
}

export default AirlineViewModal