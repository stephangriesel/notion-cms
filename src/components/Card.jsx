import React from 'react'

const Card = ({imgUrl, title, paragraphText, buttonText}) => {
    return (
        <div className='flex flex-col p-4 m-4 rounded-lg bg-slate-200 shadow-xl transition-all duration-1000 hover:shadow-none cursor-pointer hover:scale-95'>
            <div>
                <img src={imgUrl} alt="illustration" />
                <h2 className='text-center font-bold'>{title}</h2>
                <div className='text-center'>{paragraphText}</div>
            </div>
            <div className='flex justify-center'>
                <button className='bg-white'><a href="#" className='text-center m-2'>{buttonText}</a></button>
            </div>
        </div>
    )
}

export default Card