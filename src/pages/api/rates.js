import axios from "axios"

export default async function handler(req, res) {
    const{per_page, page, from, to} = req.query
    const response = await axios.get(`https://nrb.org.np/api/forex/v1/rates?per_page=${per_page}&page=${page}&from=${from}&to=${to}`)
    const {payload} = response.data.data
    res.json(payload)
}
