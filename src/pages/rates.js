import {useState} from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/api'
import useSWR from 'swr'



export default function Rates(){
  const [page, setPage] = useState(1)
  const [perpage, setPerPage] = useState(2)
  const [from, setFrom] = useState(null)
  const [to, setTo] = useState(null)

  const fetcher = async () => {
    const res = await axios.get(`${BASE_URL}/api/rates/?per_page=${perpage}&page=${page}&from=2021-12-01&to=2022-04-05`)
    const data = res.data
    return data
  }
  const {data, error} = useSWR('rates', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div className='text-center text-2xl'>loading...</div>
  return(
    <>
    {JSON.stringify(data)}
    </>
  )
}

// const rates = ({rates}) => {
//     // console.log(rates);
//     const [page, setPage] = useState(1)
//     const [perpage, setPerPage] = useState(1)
//     const [from, setFrom] = useState(null)
//     const [to, setTo] = useState(null)
//   return (
//     <>
//     <h1>
//         {/* {JSON.stringify(rates)}  */}
//     </h1>
//     </>
//   )
// }

// export async function getServerSideProps() {
//     const res = await axios.get(`${BASE_URL}/api/rates?per_page=1&page=4&from=2021-12-01&to=2022-04-05`)
//     const rates = res.data
//     console.log(rates);
//     // if (rates === 400) {
//     //   return {
//     //     notFound: true,
//     //   }
//     // }
//     return {
//       props: {
//         rates
//       }, // will be passed to the page component as props
//     }
//   }

