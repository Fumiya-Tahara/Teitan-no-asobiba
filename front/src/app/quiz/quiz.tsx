"use client"
import { useState } from "react";
import QuizBox from "./quiz_box";
import { QuizData } from "./interface";



function Quiz(data: QuizData[]) {
  const [quizCount, setQuizCount] = useState(0);

  const quiz = data["data"][quizCount];  

  return (
    <div className="bg-lime-300 py-6">
      <div className="rounded-lg flex justify-center mx-32 py-10 px-10 bg-white">
        <div className="flex flex-col">
          <QuizBox
          quiz={quiz}
          />
          <div className="flex flex-row-reverse">
            <button className="rounded-lg w-24 mt-10 bg-slate-500 hover:bg-slate-400 text-white" onClick={() => setQuizCount(quizCount+1)}>
              次の問題へ
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz
