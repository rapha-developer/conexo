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
import { shuffleIds } from "../../utils/shuffle"


export const ConexoPage = () => {
    const idsBeforeShuffle = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const [idsAfterShuffle] = useState<number[]>(shuffleIds(shuffleIds(idsBeforeShuffle)))

    const location = useLocation()
    const [conexo] = useState<ConexoType>(location.state.conexo)
    const [pieces, setPieces] = useState(generateConexoPieces(conexo))
    const [boardKeys, setBoardKeys] = useState<number[]>(idsAfterShuffle.map((item) => { return item }));
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
        const idsAreHeld = [items[0].id, items[1].id, items[2].id, items[3].id]
        const onlyBoardKeysfromWithoutGroup = boardKeys.filter((boardItem) => !idsAreHeld.includes(boardItem))

        await delayUtil(1600)
        onlyBoardKeysfromWithoutGroup.unshift(
            idsAreHeld[0],
            idsAreHeld[1],
            idsAreHeld[2],
            idsAreHeld[3]
        )
        setBoardKeys(onlyBoardKeysfromWithoutGroup)
        await delayUtil(1000)
        const onlyBoardKeysToRemove = [...onlyBoardKeysfromWithoutGroup]
        onlyBoardKeysToRemove.shift()
        onlyBoardKeysToRemove.shift()
        onlyBoardKeysToRemove.shift()
        onlyBoardKeysToRemove.shift()
        await delayUtil(800)
        setBoardKeys(onlyBoardKeysToRemove)

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
                    <h1 className="font-nunito text-xl text-white font-medium text-center">
                        Escolha 4 opções e encontre os grupos que conectam
                    </h1>
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

