import React , {useState}  from 'react';

export default function Calculator() {
  const [currentOperand, setCurrentOperand] = useState('');
      const [previousOperand, setPreviousOperand] = useState('');
      const [operation, setOperation] = useState(null);

      function appendNumber(number) {
        if (number === '.' && currentOperand.includes('.')) return;
          setCurrentOperand(currentOperand + number);
     }


    function chooseOperation(op) {
      if (currentOperand === '') return;
      if (previousOperand !== '') {
          calculate()
      }
      setOperation(op);
      setPreviousOperand(currentOperand);
      setCurrentOperand('');
  }


    function calculate() {
      let result;
      const prev = parseFloat(previousOperand);
      const current = parseFloat(currentOperand);

      if (isNaN(prev) || isNaN(current)) return;

      switch (operation) {
          case '+':
              result = prev + current;
              break;
          case '-':
              result = prev - current;
              break;
          case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }

    setCurrentOperand(result);
    setOperation(null);
    setPreviousOperand('');
}

    function clearDisplay() {
      setCurrentOperand('');
      setPreviousOperand('');
      setOperation(null);
  }

    function deleteNumber() {
      setCurrentOperand(currentOperand.toString().slice(0, -1));
  }
  return (
    <>
     <div className='container'>
            <div class="calculator">
              <input type="text" id="display" placeholder='0'/>
               <div>
                 <button class="operator" onClick={clearDisplay}>AC</button>
                 <button class="operator" onClick={deleteNumber}>DEL</button>
                 <button class="operator" onClick={() => chooseOperation('%')}>%</button>
                 <button class="operator" onClick={() => chooseOperation('/')}>/</button>
               </div>
               <div>
                 <button class="button" onClick={() => appendNumber('7')}>7</button>
                 <button class="button" onClick={() => appendNumber('8')}>8</button>
                 <button class="button" onClick={() => appendNumber('9')}>9</button>
                 <button class="operator" onClick={() =>chooseOperation('*')}>*</button>
               </div>
               <div>
                 <button class="button" onClick={() => appendNumber('4')}>4</button>
                 <button class="button" onClick={() => appendNumber('5')}>5</button>
                 <button class="button" onClick={() => appendNumber('6')}>6</button>
                 <button class="operator" onClick={()=>chooseOperation('+')}>+</button>
               </div>
               <div>
                 <button class="button" onClick={() => appendNumber('1')}>1</button>
                 <button class="button" onClick={() => appendNumber('2')}>2</button>
                 <button class="button" onClick={() => appendNumber('3')}>3</button>
                 <button class="operator" onClick={()=>chooseOperation('-')}>-</button>
               </div>
               <div>
                 <button class="button" onClick={() => appendNumber('00')}>00</button>
                 <button class="button" onClick={() => appendNumber('0')}>0</button>
                 <button class="button" onClick={() => appendNumber('.')}>.</button>
                 <button class="equalBtn" onClick={calculate}>=</button>
               </div>
              </div>
     </div>
     </>
 );
}
