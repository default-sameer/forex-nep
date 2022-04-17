import axios from "axios"

export default async function handler(req, res) {
    const response = await axios.get('https://nrb.org.np/api/forex/v1/rate')
    const { payload } = response.data.data
    res.json(payload)
}
