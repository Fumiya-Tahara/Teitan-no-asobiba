import { useEffect, useState } from "react";
import Image from "next/image"
import { QuizData } from "./interface"

interface RequestQuizData {
  quiz: QuizData
}

function QuizBox(quiz: RequestQuizData) {
  const [isAnswerd, setIsAnswered] = useState(false);
  const quizList: QuizData = quiz.quiz
  
  useEffect(() => {setIsAnswered(false)}, [])

  const answerBox = (
    <div>
      <div>
        <div>
          <div>解答</div>
          <div>{quizList.rightAnswer}</div>
        </div>
        <div>
          <div>あなたの回答</div>
          <div></div>
        </div>
      </div>
      <div>
        <div>解説</div>
        <div>{quizList.commentary}</div>
      </div>
    </div>
  );
  
  
  return (
    <>
      <div>
        <div>
          <div className="text-2xl font-bold">{quizList.title}</div>
          <div className="text-xl">{quizList.problem}</div>
        </div>
        <Image src={"/image/38-考える.png"} alt="考えるていたん・ブラックていたん" width={1000} height={1000}/>
        <div>
          <ul className="flex justify-around text-lg">
            <li>
              <button  className="flex bg-slate-200 rounded-lg w-48 justify-center" onClick={() => setIsAnswered(true)}>
                <div className="font-medium text-xl">A.</div>
                <div>{quizList.choice1}</div>
              </button>
            </li>
            <li>
              <button className="flex bg-slate-200 rounded-lg w-48 justify-center" onClick={() => setIsAnswered(true)}>
                <div className="font-medium text-xl">B.</div>
                <div>{quizList.choice2}</div>
              </button>
            </li>
            <li>
              <button className="flex bg-slate-200 rounded-lg w-48 justify-center" onClick={() => setIsAnswered(true)}>
                <div className="font-medium text-xl">C.</div>
                <div>{quizList.choice3}</div>
              </button>
            </li>
            <li>
              <button className="flex bg-slate-200 rounded-lg w-48 justify-center" onClick={() => setIsAnswered(true)}>
                <div className="font-medium text-xl">D.</div>
                <div>{quizList.choice4}</div>
              </button>
            </li>
          </ul>
          {isAnswerd ? answerBox : <></>}
        </div>
      </div>
    </>
  )
}

export default QuizBox
