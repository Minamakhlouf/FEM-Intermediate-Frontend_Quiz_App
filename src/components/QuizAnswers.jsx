import "./QuizAnswers.css"; 
import iconCorrect from  "../assets/icon-correct.svg"
import iconError from "../assets/icon-error.svg"

const QuizAnswers = (props) => {
    let image = props.answer === props.correctAnswer ? <img src={iconCorrect} alt="" /> : <img src={iconError} alt="" />
    let isCorrect = props.answer === props.correctAnswer
    let buttonClass= ""
    let letterClass= ""

    if (props.isSelected && (props.status === "" || props.status === 0)) {
        buttonClass="selected";
        letterClass="selected"
    } else if (props.isSelected && isCorrect && props.status === 1) {
        buttonClass="correct"
        letterClass="correct"
    } else if (props.isSelected && !isCorrect && props.status === 1) {
        buttonClass="error"; 
        letterClass="error"
    }

    return (
        <li className="answers">
            <button 
                className={`answers_button background ${buttonClass}`} 
                onClick={props.onSelection}>
                    <div className={`answers_letter ${letterClass}`}>{props.letter} </div>
                    <div className="text">{props.answer}</div>
                    {props.status === 1 && (props.isSelected || isCorrect) && <div className="answers_icon">{image}</div>}
            </button>
        </li>
    )
}

export default QuizAnswers; 