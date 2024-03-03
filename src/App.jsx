import { useState } from "react"; 
import './App.css'
import Navigation from "./components/Navigation"; 
import QuizPicker from './components/QuizPicker';
import Quiz from "./components/Quiz"
import quizzes from "../data.js"; 

function App() {
  const [quizIndex, setQuizIndex] = useState("");
  const [isLightMode, setIsLightMode] = useState(true); 

  const idName = isLightMode ? "light" : "dark"

  const onColorSchemeToggle = () => {
    setIsLightMode((prev) => {
      return !prev; 
    })
  }

  const onQuizPick = (index) => {
    setQuizIndex(Number(index)); 
  } 

  const onQuizReset = () => {
    setQuizIndex("")
  }

  return (
    <div className="app" id={idName}>
      <Navigation quizzes={quizzes} index={quizIndex} onColorSchemeToggle={onColorSchemeToggle}/>
      {quizIndex === "" && <QuizPicker quizInfo={quizzes} onQuizPick={onQuizPick}/>} 
      {quizIndex !== "" && <Quiz chosenQuiz={quizzes[quizIndex]} onQuizReset={onQuizReset}/>}
    </div>
  )
}

export default App
