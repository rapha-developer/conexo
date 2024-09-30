import { Conexo } from "../core/entities/Conexo";


export class ConexoViewModel {
    static viewConexo(conexo: Conexo) {
        return {
            id: conexo.id,
            groupOne: conexo.groupOne,
            groupTwo: conexo.groupTwo,
            groupThree: conexo.groupThree,
            groupFour: conexo.groupFour,
            userWin: conexo.userWin
        }
    }
}