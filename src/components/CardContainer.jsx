import React from 'react';
import Card from './Card';

const CardContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4'>
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default CardContainer