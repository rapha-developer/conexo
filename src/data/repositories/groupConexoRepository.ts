import { GroupConexo } from "../../core/entities/GroupConexo";

export class GroupConexoRepository {
    private groupConexos: GroupConexo[] = []

    public create(groupConexo: GroupConexo) {
        this.groupConexos.push(groupConexo)
    }

    public listAll(): GroupConexo[] {
        return this.groupConexos
    }

    public findByName(groupById: string): GroupConexo | null {
        const groupConexo = this.groupConexos.find((groupConexo) => groupConexo.id === groupById)

        if (!groupConexo) {
            return null
        }
        return groupConexo
    }
}