import React, { useState } from 'react';

function Slides({slides}){
    
    const [slide,handleSlide] = useState(slides[0]);
    const [page,handlePage] = useState(0);
    const handleRestart=()=>{
        handleSlide(slides[0]);
        handlePage(0);
    };
    const handlePrev = function(){
        handleSlide(slides[page-1]);
        handlePage(page-1);
    };
    const handleNext = function(){
        handleSlide(slides[page+1]);
        handlePage(page+1);
    }
    
    return (
        <div>
            <div id="navigation" className="text-center">
                <button onClick={handleRestart} data-testid="button-restart" className="small outlined" disabled={page===0}>Restart</button>
                <button onClick={handlePrev} data-testid="button-prev" className="small" disabled={page===0}>Prev</button>
                <button onClick={handleNext} data-testid="button-next" className="small" disabled={page===slides.length-1}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slide.title}</h1>
                <p data-testid="text">{slide.text}</p>
            </div>
        </div>
    );  

}

export default Slides;
