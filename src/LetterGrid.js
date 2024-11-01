import React, { useEffect, useState } from 'react';
import Letter from './Letter';


const LetterGrid = ({secretWord, guessedLetters, answerLength, complete})=>{

  /*
  secretWord의 문자열을 배열로 변환하고, 
  그 배열에 각각의 값으로 span태그
  secretWord.split()
  */
  //let letters = secretWord.split('').map(letter=> <span>{letter}</span>);
  const [answer, setAnswer] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false); // 완료 상태 추가

  //answer값이 변경되면 answerLength와 비교해서 정답여부 파악
  useEffect(()=>{
   
    if(answerLength > 0 && answer === answerLength && !hasCompleted){
      alert('정답입니다!');
      complete();
      setHasCompleted(true); // alert 한 번 표시 후 다시 표시되지 않도록 설정
    }
  },[answer, answerLength, complete, hasCompleted]);

  //guessedLetters의 값이 변경되면 answer를 업데이트
  useEffect(()=>{
    let newCount = [...secretWord].reduce((count,letter)=>{
      return count + (guessedLetters.includes(letter.toLowerCase()) ? 1:0);
    },0);

    console.log('실행',newCount);
    setAnswer(newCount);
  },[guessedLetters, secretWord]);

  let letters = [...secretWord].map((letter,idx)=> {
    //let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
    let isShown = guessedLetters.includes(letter.toLowerCase());
    //isShown && setAnswer(answer + 1);
    return (
      <Letter key={idx} value={letter} isShown={isShown}></Letter> 
    )
  });
  

  return (
    <div className="letters">
      {letters}
    </div>
  );
}

export default LetterGrid;