import { Conexo } from "../entities/Conexo";

export class FindConexoUseCase {
    constructor (private conexo: Conexo | null) {}

    execute(): Conexo | null {
        return this.conexo
    }
}