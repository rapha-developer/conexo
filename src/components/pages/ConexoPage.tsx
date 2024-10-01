import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { ConexoType } from "../../types/ConexoType"
import { generateConexoPieces } from "../../utils/generateConexoPieces"
import { ConexoBtn } from "../button/conexoBtn"
import { delayUtil } from "../../utils/delay"
import { answerType } from "../../types/AnswersType"
import { ConexoAnswersSection } from "../answers/conexoAnswersSection"
import { AttemptsHero } from "../attempts/attemptsHero"
import { Flipped, Flipper } from "react-flip-toolkit"


export const ConexoPage = () => {
    const location = useLocation()
    const [conexo] = useState<ConexoType>(location.state.conexo)
    const [pieces, setPieces] = useState(generateConexoPieces(conexo))
    const [boardKeys, setBoardKeys] = useState(pieces.map((item, key) => { return key }));
    const [answers, setAnswers] = useState<answerType[]>([])
    const [attempts, setAttempts] = useState(0);
    const answersRows = (4 - answers.length)

    function changeStatusPiece(pieceValue: string) {
        const itemsChoose = pieces.filter((item) => item.status === 1)
        if(itemsChoose.length < 4) {
            setPieces((oldPieces) => oldPieces.map((piece) => {
                return (piece.value === pieceValue) ? {
                    ...piece,
                    status: (piece.status === 0) ? 1 : 0
                } : {
                    ...piece
                }
            }));
        }

    }
    useEffect(() => {
        const itemsChoose = pieces.filter((item) => item.status === 1)
        if (itemsChoose.length === 4) {
            setAttempts((prevAttempt) => prevAttempt + 1)
            
            const groupReference = itemsChoose[0].group
            const itemsFromSameGroup  = itemsChoose.every((element) => element.group === groupReference);
            if (itemsFromSameGroup) {
                // se items são iguais
                updateStatusPieces(1, 1+groupReference)
            } else {
                // se items não são iguais
                updateStatusPieces(1, 99);
                returnPiecesToNormalStatus()
            }
        }

        const itemsGroupChoose = pieces.filter((item) => item.status > 1 && item.status < 98)
        if (itemsGroupChoose.length === 4) { removeGroupPieces(itemsGroupChoose) }
    }, [pieces])

    async function returnPiecesToNormalStatus() {
        await delayUtil(1000)
        updateStatusPieces(99, 0);
    }
    async function updateStatusPieces(oldStatus: number, newStatus: number) {
        setPieces((oldPieces) => oldPieces.map((piece) => {
            return (piece.status === oldStatus) ? {
                ...piece,
                status: newStatus
            } : {
                ...piece
            }
        }))
    }
    async function removeGroupPieces(items : {
        id: number
        group: number
        status: number
        value: string
    }[]) {
        const itemsWithoutGroup = pieces.filter((item) => item.status === 0)
        const onlyPiecesIDFromWithoutGroup = itemsWithoutGroup.map((piece) => piece.id)

        await delayUtil(1600)
        onlyPiecesIDFromWithoutGroup.unshift(
            items[0].id,
            items[1].id,
            items[2].id,
            items[3].id
        )
        setBoardKeys(onlyPiecesIDFromWithoutGroup)
        await delayUtil(1000)
        const onlyPiecesIDsToRemove = [...onlyPiecesIDFromWithoutGroup]
        onlyPiecesIDsToRemove.shift()
        onlyPiecesIDsToRemove.shift()
        onlyPiecesIDsToRemove.shift()
        onlyPiecesIDsToRemove.shift()
        await delayUtil(800)
        setBoardKeys(onlyPiecesIDsToRemove)

        updateStatusPieces(items[0].group + 1, 100);
        createAnswersObject(items[0].group)
    }

    function createAnswersObject(groupReference: number) {
        const answersObject: answerType[] = [...answers]

        const answersItem: answerType = {
            bgColorGroup: `bg-darkGroup-${groupReference*100}`,
            item: conexo.groupOne
        }
        if (groupReference === 1) { 
            answersItem.item = conexo.groupOne
        } else if(groupReference === 2) {
            answersItem.item = conexo.groupTwo
        } else if(groupReference === 3) {
            answersItem.item = conexo.groupThree
        } else if(groupReference === 4) {
            answersItem.item = conexo.groupFour
        }
        answersObject.push(answersItem)
        setAnswers(answersObject)
    }
    return (
        <section className="homepage">
            <div className="container mx-auto">
                <div className="w-full max-w-[548px] mx-auto ">
                    <AttemptsHero attempts={attempts} />
                    <ConexoAnswersSection answers={answers} />
                    <Flipper 
                        flipKey={boardKeys.join('')}
                        spring={{
                            stiffness: 80,
                            damping: 41
                        }}
                        staggerConfig={{
                            default: {
                                reverse: true,
                                speed: 0.8
                            },
                        }}
                    >
                    <ul className={`grid grid-cols-4 grid-rows-${answersRows} gap-2 `}>
                        {Array.isArray(boardKeys) &&
                        boardKeys.length > 0 &&
                        boardKeys.map((pieceKey, key) => {
                            return (
                            <Flipped key={pieceKey} flipId={`gameItem-${pieceKey}`}>

                                <li key={`pieceItem-${key}`}>
                                    <ConexoBtn 
                                        group={pieces[pieceKey].group}
                                        status={pieces[pieceKey].status}
                                        value={pieces[pieceKey].value}
                                        changeStatus={changeStatusPiece}
                                    />
                                </li>
                            </Flipped>
                            )
                        })
                        }
                    </ul>
                    </Flipper>
                </div>
            </div>
        </section>
    )
}

