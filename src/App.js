import { useRef, useState } from 'react';
import './App.css';
function App() {
  const oper = ["","+","/","%","*"]
  const textRef = useRef(null)
  const [bracket,setBracket] = useState('(')
  function updateTextBox(e){
        if(oper.includes(e.target.value) && !textRef.current.value);
        else if(e.target.value === 'ac'){
          setBracket('(')
          textRef.current.value = ""
        }
        else if(e.target.value === 'bk'){
          if(textRef.current.value.slice(-1)==='(')
            setBracket('(')
          if(textRef.current.value.slice(-1)===')')
            setBracket(')')  
          textRef.current.value = textRef.current.value.substr(0,textRef.current.value.length-1)
        }
        else if (e.target.value === 'brk')
          {textRef.current.value+=bracket
            if (bracket === '(')
              setBracket(')');
            else
            setBracket('(');
          }
        else if(e.target.value === 'eq')
            textRef.current.value = eval(textRef.current.value);
        else
          textRef.current.value+=e.target.value
  }
  return (
    <div className="Calculator">
      <div className="Screen"> 
        <input type="textbox" id="screen" ref={textRef} disabled/>
      </div>
      <div className="Keys">
          <button id="ac" value="ac" onClick={updateTextBox}>AC</button>
          <button id="bk" value="bk" onClick={updateTextBox}>&lArr;</button>
          <button id="mod" value="%" onClick={updateTextBox}>%</button>
          <button id="div" value="/" onClick={updateTextBox}> / </button>
          <button id="7" value="7" onClick={updateTextBox}>7</button>
          <button id="8" value="8" onClick={updateTextBox}>8</button>
          <button id="9" value="9" onClick={updateTextBox}>9</button>
          <button id="mul" value="*" onClick={updateTextBox}>*</button>
          <button id="4" value="4"onClick={updateTextBox}>4</button>
          <button id="5" value="5" onClick={updateTextBox}>5</button>
          <button id="6" value="6" onClick={updateTextBox}>6</button>
          <button id="min" value="-" onClick={updateTextBox}>-</button>
          <button id="1" value="1" onClick={updateTextBox}>1</button>
          <button id="2" value="2" onClick={updateTextBox}>2</button>
          <button id="3" value="3" onClick={updateTextBox}>3</button>
          <button id="add" value="+" onClick={updateTextBox}>+</button>
          <button id="dot" value="." onClick={updateTextBox}>.</button>
          <button id="0" value="0" onClick={updateTextBox}>0</button>
          <button id="brk" value="brk" onClick={updateTextBox}>( )</button>
          <button id="eq" value="eq" onClick={updateTextBox}>=</button>
      </div>
    </div>
  );
}

export default App;
