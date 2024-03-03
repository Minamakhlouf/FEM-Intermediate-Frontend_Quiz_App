import errorIcon from "../assets/icon-error.svg"; 
import "./QuizAnswerSubmit.css"; 

const QuizAnswerSubmit = (props) => {
    return (
        <div className="quiz-submit">
            <button className="quiz-submit_button" onClick={props.onClick}>{props.questionStatus !== 1 ? "Submit Answer" : "Next Question"}</button>
            {props.questionStatus === 0 && <p className="quiz-submit_error"><img src={errorIcon} alt="" /> Please select an answer</p>}
        </div>
    )
}

export default QuizAnswerSubmit