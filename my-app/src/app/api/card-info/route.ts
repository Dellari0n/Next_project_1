import { CardInt } from "@/interfaces";

export async function GET(){
    return Response.json(card_info);
}

const data: Record<number, Omit<CardInt, 'id' | 'img' | 'type'>> = {
    1: {
        title: "Титулка",
        description: "Опис...",
        players: {
            min: 2,
            max: 5,
        },
        time: 60,
        age: 16,
        genre: "Жахи",
    },
    2: {
        title: "Титулка",
        description: "Опис...",
        players: {
            min: 2,
            max: 5,
        },
        time: 60,
        age: 16,
        genre: "Жахи",
    },
    3: {
        title: "Титулка",
        description: "Опис...",
        players: {
            min: 2,
            max: 5,
        },
        time: 60,
        age: 16,
        genre: "Жахи",
    },
    4: {
        title: "Титулка",
        description: "Опис... Опис... Опис... Опис... Опис... Опис... Опис... Опис... Опис... Опис... Опис...Опис...Опис... ",
        players: {
            min: 2,
            max: 5,
        },
        time: 60,
        age: 16,
        genre: "Жахи",
    },
    5: {
        title: "Титулка",
        description: "Опис... ",
        players: {
            min: 2,
            max: 5,
        },
        time: 60,
        age: 16,
        genre: "Жахи",
    },
    6: {
        title: "Титулка",
        description: "Опис... ",
        players: {
            min: 2,
            max: 5,
        },
        time: 60,
        age: 16,
        genre: "Жахи",
    },
};

const card_info: CardInt[] = Array(6).fill(1).map((_, index) => {
    const id = index + 1;
    return {
        id,
        // img:`/img/${id}.jpg`,
        img:`/img/1.jpg`,
        type: id === 2 || id === 5 ? "PVE" : "PVP",
        ...data[id]
    }
})