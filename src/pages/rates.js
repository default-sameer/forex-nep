import {useState, useEffect} from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/api'
import useSWR from 'swr'



export default function Rates(){
  const [page, setPage] = useState(1)
  const [perpage, setPerPage] = useState(2)
  const [from, setFrom] = useState('2021-12-01')
  const [to, setTo] = useState(null)

  useEffect(() => {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    setTo(date);
  }, []);

  const fetcher = async () => {
    const res = await axios.get(`${BASE_URL}/api/rates/?per_page=${perpage}&page=${page}&from=${from}&to=${to}`)
    const data = res.data
    return data
  }
  const {data, error} = useSWR('rates', fetcher)

  if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div> 
  if (!data) return <div><img height={50} width={250} src='./gif/loading.gif' alt='loading gif'></img></div>
  return(
    <>
    {/* {data.map(rate => <div>{rate.rates.currency}</div>)} */}
    <h1>{to}</h1>
    {JSON.stringify(data)}
    </>
  )
}

