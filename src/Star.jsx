export default function Star({onRate}) {
    return (
        <div role="button" className="starStyle" onClick={onRate}>
            ⭐️
        </div>
    )
}