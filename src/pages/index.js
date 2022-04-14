import axios from "axios"
import RatesTable from "../components/RatesTable"


export default function Home({rates}) {
  return (
    <> 
    <h1 className="text-center sm:p-5 p-1 text-xl">
      FOREX as of : {rates.data.payload.date}
    </h1>
    <p className="text-center">Published on: {rates.data.payload.published_on}</p>
    <RatesTable rates={rates}/>
    </>
  )
}

export async function getServerSideProps() {
  const res = await axios.get('https://nrb.org.np/api/forex/v1/rate')
  const rates = res.data
  return {
    props: {
      rates
    }, 
  }
}
