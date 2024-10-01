import { NavLink, useLocation } from "react-router-dom"
import { ArrowLeftIcon } from "../assets/arrowLeftIcon"

export const Header = ({text}: { text: string }) => {
    const location = useLocation()
    return (
        <header className="py-8">
            <div className="container mx-auto relative">
                {location.pathname !== '/' &&
                <NavLink to={'/'}>
                    <div className="absolute top-0 left-0"
                    >
                        <p className="flex items-center gap-2 font-nunito text-xl font-semibold text-darkText-100 hover:scale-105 hover:text-white"><ArrowLeftIcon /> Voltar</p>
                    </div>
                </NavLink>
                }
                <h1 className="font-nunito text-2xl lg:text-3xl font-extrabold text-darkText-100 uppercase text-center">
                    {text}
                </h1>
            </div>
        </header>
    )
}

