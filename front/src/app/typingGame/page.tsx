"use client"
import { useState, useEffect } from 'react';
import './App.scss';
import Image from "next/image";
import localImage from './components/16-.jpg'


interface TypingData {
    sentencejp: string
    sentencero: string
  }

function TypingAPi(): TypingData[] {
    const outputDataList: TypingData[] = [{
        sentencejp: "ごみを分別しよう",
        sentencero: "gomiwobunnbetusiyou",
    },
    {
        sentencejp: "二酸化炭素を減らしましょう",
        sentencero: "nisannkatannsowoherasimashou",
    },
    {
        sentencejp: "グレタさんを敬いましょう",
        sentencero: "guretasannwouyamaimashou",
    },
  ];
  
  return outputDataList;
  }


export default function Typing() {
const [TypingCount,setTypingCount] = useState(0);
const TypingArray : TypingData[] = TypingAPi();

const [vowels, setVowels] = useState<string>("aeiou");
const [consonants, setConsonants] = useState<string>("bcdfghjklmnpqrstvwxyz");

const [typing, setTyping] = useState<boolean>(false);//入力可能か不可能か
const [position, setPosition] = useState<number>(0); //位置情報をstateに追加

const [typo, setTypo] = useState<number[]>(new Array(0));//打ち間違えた位置の配列

let quizIndex : number = 0; //クイズの数
let missType : number = 0; //ミスタイプの数

const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (typing) {//入力可能のとき
    let textSpans = document.querySelector("#textbox")!.children;//文字の配列を取得,!を追加することでnullでないときのみ動くようにする
    if (e.key === TypingArray[TypingCount].sentencero[position]) {//入力したキーと現在入力しようとしている文字が一致するとき
        if ((vowels.match(new RegExp(e.key, "g")) || []).length >= 2) {
            setVowels(vowels.replace(e.key, ""));
        } else if (
            (consonants.match(new RegExp(e.key, "g")) || []).length >= 2
        ) {
            setConsonants(consonants.replace(e.key, ""));
        }
        //現在の文字を入力済みとする
        textSpans[position].classList.remove("current-letter");
        textSpans[position].classList.add("typed-letters");
        if (position <= TypingArray[TypingCount].sentencero.length - 2) {//まだ入力していない文字があるとき
            textSpans[position + 1].className = "current-letter";
            setPosition(position + 1);
        } else {//入力不可にする
            quizIndex++;
            missType += typo.length;
            console.log(quizIndex);
            console.log(missType);
            refresh();
        }
        } else {//間違えたキーを入力したとき
        if (typo.indexOf(position) === -1) {//その位置でのはじめての打ち間違えであるとき
            let typoedLetter = TypingArray[TypingCount].sentencero[position];

            if (~vowels.indexOf(typoedLetter)) {
            setVowels(vowels + typoedLetter.repeat(10));
            } else if (~consonants.indexOf(typoedLetter)) {
            setConsonants(consonants + typoedLetter.repeat(10));
            }
            setTypo([...typo, position]);//打ち間違えた位置の配列にその位置を追加
            textSpans[position].classList.add("typo");//打ち間違えた文字であることを示すclassを追加
        }
        }   
    }
};


const refresh = () => {
    //文字の配列を取得
    let textSpans = document.querySelector("#textbox")!.children;
    //全ての文字のクラス名を変更
    for (const i of textSpans){
        i.className = "waiting-letters";
    }
    setPosition(0);//位置を最初に
    setTypo(new Array(0));//打ち間違えた位置の配列をリセット
    setTypingCount(TypingCount+1)
};

return (
    <div className='flex justify-center h-screen bg-lime-300'>
        <div className="flex flex-col justify-center items-center border-[3px] border-black w-[900px] h-[580px] mt-[100px] bg-white">
            <div className='text-center text-[50px] mt-[80px]'>{TypingArray[TypingCount].sentencejp}</div>
            <div
                onKeyDown={e => handleKey(e)}
                className='flex flex-col justify-center items-center'>
                <div>
                    <div id="textbox" className='text-center text-[30px] '>
                        <span className="current-letter">{TypingArray[TypingCount].sentencero[0]}</span>
                        {TypingArray[TypingCount].sentencero
                            .split("")
                            .slice(1)
                            .map(char => (
                            <span className="waiting-letters">{char}</span>
                            ))}
                        </div>
                        <div className='text-center text-[20px]'>
                        ミスタイプ数：{typo.length}　 正確率：
                        {(
                            100 *
                            (1 -
                            typo.length /
                                (typo.slice(-1)[0] === position
                                ? position + 1
                                : position === 0
                                ? 1
                                : position))
                        ).toFixed(2)}
                        %
                    </div>
                </div>
                <button onClick={() => setTyping(true)} className='bg-blue-500 hover:bg-blue-300 w-[80px] py-2 rounded text-[20px] mt-[15px] mb-[30px]'>{typing ? "タイプ中" : "はじめ"}</button>
            </div>
            <Image src={localImage} alt="image" className="h-[270px] w-[320px] mt-[-20px]"/>
        </div>
    </div>
    );
}
