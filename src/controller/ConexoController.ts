import { Conexo } from "../core/entities/Conexo";
import { FindConexoUseCase } from "../core/usecases/findConexoUseCase";
import { ListConexosUseCase } from "../core/usecases/listConexosUseCase";
import { ConexoRepository } from "../data/repositories/conexoRepository";


export class ConexoController {
    constructor(
        private conexoRepository: ConexoRepository 
    ) {}

    public listConexos(): Conexo[] {
        const listConexosUseCase  = new ListConexosUseCase(
            this.conexoRepository.listAll()
        )
        return listConexosUseCase.execute()
    }

    public findConexoById(conexoId: string): Conexo | null {
        const findConexoByIdUseCase = new FindConexoUseCase(
            this.conexoRepository.findById(conexoId)
        )
        return findConexoByIdUseCase.execute()
    }
}