import React from 'react'

const RatesTable = ({rates}) => {
  return (
    <>
    <div className="pt-5">
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Units</th>
                    <th>Buy</th>
                    <th>Sell</th>
                </tr>
                </thead>
                <tbody>
                {rates.data.payload.rates.map((rate, index) =>
                    <tr key={rate.currency.iso3}>
                        <th>{index + 1}</th>
                        <td>{rate.currency.name}</td>
                        <td>{rate.currency.unit}</td>
                        <td>{rate.buy}</td>
                        <td>{rate.sell}</td>
                       
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default RatesTable