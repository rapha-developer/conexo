import { GroupConexoType } from "../../types/GroupConexo";
import { Conexo } from "../entities/Conexo";

export class createConexoUseCase {
    constructor(
        private groupOne: GroupConexoType,
        private groupTwo: GroupConexoType,
        private groupThree: GroupConexoType,
        private groupFour: GroupConexoType,
        private id?: string,
        private userWin?: boolean
    ) {}

    execute(): Conexo {
        return new Conexo({
            id: this?.id,
            groupOne: this.groupOne,
            groupTwo: this.groupTwo,
            groupThree: this.groupThree,
            groupFour: this.groupFour,
            userWin: this?.userWin
        })
    }
}