export default function Synthesizer({name, image, price, sounds, effects, sequencer, yearOfRelease, handleCartAddition}) {
    return (
    <div className='instrument'>
                <h1 className='name'>{name}</h1>
                <br/>
                <img src={image} alt=""/>
                <br/>
                <h2 className='price'>${price}</h2>
                <p className='sounds'>Sounds: {sounds}</p>
                <p className='effects'>Effects: {effects}</p>
                <p className='sequencer'>Sequencer: {sequencer}</p>
                <p className='year-of-release'>Year of Release: {yearOfRelease}</p>
                <button class="btn" onClick={handleCartAddition}>Add to Cart</button>
            <br/><br/><br/><br/>
            </div>
    )
}; 