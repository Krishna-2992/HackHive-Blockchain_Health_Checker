import { useState } from 'react'

const Feedback = () => {
    return (
        <div>
            <div>Enter your Feedback: </div>
            <form action="" className='flex flex-col justify-center align-center w-full '>
                <div className='flex'>
                    <div className='product-name'>Protocol name: </div>
                    <input type="text" className='border border-black' />
                </div>
                <div className='flex'>
                    <div>Contract address</div>
                    <input type="text" className='border border-black' />
                </div>
                <div className='flex'>
                    <div>Feedback</div>
                    <textarea name="feedback" id="" cols="30" rows="4" className='border border-black'></textarea>
                </div>
            </form>
        </div>
    )
}
export default Feedback