import React, { useState } from 'react';
import LetterGrid from './LetterGrid';
import ButtonGrid from './ButtonGrid';


/*
function GameBoard(props) {
  return (
    <div className="App">
     <h2>{props.secretWord}</h2>
    </div>
  );
}

function GameBoard({secretWord}) {
  return (
    <div className="App">
     <h2>{secretWord}</h2>
    </div>
  );
}
*/



//(문제단어, 최대틀린횟수, 맞춰야할 단어길이)
const GameBoard = ({secretWord, maxError, answerLength})=>{
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [errorCount, setErrorCount] = useState(0);


  let clickHandler = (value)=>{
    let val = value.toLowerCase();
    /*
    복사본 생성
    복사본 값 추가
    기본배열 -> 복사본 변경
  
    let gl = [...guessedLetters];
    gl.push(val);
    setGuessedLetters(gl);
    */
    setGuessedLetters(prev=>[...prev,val]);

    /*
    사용자가 클릭한게 틀리면 errorCount를 1 씩 증가 시킨다.
    */
    let iscorrect = secretWord.indexOf(val)
    if(iscorrect === -1){
      setErrorCount(errorCount+1)
    }

    
  }

  let reset = () =>{
    setErrorCount(0);
    setGuessedLetters([]);
    let buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(item=>item.classList.remove('hidden'));
  }

  return (
    <>
    {errorCount<maxError ?
      <div className={secretWord ? '' : 'hidden'}>
        틀린횟수 : {errorCount} / {maxError}
        <LetterGrid secretWord={secretWord} complete={reset} guessedLetters={guessedLetters} answerLength={answerLength} />
        <ButtonGrid onclick={clickHandler}/>      
      </div>
      :
      <button className={secretWord ? '' : 'hidden'} onClick={reset}>Retry</button>
    }
    </>
  );
}

export default GameBoard;