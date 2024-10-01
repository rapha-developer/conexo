import { ConexoType } from "../types/ConexoType";

export function generateConexoPieces(conexo: ConexoType) {
    const pieces = []
    
    pieces.push(
        {
            id: 0,
            value: conexo.groupOne.wordFirst,
            group: 1,
            status: 0
        },
        {
            id: 1,
            value: conexo.groupOne.wordSecond,
            group: 1,
            status: 0
        },
        {
            id: 2,
            value: conexo.groupOne.wordThird,
            group: 1,
            status: 0
        },
        {
            id: 3,
            value: conexo.groupOne.wordFourth,
            group: 1,
            status: 0
        },
    );

    pieces.push(
        {
            id: 4,
            value: conexo.groupTwo.wordFirst,
            group: 2,
            status: 0
        },
        {
            id: 5,
            value: conexo.groupTwo.wordSecond,
            group: 2,
            status: 0
        },
        {
            id: 6,
            value: conexo.groupTwo.wordThird,
            group: 2,
            status: 0
        },
        {
            id: 7,
            value: conexo.groupTwo.wordFourth,
            group: 2,
            status: 0
        },
    );

    pieces.push(
        {
            id: 8,
            value: conexo.groupThree.wordFirst,
            group: 3,
            status: 0
        },
        {
            id: 9,
            value: conexo.groupThree.wordSecond,
            group: 3,
            status: 0
        },
        {
            id: 10,
            value: conexo.groupThree.wordThird,
            group: 3,
            status: 0
        },
        {
            id: 11,
            value: conexo.groupThree.wordFourth,
            group: 3,
            status: 0
        },
    );

    pieces.push(
        {
            id: 12,
            value: conexo.groupFour.wordFirst,
            group: 4,
            status: 0
        },
        {
            id: 13,
            value: conexo.groupFour.wordSecond,
            group: 4,
            status: 0
        },
        {
            id: 14,
            value: conexo.groupFour.wordThird,
            group: 4,
            status: 0
        },
        {
            id: 15,
            value: conexo.groupFour.wordFourth,
            group: 4,
            status: 0
        },
    );

    return pieces
}