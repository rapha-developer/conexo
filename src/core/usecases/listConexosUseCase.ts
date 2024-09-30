import { Conexo } from "../entities/Conexo";

export class ListConexosUseCase {
    constructor(private conexos: Conexo[]) {}

    execute(): Conexo[] {
        return this.conexos
    }
}