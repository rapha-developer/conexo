import { GroupConexo } from "../entities/GroupConexo";

export class ListGroupsConexoUseCase {
    constructor(private groupsConexo: GroupConexo[]) {}

    execute(): GroupConexo[] {
        return this.groupsConexo
    }
}