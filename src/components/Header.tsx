

export const Header = ({text}: { text: string }) => {
    return (
        <header className="py-8">
            <div className="container mx-auto">
                <h1 className="font-nunito text-2xl lg:text-3xl font-extrabold text-darkText-100 uppercase text-center">
                    {text}
                </h1>
            </div>
        </header>
    )
}