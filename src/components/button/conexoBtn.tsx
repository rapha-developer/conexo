import { AnimationClassType } from "../../types/AnimationClassType"
import { ButtonType } from "../../types/ButtonType"

export const ConexoBtn = ({status, value, changeStatus}: ButtonType) => {
    const animationClass: AnimationClassType = {
        99:  'bg-dark-200 animate-shake-fast border-[3px] border-solid border-red-800',
        0:  'bg-dark-200 animate-scaleDown-medium',
        1:  'bg-dark-400 animate-scaleUp-medium',
        2:  `bg-darkGroup-100 animate-scaleGroup-medium`,
        3:  `bg-darkGroup-200 animate-scaleGroup-medium`,
        4:  `bg-darkGroup-300 animate-scaleGroup-medium`,
        5:  `bg-darkGroup-400 animate-scaleGroup-medium`,
    }
    return (
        <div className={`${animationClass[status]} w-32 cursor-pointer py-8 rounded-md font-nunito text-sm sm:text-base text-darkText-100 uppercase text-center`}
            onClick={() => changeStatus(value)}>
                {value}
        </div>
    )
}