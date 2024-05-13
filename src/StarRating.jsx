
export default function StarRating({maxRating = 5}) {
    return (
        <div className="star" >
            <div className="star-indiv" >
                {Array.from({length: maxRating}, (_, i) => <span key={i}>S{i+1}</span>)}
            </div>
            <p>⭐️</p>
        </div>
    )
}