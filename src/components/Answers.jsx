import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}) {
    
    const shuffledAnswers = useRef();

    // Only execute if we have the question left to display
    // Code execute only when we don't have the shuffledAnswers
    if(!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }
    
    // console.log(answerState);

    return (
        <ul id='answers'>
            {shuffledAnswers.current.map((answer) => {
                const isSelected = selectedAnswer === answer;
                let cssClass = '';
                if (answerState === 'answered' && isSelected) {
                    cssClass = 'selected';
                }

                if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                    cssClass = answerState;
                }

                return (
                    <li key={answer} className='answer'>
                        <button 
                            onClick={() => onSelect(answer)}
                            className={cssClass}
                            disabled={answerState !== ''}
                        >
                            {answer}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}