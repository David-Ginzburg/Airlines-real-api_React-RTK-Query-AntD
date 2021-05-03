import axios from 'axios'

const baseUrl = 'https://api.instantwebtools.net/v1'

const API = {
    getAllAirlinesDetails: () => axios(`${baseUrl}/airlines`).then(r => r.data),
    getOneAirlineDetails: (id) => axios(`${baseUrl}/airlines/${id}`).then(r => r.data)
}

export default API