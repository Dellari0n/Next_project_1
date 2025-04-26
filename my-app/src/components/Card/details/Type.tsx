'use client';
import { CardInt } from "@/interfaces"
import { useMemo } from "react";
import styles from "./styles.module.css"


interface TypeProps {
    data: CardInt["type"];
}

const Type = ({data}:TypeProps) =>{
    const className = useMemo(() => (data ? styles[data.toLowerCase()] : ''), [data]);
    return(
        <div className={`${styles.type} ${className}`}>
            {data}
        </div>
    )
}

export {Type}