import { Card } from "../Card"
import styles from "./Catalog.module.css"
import {CardInt} from "@/interfaces"

interface CatalogProps {
    data: CardInt[] 
}


export function Catalog({data}: CatalogProps) {
    return <div className={styles.catalog}>
        {data.map((data)=><Card key={data.id} inf={data}/>)}
    </div>
}