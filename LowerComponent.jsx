function LowerComponent({imgLink,imgAlt, number, boldText, thinText}){
    return(
        <article className="lower-part">
         <img src={imgLink}
         className="lower-part-foto"
         alt={imgAlt}
         />
         <div className="lower-part-right-part">
            <span className="lower-part-number">{number}</span>
            <h2 className="lower-part-bold-text">
                <a href="#">{boldText}</a></h2>
            <p className="lower-part-thin-text">{thinText}</p>
         </div>
        </article>
    )
} 