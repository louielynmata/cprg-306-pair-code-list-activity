
export default function CardItem({title, subtitle, description, price, category, imgPath, cta}){

    return(
        <div>
            <p>{title}</p>
            <p>{subtitle}</p>
            <p>{description}</p>
            <p>{price}</p>
            <p>{category}</p>
            <p>{imgPath}</p>
            <p>{cta}</p>
        </div>
    )

}