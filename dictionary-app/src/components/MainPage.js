import React, { useEffect } from 'react'
import Word from './Word'

function MainPage({ data }) {
    useEffect(() => {
        console.log(data[0])
    }, [data])
    const verb = data[0].meanings[0].definitions[0].definition || "no verb"
    const verbExample = data[0].meanings[0]?.definitions[0].example || null;
    const noun = data[0].meanings[1]?.definitions[0].definition || "no noun"
    const nounExample = data[0].meanings[1]?.definitions[0].example || null
    const adjective = data[0].meanings[3]?.definitions[0].definition || "no adjective"
    const adjectiveExample = data[0].meanings[3]?.definitions[0].example || null;
    return (
        <div className='w-full h-full flex items-center justify-center bg-neutral-950 max-[640px]:flex-col'>
            <Word partOfSpeech="verb" definition={verb} example={verbExample} />
            <Word partOfSpeech="noun" definition={noun} example={nounExample} />
            <Word partOfSpeech="adjective" definition={adjective} example={adjectiveExample} />
        </div>
    )
}

export default MainPage