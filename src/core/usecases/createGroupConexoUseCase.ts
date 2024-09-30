import { GroupConexo } from "../entities/GroupConexo";

export class createGroupConexoUseCase {
    constructor (
        private conexoAnswer: string,
        private wordFirst: string,
        private wordSecond: string,
        private wordThird: string,
        private wordFourth: string,
        private id?: string,
        private userResolve?: boolean
    ) {}

    execute(): GroupConexo {
        return new GroupConexo({
            id: this?.id,
            conexoAnswer: this.conexoAnswer,
            wordFirst: this.wordFirst,
            wordSecond: this.wordSecond,
            wordThird: this.wordThird,
            wordFourth: this.wordFourth,
            userResolve: this?.userResolve
        })
    }
}