// content recebe um type que eu vou criar do tipo vetor como esta no postman
// RecordItem recebe todos os dados que estão no meu postman
// com os tipos criados eu posso criar um estado

export type RecordsResponse = {
    content: RecordItem[];
    totalPages: number;
}

export type RecordItem = {
     id: number;
     moment: string;
     name: string;
     age: number;
     gameTitle: string;
     gamePlatform: string;
     genreName: string;
}