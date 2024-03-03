import "./QuizComplete.css"; 

const QuizComplete = (props) => {
    let counter = 0; 
    let answers = props.questions.map((question) => { return question.answer })

   answers.forEach((answer, index) => {
        if (answer === props.userAnswers[index]) {
            counter += 1; 
        }
    })

    return (
        <div className="quiz-complete">
            <h2 className="quiz-complete_heading text">Quiz Completed <br></br> <span>You scored...</span></h2>
            <div className="quiz-complete_flex-child">
            <div className="quiz-complete_message-container background">
                <div className="quiz-complete_quiz-name text"> <div style={{backgroundColor: props.imgBackground, borderRadius: "10px"}}><img src={props.img} alt="" /> </div> {props.title}</div>
                <div className="quiz-complete_quiz-score text">{counter}</div>
                <p className="quiz-complete_out-of">out of 10</p>
            </div>
            <button className="quiz-complete_play-again" onClick={props.onQuizReset}>Play Again</button>
            </div>
        </div>
    )
}

export default QuizComplete