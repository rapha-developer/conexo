import { ConexoType } from "../../types/ConexoType"
import { GroupConexoType } from "../../types/GroupConexo"

export class Conexo {
    private _id: string
    private _groupOne: GroupConexoType
    private _groupTwo: GroupConexoType
    private _groupThree: GroupConexoType
    private _groupFour: GroupConexoType
    private _userWin: boolean

    constructor({
        id,
        groupOne,
        groupTwo,
        groupThree,
        groupFour,
        userWin
    }: ConexoType) {
        this._id = id ?? crypto.randomUUID()
        this._groupOne = groupOne
        this._groupTwo = groupTwo
        this._groupThree = groupThree
        this._groupFour = groupFour
        this._userWin = userWin ?? false
    }

    public get id(): string {
        return this._id
    }

    public get groupOne(): GroupConexoType {
        return this._groupOne
    }

    public get groupTwo(): GroupConexoType {
        return this._groupTwo
    }

    public get groupThree(): GroupConexoType {
        return this._groupThree
    }

    public get groupFour(): GroupConexoType {
        return this._groupFour
    }

    public get userWin(): boolean {
        return this._userWin
    }
}