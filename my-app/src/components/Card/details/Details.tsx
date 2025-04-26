import { CardDetails } from "@/interfaces"
import styles from "./styles.module.css"

type DetailsProps = CardDetails;



export function Details({players, time, age, genre}: DetailsProps) {
    return <div className={styles.details}>
        <div className={styles.detail__item}>
            <div className="fs1plus">{players.min} - {players.max}</div>
            <div className="fs0">Кількість гравців</div>
        </div>
        <div className={styles.detail__item}>
            <div className="fs1plus">{time} хв</div>
            <div className="fs0">Тривалість гри</div>
        </div>
        <div className={styles.detail__item}>
            <div className="fs1plus">{age}+</div>
            <div className="fs0">Вікове обмеження</div>
        </div>
        <div className={styles.detail__item}>
            <div className="fs1plus">{genre}</div>
            <div className="fs0">Жанр гри</div>
        </div>
    </div>
}