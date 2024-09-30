import { Conexo } from "../../core/entities/Conexo";

export class ConexoRepository {
    private conexos: Conexo[] = []

    public create(conexo: Conexo) {
        this.conexos.push(conexo)
    }

    public listAll(): Conexo[] {
        return this.conexos
    }

    public findById(conexoId: string): Conexo | null {
        const conexo = this.conexos.find((conexo) => conexo.id === conexoId)

        if(!conexo) {
            return null
        }

        return conexo;
    }
}