import React from 'react';



export default function Item({instruments}) {
    console.log(instruments);
    
    return (
    <div className='items'>
        {instruments.map(instrument => (
            <div key={instrument.id}>
                <h1 className='name'>{instrument.name}</h1>
                <img src={instrument.image} alt=""/>
                <h2 className='price'>${instrument.price}</h2>
                <p className='sounds'>Sounds: {instrument.sounds}</p>
                <p className='effects'>Effects: {instrument.effects}</p>
                <p className='sequencer'>Sequencer: {instrument.sequencer}</p>
                <p className='year-of-release'>Year of Release: {instrument.yearOfRelease}</p>
                <button>Add to Cart</button>
            </div>
        ))}
    </div>   
    );
        
}
