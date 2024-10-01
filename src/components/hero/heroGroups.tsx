

export const HeroGroups = ({ text }: {text: string}) => {
    return (
        <>
            <p className="font-nunito text-xl text-white font-medium text-center mb-4">
                {text}
            </p>
            <div className="flex flex-col gap-1 bg-dark-200 rounded-md max-w-xs mx-auto py-3 px-2">
                <div className="flex justify-between gap-2 bg-darkGroup-100/40 rounded-md w-full h-10 py-2 px-2">
                    <div className="bg-darkGroup-100 rounded-md w-full h-full"></div>
                    <div className="bg-darkGroup-100 rounded-md w-full h-full"></div>
                    <div className="bg-darkGroup-100 rounded-md w-full h-full"></div>
                    <div className="bg-darkGroup-100 rounded-md w-full h-full"></div>
                </div>
                <div className="flex justify-between gap-2 bg-darkGroup-200/40 rounded-md w-full h-10 py-2 px-2">
                    <div className="bg-darkGroup-200 rounded-md w-full h-full"></div>
                    <div className="bg-darkGroup-200 rounded-md w-full h-full"></div>
                    <div className="bg-darkGroup-200 rounded-md w-full h-full"></div>
                    <div className="bg-darkGroup-200 rounded-md w-full h-full"></div>
                </div>
                <div className="flex justify-between gap-2 bg-darkGroup-300/40 rounded-md w-full h-10 py-2 px-2">
                    <div className="bg-darkGroup-300 rounded-md w-full h-full"></div>
                    <div className="bg-darkGroup-300 rounded-md w-full h-full"></div>
                    <div className="bg-darkGroup-300 rounded-md w-full h-full"></div>
                    <div className="bg-darkGroup-300 rounded-md w-full h-full"></div>
                </div>
                <div className="flex justify-between gap-2 bg-darkGroup-400/40 rounded-md w-full h-10 py-2 px-2">
                    <div className="bg-darkGroup-400 rounded-md w-full h-full"></div>
                    <div className="bg-darkGroup-400 rounded-md w-full h-full"></div>
                    <div className="bg-darkGroup-400 rounded-md w-full h-full"></div>
                    <div className="bg-darkGroup-400 rounded-md w-full h-full"></div>
                </div>
            </div>
        </>
    )
}