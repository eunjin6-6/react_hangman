import React from 'react';


const Letter = ({value, isShown})=>{//props.value
  let output = '';
  if(isShown){
    output = value;
  }

  return (
    <span>{output}</span>
  );
}

export default Letter;