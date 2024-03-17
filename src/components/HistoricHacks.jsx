import { useState } from 'react'
import data from '../assets/dataset.json'
const HistoricHacks = () => {
    console.log('data', data)
    const [length, setLength] = useState(9)

    return (
        <div>
            {data.map((e, index) => {
                console.log('e', e)
                if (index > length) return
                return (
                    <div className='flex' key={index}>
                        <div className='p-4'>{e.Index}</div>
                        <div className='p-4'>{e.Address}</div>
                        <div className='p-4'>{e["avg val sent"] || 0}</div>
                    </div>
                )
            })}
            <button onClick={() => setLength(length + 10)}>Show more</button>
        </div>
    )
}
export default HistoricHacks