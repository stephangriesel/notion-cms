import React from 'react';
import Card from './Card';

const CardContainer = ({notionData}) => {
  console.log("notion data in container",notionData);
  return (
    <div className='grid grid-cols-1 md:grid-cols-4'>
        <Card imgUrl={"https://doodleipsum.com/700x525/hand-drawn?i=222b26c23a8f805f506d35b0a536569c"} title="Title" paragraphText="Paragraph Text" buttonText="Click Me" />
        <Card imgUrl={"https://doodleipsum.com/700x525/hand-drawn?i=1176f4ffe82e1314ef9a71b9599bc1fa"} title="Title" paragraphText="Paragraph Text" buttonText="Click Me" />
        <Card imgUrl={"https://doodleipsum.com/700x525/hand-drawn?i=1e5005d8273d015ff16363c9ec16e7b1"} title="Title" paragraphText="Paragraph Text" buttonText="Click Me" />
        <Card imgUrl={"https://doodleipsum.com/700x525/hand-drawn?i=dee23ea78d4bed889e6b2c07f25f3a13"} title="Title" paragraphText="Paragraph Text" buttonText="Click Me" />
    </div>
  )
}

export default CardContainer