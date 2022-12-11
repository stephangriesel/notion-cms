import React from 'react'

const Card = () => {
    return (
        <div className='flex flex-col p-4 m-4 rounded-lg bg-slate-200 shadow-xl transition-all duration-1000 hover:shadow-none cursor-pointer hover:scale-95'>
            <div>
                <img src="https://doodleipsum.com/700x525/hand-drawn?i=a96b513e1e4deb10b96d2d852ebd824e" alt="illustration" />
                <h2 className='text-center font-bold'>Lorem ipsum dolor</h2>
                <div className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis numquam totam dignissimos ipsum dolore doloribus assumenda repellendus molestiae vel? Atque quam optio odio officia expedita dicta, praesentium iste quia perferendis?</div>
            </div>
            <div className='flex justify-center'>
                <button className='bg-white'><a href="#" className='text-center m-2'>See more</a></button>
            </div>
        </div>
    )
}

export default Card