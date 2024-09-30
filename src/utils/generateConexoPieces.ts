import { ConexoType } from "../types/ConexoType";

export function generateConexoPieces(conexo: ConexoType) {
    const pieces = []
    
    pieces.push(
        {
            value: conexo.groupOne.wordFirst,
            group: 1,
            status: 0
        },
        {
            value: conexo.groupOne.wordSecond,
            group: 1,
            status: 0
        },
        {
            value: conexo.groupOne.wordThird,
            group: 1,
            status: 0
        },
        {
            value: conexo.groupOne.wordFourth,
            group: 1,
            status: 0
        },
    );

    pieces.push(
        {
            value: conexo.groupTwo.wordFirst,
            group: 2,
            status: 0
        },
        {
            value: conexo.groupTwo.wordSecond,
            group: 2,
            status: 0
        },
        {
            value: conexo.groupTwo.wordThird,
            group: 2,
            status: 0
        },
        {
            value: conexo.groupTwo.wordFourth,
            group: 2,
            status: 0
        },
    );

    pieces.push(
        {
            value: conexo.groupThree.wordFirst,
            group: 3,
            status: 0
        },
        {
            value: conexo.groupThree.wordSecond,
            group: 3,
            status: 0
        },
        {
            value: conexo.groupThree.wordThird,
            group: 3,
            status: 0
        },
        {
            value: conexo.groupThree.wordFourth,
            group: 3,
            status: 0
        },
    );

    pieces.push(
        {
            value: conexo.groupFour.wordFirst,
            group: 4,
            status: 0
        },
        {
            value: conexo.groupFour.wordSecond,
            group: 4,
            status: 0
        },
        {
            value: conexo.groupFour.wordThird,
            group: 4,
            status: 0
        },
        {
            value: conexo.groupFour.wordFourth,
            group: 4,
            status: 0
        },
    );

    return pieces
}