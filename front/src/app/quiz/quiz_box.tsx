import { useEffect, useState } from "react";
import Image from "next/image"
import { QuizData } from "./interface"

interface RequestQuizData {
  quiz: QuizData
}

function QuizBox(quiz) {
  const [isAnswerd, setIsAnswered] = useState(false);
  quiz = quiz["quiz"];

  console.log(quiz);
  
  
  useEffect(() => {setIsAnswered(false)}, [])

  const answerBox = (
    <div>
      <div>
        <div>
          <div>解答</div>
          <div>{quiz.rightAnswer}</div>
        </div>
        <div>
          <div>あなたの回答</div>
          <div></div>
        </div>
      </div>
      <div>
        <div>解説</div>
        <div>{quiz.commentary}</div>
      </div>
    </div>
  );
  
  
  return (
    <>
      <div>
        <div>
          <div className="text-2xl font-bold">{quiz.title}</div>
          <div className="text-lg">{quiz.problem}</div>
        </div>
        <div className="flex flex-col">
          <Image src={"/image/38-考える.png"} alt="考えるていたん・ブラックていたん" width={1000} height={1000}/>
          <div className="w-full flex justify-center">
            <Image src={"/image/【W_日】Teitan_Black-teitan_Design_Manual_2016_004.jpg"} alt="コピーライト" width={200} height={200} />
          </div>
        </div>
        <div>
          <ul className="mt-10 flex justify-around text-lg">
            <li>
              <button  className="flex bg-slate-500 hover:bg-slate-400 text-white rounded-lg w-60 justify-center" onClick={() => setIsAnswered(true)} style={{aspectRatio: 1.618 / 1}}>
                <div className="font-medium text-base">A.</div>
                <div>{quiz.choices1}</div>
              </button>
            </li>
            <li>
              <button className="flex bg-slate-500 hover:bg-slate-400 text-white rounded-lg w-60 justify-center" onClick={() => setIsAnswered(true)} style={{aspectRatio: 1.618 / 1}}>
                <div className="font-medium text-base">B.</div>
                <div>{quiz.choices2}</div>
              </button>
            </li>
            <li>
              <button className="flex bg-slate-500 hover:bg-slate-400 text-white rounded-lg w-60 justify-center" onClick={() => setIsAnswered(true)} style={{aspectRatio: 1.618 / 1}}>
                <div className="font-medium text-base">C.</div>
                <div>{quiz.choices3}</div>
              </button>
            </li>
            <li>
              <button className="flex bg-slate-500 hover:bg-slate-400 text-white rounded-lg w-60 justify-center" onClick={() => setIsAnswered(true)} style={{aspectRatio: 1.618 / 1}}>
                <div className="font-medium text-base">D.</div>
                <div>{quiz.choices4}</div>
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
