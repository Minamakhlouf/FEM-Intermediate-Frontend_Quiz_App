import { useState } from "react";
import QuizAnswers from "./QuizAnswers";
import QuizAnswerSubmit from "./QuizAnswerSubmit";
import ProgressBar from "./ProgressBar";
import "./Quiz.css"
import QuizComplete from "./QuizComplete";

const Quiz = (props) => {
    const [quizState, setQuizState] = useState({
        questionChosen: "", 
        questionStatus: "", 
        quizAnswers: []
    })

    let optionLetters = ["A", "B", "C", "D"];
    let userAnswer = ""; 
    let correctAnswer = ""

    try {
        correctAnswer = props.chosenQuiz.questions[quizState.quizAnswers.length].answer
    } catch (error) {
        correctAnswer = false; 
    } 

    if (quizState.questionChosen) {
        userAnswer = props.chosenQuiz.questions[quizState.quizAnswers.length].options[optionLetters.indexOf(quizState.questionChosen)]
    }

    const onSelection = (letter) => {
        setQuizState((prevState) => { return {...prevState, questionChosen: letter}}); 
    }

    const quizSubmitHandler = () => {
        if (!quizState.questionChosen && quizState.questionStatus === "") {
            setQuizState((prevState) => { return {...prevState, questionStatus: 0}})
        } else if (quizState.questionChosen && (quizState.questionStatus === "" || quizState.questionStatus === 0)) {
            setQuizState((prevState) => { return {...prevState, questionStatus: 1}})
        } else if (quizState.questionStatus === 1) {
            setQuizState((prevState) => { return {...prevState, questionStatus: "", questionChosen: "", quizAnswers: [...prevState.quizAnswers, userAnswer]}}); 

        }
    }

    return (
        <section className="quiz">
            {correctAnswer ? <div className="quiz_question-container">
            <div className="quiz_questions-progress">
            <div className="quiz_text-container">
            <p className="quiz_text">Question {quizState.quizAnswers.length + 1} out of {props.chosenQuiz.questions.length}</p>
            <h2 className="quiz_question text">{props.chosenQuiz.questions[quizState.quizAnswers.length].question}</h2>
            </div>
            <ProgressBar max={props.chosenQuiz.questions.length} value={quizState.quizAnswers.length} progress={(quizState.quizAnswers.length / props.chosenQuiz.questions.length) * 100}/> 
            </div>
            <div className="quiz_answers-submit">
            <ul className="quiz_list">
                {props.chosenQuiz.questions[quizState.quizAnswers.length].options.map((answer, index) => { 
                    return <QuizAnswers 
                        key={`${optionLetters[index]}${index}}`} 
                        letter={optionLetters[index]} 
                        answer={answer} 
                        correctAnswer = {correctAnswer}
                        isSelected={quizState.questionChosen === optionLetters[index]}
                        onSelection={() => { if (quizState.questionStatus === 1) { return } onSelection(optionLetters[index])}}
                        status={quizState.questionStatus}
                    /> })}
            </ul>
            <QuizAnswerSubmit onClick={quizSubmitHandler} questionStatus={quizState.questionStatus}/>
            </div>
            </div> : <QuizComplete img={props.chosenQuiz.icon} imgBackground={props.chosenQuiz.iconBackground} title={props.chosenQuiz.title} questions={props.chosenQuiz.questions} userAnswers={quizState.quizAnswers} onQuizReset={props.onQuizReset}/>}
        </section>
    )
}

export default Quiz