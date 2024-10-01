import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { ConexoType } from "../../types/ConexoType"
import { generateConexoPieces } from "../../utils/generateConexoPieces"
import { ConexoBtn } from "../button/conexoBtn"
import { delayUtil } from "../../utils/delay"
import { answerType } from "../../types/AnswersType"
import { ConexoAnswersSection } from "../answers/conexoAnswersSection"
import { AttemptsHero } from "../attempts/attemptsHero"


export const ConexoPage = () => {
    const location = useLocation()
    const [conexo] = useState<ConexoType>(location.state.conexo)
    const [pieces, setPieces] = useState(generateConexoPieces(conexo))
    const [answers, setAnswers] = useState<answerType[]>([])
    const [attempts, setAttempts] = useState(0);

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
                
                createAnswersObject(groupReference)

            } else {
                // se items não são iguais
                updateStatusPieces(1, 99);
                returnPiecesToNormalStatus()
            }
        }

        const itemsGroupChoose = pieces.filter((item) => item.status > 1 && item.status < 98)
        if (itemsGroupChoose.length === 4) { removeGroupPieces() }
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
    async function removeGroupPieces() {
        await delayUtil(1600)
        const itemsWithoutGroup = pieces.filter((item) => item.status === 0)
        
        setPieces(itemsWithoutGroup)
    }
    async function createAnswersObject(groupReference: number) {
        await delayUtil(1600)
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
                    <ul className={`grid grid-cols-4 grid-rows-4 gap-2 `}>
                        {Array.isArray(pieces) &&
                        pieces.length > 0 &&
                        pieces.map((piece, key) => {
                            return (
                                <li key={`pieceItem-${key}`}>
                                    <ConexoBtn 
                                        group={piece.group}
                                        status={piece.status}
                                        value={piece.value}
                                        changeStatus={changeStatusPiece}
                                    />
                                </li>
                            )
                        })
                        }
                        
                    </ul>
                </div>
            </div>
        </section>
    )
}

