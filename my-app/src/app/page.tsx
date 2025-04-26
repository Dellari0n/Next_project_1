import { Catalog } from "@/components/Catalog";
import styles from "./page.module.css";

export default async function Home() {
  const card = await fetch(process.env.url + "api/card-info").then((response) => response.json());

  console.log(card);
  return (
    <>
      <div className={`${styles.title} fs3plus`}>
        Список карток
      </div>
      <div>
        текст змінено
      </div>
      <Catalog data={card}/>
    </>
  );
}
