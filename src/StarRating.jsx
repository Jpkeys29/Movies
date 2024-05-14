import Star from "./Star";

export default function StarRating({maxRating = 5}) {
    return (
        <div className="star" >
            <div className="star-indiv" >
                {Array.from({length: maxRating}, (_, i) => <span key={i}><Star/></span>)}
            </div>
        </div>
    )
}