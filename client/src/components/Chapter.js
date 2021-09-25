function Chapter({chapter}) {
    return (
        <>
            <h1>{chapter.title}</h1>
            <img src = {chapter.image} alt = {`${chapter.title}`}/>
            <p>{chapter.content}</p>
        </>
    )
}

export default Chapter