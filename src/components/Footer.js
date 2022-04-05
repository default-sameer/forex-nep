import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <footer className="footer items-center p-4 bg-slate-500 text-neutral-content p-1">
        <div className="items-center grid-flow-col">
            <p>Copyright © 2022 - All right reserved</p>
        </div> 
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <p>Data provided by <Link href='https://nrb.org.np' ><a target="_blank">NRB</a></Link></p>
        </div>
    </footer>
    </>
  )
}

export default Footer