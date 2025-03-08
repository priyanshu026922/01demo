document.addEventListener('DOMContentLoaded', () => {
  const display = document.querySelector('.display');
  let currentInput = '';
  let lastOperator = '';
  let lastOperand = '';
  let result = null;

  const updateDisplay = () => {
      display.textContent = currentInput || '0';
  };

  const handleNumberClick = (num) => {
      currentInput += num;
      updateDisplay();
  };

  const handleOperatorClick = (operator) => {
      if (currentInput === '') return;
      
      if (lastOperator){
          calculate();
      }
      
      lastOperator = operator;
      lastOperand = currentInput;
      currentInput = '';
  };

  const calculate = () => {
      if (lastOperator && lastOperand !== '') {
          let operand1 = parseFloat(lastOperand);
          let operand2 = parseFloat(currentInput);
          switch (lastOperator) {
              case '+':
                  result = operand1 + operand2;
                  break;
              case '-':
                  result = operand1 - operand2;
                  break;
              case '*':
                  result = operand1 * operand2;
                  break;
              case '/':
                  result = operand1 / operand2;
                  break;
          }
          currentInput = result.toString();
          lastOperator = '';
          lastOperand = '';
          updateDisplay();
      }
  };

  const handleSqrtClick = () => {
      if (currentInput !== '') {
          currentInput = Math.sqrt(parseFloat(currentInput)).toString();
          updateDisplay();
      }
  };

  const handleACClick = () => {
      currentInput = '';
      lastOperator = '';
      lastOperand = '';
      result = null;
      updateDisplay();
  };

  const handleAnsClick = () => {
      if (result !== null) {
          currentInput = result.toString();
          updateDisplay();
      }
  };

  document.querySelectorAll('.box button').forEach(button => {
      button.addEventListener('click', () => {
          const buttonText = button.textContent.trim();

          if (!isNaN(buttonText) || buttonText === '.') {
              handleNumberClick(buttonText);
          } else if (['+', '-', '*', '/'].includes(buttonText)) {
              handleOperatorClick(buttonText);
          } else if (buttonText === 'sqrt') {
              handleSqrtClick();
          } else if (buttonText === 'AC') {
              handleACClick();
          } else if (buttonText === 'ANS') {
              handleAnsClick();
          }
      });
  });
updateDisplay();
});




