import { GroupConexoType } from "./GroupConexo"

export type answersType = {
    answers: answerType[]
}
export type answerType = {
    bgColorGroup: string
    item: GroupConexoType
}