function Testimonial({testimonial}) {
    return(
        <div className = 'individualstock'>
            <img className="img" src={testimonial.image} alt={testimonial.author}/>
            <h2 className = 'stockprice'>From:{testimonial.author}</h2>
            <h2 className = 'stockname'>"{testimonial.paragraph}"</h2>
        </div>
    )
}

export default Testimonial