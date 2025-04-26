export interface CardInt {
    id: number;
    img: string;
    type: 'PVP' | 'PVE';
    title: string;
    description: string;
    players: {
        min: number;
        max: number;
    };
    time:number;
    age: number;
    genre: string;
}

export interface CardDetails {
    players: {
        min: number;
        max: number;
    };
    time:number;
    age: number;
    genre: string;
}