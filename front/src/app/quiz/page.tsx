"use client"
import { useState } from "react";
import QuizBox from "./quiz_box";
import { QuizData } from "./interface";


function quizAPi(): QuizData[] {
  const outputDataList: QuizData[] = [{
    title: "問題１",
    problem: "パンはパンでも食べられないパンは？",
    choice1: "フランスパン",
    choice2: "メロンパン",
    choice3: "フライパン",
    choice4: "カレーパン",
    rightAnswer: "フライパン",
    commentary: "フライパンは食べられません",
  },
  {
    title: "問題２",
    problem: "朝になると叫ぶ花は？",
    choice1: "サクラ",
    choice2: "バラ",
    choice3: "ひまわり",
    choice4: "アサガオ",
    rightAnswer: "アサガオ",
    commentary: "朝、ガオー",
  }
];

return outputDataList;
}

function Quiz() {
  const [quizCount, setQuizCount] = useState(0);

  const quizArray: QuizData[] = quizAPi();
  const quiz = quizArray[quizCount];

  return (
    <div className="bg-lime-300 py-8">
      <div className="rounded-lg flex justify-center mx-32 py-10 bg-white">
        <div className="flex flex-col">
          <QuizBox
          quiz={quiz}
          />
          <div className="flex flex-row-reverse">
            <button className="rounded-lg w-24 mt-10 bg-blue-500 hover:bg-blue-400 text-white" onClick={() => setQuizCount(quizCount+1)}>
              次の問題へ
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz
