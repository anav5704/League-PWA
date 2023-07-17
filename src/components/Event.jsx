import { useState } from "react"

function Event({ Event }){

    const [details, setDetails] = useState()

    return (
    <div className="col-span-1 bg-zinc-800 rounded-md overflow-hidden ">
        <div className="bg-teal-400 h-24 w-full grid place-content-center text-zinc-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
        </svg>
        </div>
        <div className="p-2  relative">

       { details ?  <div className="top-0 left-0  absolute h-full w-full z-10 bg-zinc-800 p-2">
                    <div className="flex flex-col items-start justify-between gap-2">
                    <div className="flex justify-between items-center w-full">
                        <h2 className="text-lg">More Details</h2>
                        <div onClick={() => {setDetails(!details)}} className="p-1 rounded-lg hover:bg-zinc-700 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>

                    <p className="flex items-center text-zinc-400 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Anav, Indeevar +3 more
                    </p>
                    
                    <p className="flex items-center text-zinc-400 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Veer, Aaryan Vetaia
                    </p>
                </div>

                <button className="mt-4 w-full py-1 bg-zinc-700 rounded-md hover:text-rose-400 ">Delete Event</button>
            </div> : null }

            <div className="flex flex-col items-start justify-between gap-2">

               <div className="flex justify-between items-center w-full">
                <h2 className="text-lg">{ Event.Title  }</h2>
                   <div onClick={() => {setDetails(!details)}} className="p-1 rounded-lg hover:bg-zinc-700 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                        </svg>
                   </div>
               </div>

                <p className="flex items-center text-zinc-400 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Damodar City
                </p>

                <p className="flex items-center text-zinc-400 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Saturday 12am - 7pm
                </p>

            </div>
            
            <div className="flex gap-2 mt-4">
                <button className="w-3/5 py-1 bg-zinc-700 rounded-md hover:text-teal-400">Join the gang</button>
                <button className="w-2/5 py-1 bg-zinc-700 rounded-md hover:text-rose-400">Dip</button>
            </div>
        </div>
    </div>
    )
}

export default Event