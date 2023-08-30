"use client"
import { useState } from "react";
import QuizBox from "./quiz_box";
import { QuizData } from "./interface";

function quizAPi(): QuizData[] {
  const outputDataList: QuizData[] = [{
    title: "ごみをださない方法",
    problem: "ごみをださないための方法としてよくないのは次のうちどれでしょう。",
    choice1: "ウォーターサーバーを使う",
    choice2: "吸水性の高いふきんを使う",
    choice3: "電池を充電式に交換",
    choice4: "新たな製品をこまめに購入",
    rightAnswer: "新たな製品をこまめに購入",
    commentary: "できるだけものを長く使うことでごみを減らすことができる！充電池は繰り返し使えば使うほどお得になるぞ！",
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
