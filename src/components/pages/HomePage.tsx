import { NavLink } from "react-router-dom"
import { ConexoController } from "../../controller/ConexoController"
import { createConexoUseCase } from "../../core/usecases/createConexoUseCase"
import { conexoData } from "../../data/mocks/list/conexoData"
import { ConexoRepository } from "../../data/repositories/conexoRepository"
import { ConexoViewModel } from "../../view-models/conexoViewModel"

export const HomePage = () => {
    const conexoRepository = new ConexoRepository()
    conexoData.forEach((conexo) => {
        const conexoUseCase = new createConexoUseCase(
            conexo.groupOne,
            conexo.groupTwo,
            conexo.groupThree,
            conexo.groupFour
        );
        conexoRepository.create(conexoUseCase.execute())
    });
    const conexoController = new ConexoController(conexoRepository);
    const conexoList = conexoController.listConexos().map((conexo) => ConexoViewModel.viewConexo(conexo))
    const themes = ['programação', 'futebol', 'anime','países']
    return (
        <section className="homepage">
            <div className="container mx-auto">
                <div className="pt-10 flex flex-wrap gap-4 justify-center items-center w-full max-w-screen-lg mx-auto">
                    {Array.isArray(conexoList) && 
                    conexoList.length > 0 &&
                    conexoList.map((conexoItem, key) => (
                        <NavLink to={`/conexo/${conexoItem.id}`} 
                            state={{conexo: conexoItem}}
                            key={`item-${conexoItem.id}`}>
                            <div className="bg-dark-200 animate-none w-48 cursor-pointer py-8 rounded-md hover:bg-dark-400 group transition-all">
                                <div className="flex flex-col gap-4">
                                    <img src={`icon-${key+1}.png`} 
                                        alt="ícone de (programação, futebol, anime, países)" 
                                        className="w-20 h-20 rounded-full mx-auto" />
                                    <h2 className="font-nunito text-sm sm:text-base text-darkText-100 uppercase text-center group-hover:text-xl">
                                        {themes[key]}
                                    </h2>
                                </div>
                            </div>
                        </NavLink>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}