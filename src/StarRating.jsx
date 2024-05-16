import { useState } from "react";
import Star from "./Star";

export default function StarRating({maxRating = 5}) {
    const [rating, setRating] = useState(0)

    function handleRating(rating){
        setRating(rating);
    }
    return (
        <div className="star" >
            <div className="star-indiv" >
                {Array.from({length: maxRating}, (_, i) => 
                (<Star key={i} onRate={() => setRating(i+1)} full={rating >= i + 1}/>
                ))}
            </div>
            <p>
            </p>
        </div>
    )
}