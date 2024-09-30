import { GroupConexo } from "../entities/GroupConexo";

export class FindGroupConexoUseCase {
    constructor (private groupConexo: GroupConexo | null) {}

    execute(): GroupConexo | null {
        return this.groupConexo
    }
}