function LowerSection({data}){
    return(
    <section className="lower-section-part">
     {data.map((item) => (
          <LowerComponent
            key={item.id}
            imgLink={item.imgLink}
            imgAlt={item.imgAlt}
            number={item.number}
            boldText={item.boldText}
            thinText={item.thinText}
            
          />
        ))}   
    </section>
    )
}