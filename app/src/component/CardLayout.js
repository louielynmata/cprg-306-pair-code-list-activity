import CardItem from "./CardItem";

export default function CardLayout(array){

    return(
        <p>
        {array.map((item, index) => (
            <CardItem key={index} {...item}/>
        ))}
        </p>
    )
}