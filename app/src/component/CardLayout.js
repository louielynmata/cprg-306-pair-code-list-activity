"use client";
import CardItem from "./CardItem";

export default function CardLayout({items}){

    return(
        <div>
        {items.map((item) => (
            <CardItem key={item.id ?? item.name} {...item}/>
        ))}
        </div>
    )
}