import Quiz from "./quiz";
import { QuizData } from "./interface";

function callQuizAPI() {
 return fetch("http://localhost:3000/quiz.json")
  .then((res) => {    
    return res.json();
  })
}

async function page() {
  const res: QuizData[] = await callQuizAPI();
  

  return (
    <>
      <Quiz data={res}/>
    </>
  )
}

export default page
