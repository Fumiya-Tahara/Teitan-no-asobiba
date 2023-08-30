import Image from "next/image";
import localImage from "./38-.jpg";
import localImage2 from "./typingGame/components/W_Teitan_Black-teitan_Design_Manual_2016_004.jpg"
import Link from "next/link";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-screen bg-lime-300">
        <div className="flex flex-row justify-evenly items-center">
          <div className="flex flex-col justify-center items-center">
            <Image className="w-[500px] h-[340px] rounded-lg mt-[180px]" src={localImage} alt="画像"/>
            <Image className="w-[180px] h-[20px] rounded-lg mt-[-50px]" src={localImage2} alt="画像"/>
          </div>
          <div className="flex flex-col w-[500px] h-[300px] rounded-lg mt-[145px]">
            <p className="mb-[30px] text-[40px]">こんにちは！</p>
            <p className="text-2xl pt-[15px]">ボクたちはていたんとブラックていたん</p>
            <p className="text-2xl pt-[15px]">北九州市の人たちにもっと環境意識を持ってもらうために北極からやってきたんだ！</p>
            <p className="text-2xl pt-[15px]">ブラックていたんはちょっとやんちゃだけど何事にも一生懸命なんだ</p>
            <p className="text-2xl pt-[15px]">クイズとタイピング是非やってみてね！</p>
          </div>
        </div>
        <div className="flex flex-row justify-evenly mt-[150px]" >
          <Link href="" className="w-[300px] bg-red-500 hover:bg-red-300 rounded py-3 text-center font-bold text-[60px]">クイズ</Link>
          <Link href="" className="w-[300px] bg-sky-500 hover:bg-sky-300 rounded py-3 text-center font-bold text-[60px]">タイピング</Link>
        </div>
      </div>
    </>
  )
}
