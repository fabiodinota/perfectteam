import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='h-[90vh] w-full flex justify-center items-center flex-col'>
        <div className='h-full w-full flex max-w-[1300px] px-5 gap-5 justify-center items-start flex-col'>
            <h1 className="text-[50px] lg:text-[70px] whitespace-prewrap leading-tight font-bold">
				<span className='text-green'>404</span> - Pagina niet gevonden	
			</h1>
				<p
					className="text-[20px] md:text-[24px] max-w-[800px] pr-5 pb-5"
				>
                    Het spijt ons, maar de pagina die je zoekt bestaat niet of is verplaatst.
				</p>
				<button
					className="px-20 h-[60px] bg-green text-background"
				>
					<Link href="/#home">Ga terug naar Perfect Team MMA</Link>
				</button>
        </div>
    </div>
  )
}

export default Page