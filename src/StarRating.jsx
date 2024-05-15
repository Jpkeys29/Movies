import { useState } from "react";
import Star from "./Star";

export default function StarRating({maxRating = 5}) {
    const [rating, setRating] = useState(0)

    function handleRating(rating){
        setRating(rating)
    }
    return (
        <div className="star" >
            <div className="star-indiv" >
                {Array.from({length: maxRating}, (_, i) => <span key={i}><Star onRate={() => handleRating(i+1)}  /></span>)}
            </div>
            <p>
                {rating || ''}
            </p>
        </div>
    )
}