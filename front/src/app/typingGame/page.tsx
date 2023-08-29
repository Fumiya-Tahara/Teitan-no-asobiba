"use client"
import { useState, useEffect } from 'react';
import './App.scss';


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
    }
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
        textSpans[position].classList.add("typed-letters");
        textSpans[position].classList.remove("current-letter");
        if (position <= TypingArray[TypingCount].sentencero.length - 2) {//まだ入力していない文字があるとき
            textSpans[position + 1].className = "current-letter";
            setPosition(position + 1);
        } else {//入力不可にする
            setTyping(false);
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

// const typingToggle = () => setTyping(typing ? false : true);

// useEffect(() => {
//     console.log("useEffectが実行された");
// },[typing]);

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
    <div className='flex justify-center'>
        <div className="flex flex-col justify-center items-center border border-black w-[800px] h-[250px] mt-[200px]">
            <div className='text-center text-[50px]'>{TypingArray[TypingCount].sentencejp}</div>
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
                {/* <button onClick={refresh} className='bg-blue-500 hover:bg-blue-300 w-[80px] py-2 rounded text-[20px] mt-[15px] mb-[30px]'>つぎへ</button> */}
            </div>
        </div>
    </div>
    );
}
