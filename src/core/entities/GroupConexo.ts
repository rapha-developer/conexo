import { GroupConexoType } from "../../types/GroupConexo"

export class GroupConexo {
    private _id: string
    private _conexoAnswer: string
    private _wordFirst: string
    private _wordSecond: string
    private _wordThird: string
    private _wordFourth: string
    private _userResolve: boolean

    constructor({
        id,
        conexoAnswer,
        wordFirst,
        wordSecond,
        wordThird,
        wordFourth,
        userResolve
    }: GroupConexoType) {
        this._id = id ?? crypto.randomUUID()
        this._conexoAnswer = conexoAnswer
        this._wordFirst = wordFirst
        this._wordSecond = wordSecond
        this._wordThird = wordThird
        this._wordFourth = wordFourth
        this._userResolve = userResolve ?? false
    }

    public get id(): string {
        return this._id
    }

    public get conexoAnswer(): string {
        return this._conexoAnswer
    }

    public get wordFirst(): string {
        return this._wordFirst
    }

    public get wordSecond(): string {
        return this._wordSecond
    }

    public get wordThird(): string {
        return this._wordThird
    }

    public get wordFourth(): string {
        return this._wordFourth
    }

    public get userResolve(): boolean {
        return this._userResolve
    }
}