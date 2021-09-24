function Chapter({chapter}) {
    return (
        <>
            <h1>{chapter.title}</h1>
            <img src = {chapter.image}/>
            <p>{chapter.content}</p>
        </>
    )
}

export default Chapter