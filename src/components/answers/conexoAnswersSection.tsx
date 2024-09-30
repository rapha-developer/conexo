import { answersType, answerType } from "../../types/AnswersType";

export const ConexoAnswersSection = ({ answers }: answersType) => {
    return (
        <>
            {Array.isArray(answers) &&
            answers.length > 0 &&
            answers.map((answerItem) => (
                <ConexoAnswerItem 
                    key={`${answerItem.bgColorGroup}-key`}
                    item={answerItem.item}
                    bgColorGroup={answerItem.bgColorGroup}
                />
            ))
            }
        </>
    )
}

const ConexoAnswerItem = ({ item, bgColorGroup }: answerType) => {
    const answersFormatted = [item.wordFirst, item.wordSecond, item.wordThird, item.wordFourth].join(", ");
    return (
        <div className={`${bgColorGroup} w-full py-[18px] rounded-[10px] mb-[10px] animate-faded`}>
            <div className="mx-auto flex flex-col gap-[3px] items-center justify-center">
                <h3 className="font-nunito text-base font-extrabold text-darkText-100 text-center">{item.conexoAnswer}</h3>
                <p className="font-nunito text-base font-normal text-darkText-100 text-center uppercase">{answersFormatted}</p>
            </div>
        </div>
    )
}