export const Card = ({ name, title, bio }) => {
    return(
        <div className="card">
            <h2> { name } </h2>
            <p className="card-title">{ title }</p>
            <p>{ bio }</p>
        </div>
    )
}

