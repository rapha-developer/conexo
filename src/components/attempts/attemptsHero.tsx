

export const AttemptsHero = ({ attempts }: {attempts: number}) => {
    const text = "tentativas: "
    return (
        <div className="py-3">
            <p className="font-nunito text-sm font-normal text-darkText-100 uppercase">
            {text} <span className="text-[15px] font-extrabold">{attempts}</span>
            </p>
        </div>
    )
}