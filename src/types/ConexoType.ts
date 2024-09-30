import { GroupConexoType } from "./GroupConexo"

export type ConexoType = {
    id?: string
    groupOne: GroupConexoType
    groupTwo: GroupConexoType
    groupThree: GroupConexoType
    groupFour: GroupConexoType
    userWin?: boolean
}