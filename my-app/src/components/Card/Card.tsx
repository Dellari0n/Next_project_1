import styles from "./Card.module.css"
import {CardInt} from "@/interfaces"
import Image from "next/image";
import { Type } from "./details/Type";
import { Details } from "./details/Details";
import { Button } from "../Button";

interface CardProps {
    inf: CardInt
}

export function Card ({inf: {title, img, type, description, players, time, age, genre}}:CardProps){
    return (
        <div className={styles.card}>
            <div className={styles.imgWrap}>
                <Image 
                className={styles.img} 
                alt="preview" 
                src={img} 
                width={540} 
                height={300} 
                />
                <Type data={type}/>
            </div>

            <div className={styles.cardInner}>
                <div className={styles.card__body}>
                    <div className={styles.fs2plus}>
                        <h3>{title}</h3>
                    </div>
                    <div className={styles.description}>
                        {description}
                    </div>
                    <Details players={players}  time = {time} age={age} genre={genre}/>
                </div>
                <div className={styles.action}>
                    <Button variant={"outline"}>Забронювати</Button>
                    <Button variant={"link"}>Детальніше</Button>
                </div>
            </div>
        </div>
    )
}