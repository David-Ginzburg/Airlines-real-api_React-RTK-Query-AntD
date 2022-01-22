import { Modal } from 'antd'

const AirlineModal = ({selectedAirline, setSelectedAirline}) => {
    const handleCloseModal = () => {
        setSelectedAirline({})
    }

    return <Modal visible={selectedAirline.id} onCancel={handleCloseModal}>
        <div>{JSON.stringify(selectedAirline)}</div>
    </Modal>
}

export default AirlineModal