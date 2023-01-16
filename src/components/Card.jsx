import React from 'react'

const Card = ({results}) => {
    return (
        <div key={index} className='flex flex-col p-4 m-4 rounded-lg bg-slate-200 shadow-xl transition-all duration-75 hover:shadow-none hover:scale-95'>
        {results.properties.Image.files.map((imageResult, index) => {
          return (
            <img key={index} src={imageResult.external.url} />
          )
        })}
        {results.properties.Name.title.map((titleResult, index) => {
          return (
            <h1 className='text-center font-bold' key={index}>{titleResult.plain_text}</h1>
          )
        })}
        {results.properties.Content.rich_text.map((contentResult, index) => {
          return (
            <p className='text-center' key={index}>{contentResult.plain_text}</p>
          )
        })}
        {results.properties.Content.rich_text.map((contentResult, index) => {
          return (
            <p className='text-center' key={index}>{contentResult.plain_text}</p>
          )
        })}
        <button className='bg-white mt-5 p-2 rounded text-center hover:bg-black hover:text-white' key={index}>
          {results.properties.Btn_txt.rich_text.map((btnTxtResult, index) => {
            return (
              <a key={index} href={results.properties.Link.url}>
                {btnTxtResult.plain_text}
              </a>
            )
          })}
        </button>
      </div>
    )
}

export default Card