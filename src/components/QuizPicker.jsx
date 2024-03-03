import "./QuizPicker.css"; 

const QuizPicker = (props) => {
    return  (
    <section className="quiz-picker">
        <div className="quiz-picker_text-container">
            <h1 className="quiz-picker_heading text">Welcome to the <br></br> <span>Frontend Quiz!</span></h1>
            <p className="quiz-picker_text">Pick a subject and get started.</p>
        </div>
        <ul className="quiz-picker_list">
            {props.quizInfo.map((quiz, index) => { return <li key={quiz.title}><button className="quiz-picker_button background text" onClick={(event) => { if (event.type === "keydown" && event.key !== "Enter") {return} props.onQuizPick(index)}}><div style={{backgroundColor: quiz.iconBackground, borderRadius: "10px"}}><img src={quiz.icon}/></div> {quiz.title}</button></li>})}
        </ul>
    </section>
)}

export default QuizPicker; 