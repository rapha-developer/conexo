

export const shuffleIds = (array: number[]) => {
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
}
type pieceType = {
    id: number;
    value: string;
    group: number;
    status: number;
}
export const shufflePieces = (pieces: pieceType[], shuffleList: number[]) => {
    const newPiecesAfterShuffle:pieceType[] = []
    if (Array.isArray(shuffleList) && shuffleList.length > 0) {
        shuffleList.forEach((item) => {
            newPiecesAfterShuffle.push(pieces[item])
        })
    }
    return newPiecesAfterShuffle
}