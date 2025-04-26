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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facere nesciunt tenetur in, 
        inventore quam beatae omnis magnam laboriosam totam velit voluptatibus quo ut molestiae
         molestias aliquam aut quis odio?
      </div>
      <Catalog data={card}/>
    </>
  );
}
