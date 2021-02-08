import React, {useState} from 'react';




export default function Item({name, image, price, sounds, effects, sequencer, yearOfRelease, onCartAddition}) {
    return (
    <div className='items'>
                <h1 className='name'>{name}</h1>
                <img src={image} alt=""/>
                <h2 className='price'>${price}</h2>
                <p className='sounds'>Sounds: {sounds}</p>
                <p className='effects'>Effects: {effects}</p>
                <p className='sequencer'>Sequencer: {sequencer}</p>
                <p className='year-of-release'>Year of Release: {yearOfRelease}</p>
                <button onClick={onCartAddition}>Add to Cart</button>
            <br/><br/><br/><br/>
            </div>
    )
}; 
        

