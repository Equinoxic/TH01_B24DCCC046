import { useState, useRef } from "react";

export default function Bai5() {
  const questionList = [
    {
      text: "ReactJS dùng để làm gì?",
      answers: ["Mobile App", "Web UI", "Hệ điều hành", "Cơ sở dữ liệu"],
      correct: 2
    },
    {
      text: "Props trong React là gì?",
      answers: ["Trạng thái", "Thuộc tính truyền vào", "API", "CSS"],
      correct: 2
    },
    {
      text: "State dùng để?",
      answers: ["Quản lý dữ liệu thay dổi", "Định nghĩa component", "Kết nối backend", "Trang trí giao diện"],
      correct: 1
    }
  ]

  const correctNum = useRef(0);
  const [questions, setQuestions] = useState(questionList);
  const currentQuestion = questions[0];

  function nextQuestion() {
    setQuestions((prev) => prev.slice(1));
  }

  function QuestionPrompt({ text, answers, correctAnswer }) {
    return (
      <div>
        <p>{text}</p>
        <div>
          {answers.map((answer, index) => (
            <button onClick={(index+1 === correctAnswer) ? 
              () => {correctNum.current += 1; nextQuestion();}
              :
              () => {nextQuestion()}
            }>
              {answer}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <h2><b>Bài 5: Quiz App</b></h2>
      <div>
        {(questions.length !== 0) ?
          <QuestionPrompt
          text={currentQuestion.text}
          answers={currentQuestion.answers}
          correctAnswer={currentQuestion.correct} />
          :
          <p>{`Bạn trả lời đúng ${correctNum.current}/${questionList.length} câu.`}</p>
        }
      </div>
    </div>
  )
}