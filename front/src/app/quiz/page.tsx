import Quiz from "./quiz";
import { QuizData } from "./interface";

function callQuizAPI() {
 return fetch("http://localhost:8888/api/quiz.php")
  .then((data) => {
    data.json();
    })
}

async function page() {
  const res = await callQuizAPI();
  // console.log("res =",res)

  console.log(await callQuizAPI());
    



  return (
    <>
      <Quiz />
    </>
  )
}

export default page
