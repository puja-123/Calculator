var buttons = document.getElementsByClassName("button");
var display = document.getElementById('output-display');
var operand1 = 0;
var operand2 = null;
var operator = null;
for(var i =0; i < buttons.length ;i++)
{
    buttons[i].addEventListener('click',function(){
        var value = this.getAttribute("value");
        if(value == '+' || value == '*' || value == '-' || value =='/' || value == '%')
        {
            operator = value;
            operand1 = parseFloat(display.textContent);
            display.innerText = '';
        }
        else if(value == '+/-')
        {
            operator = '+';
         	operand1 = parseFloat(display.textContent);
            operand1 = -1 * operand1;
            display.innerText = operand1;
        }
        else if(value == '=')
        {
            operand2 = parseFloat(display.textContent);
            display.innerText = eval(operand1 + " "+ operator + " " + operand2);
            
        }
        else if(value == 'AC')
        {
            display.innerText =''; 
        }
        else
        {
            display.innerText += value; 
        }
        
    });
}