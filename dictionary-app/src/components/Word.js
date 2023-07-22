import React from 'react'

function Word({ partOfSpeech, definition, example }) {
    return (
        <div className=' w-full h-full flex items-center justify-center bg-neutral-950 '>
            <main className=' h-4/5 w-4/5 bg-neutral-900 rounded-xl p-5 max-[640px]:pb-20'>
                <div className=" text-teal-100 text-4xl text-500 mb-20 max-[640px]:mb-5">{partOfSpeech}</div>
                <div className=' text-base text-white mb-1'>{definition}</div>
                <div className=' text-base text-white'>Example : {example || "NOT FOUND"}</div>
            </main>
        </div>
    )
}

export default Word