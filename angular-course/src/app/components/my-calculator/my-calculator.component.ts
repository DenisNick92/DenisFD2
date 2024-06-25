import { Component } from '@angular/core';
interface CalcGroup{
  first: CalcVar,
  second: CalcVar,
  operation: CalcOperations;
}
interface CalcVar {
  value: number;
  modificator: CalcModifiers;
}
enum CalcOperations {
  plus = '+',
  minus = '-',
  multiply = '*',
  divide = '/'
}
enum CalcModifiers {
  none = 'none',
  sin = 'sin',
  cos = 'cos',
  square = 'square',
 
}

@Component({
  selector: 'app-my-calculator',
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.scss'
})
export class MyCalculatorComponent {





  
  public first: number = 1;
  public second: number = 1;
  public operation: string = '+';
  public operations: string[] = ['+', '-', '*', '/'];
  public result: number | undefined = undefined;
  public calc() {
    switch(this.operation) {
      case '+': 
              this.result = this.first + this.second;
              break;
      case '-': 
              this.result = this.first - this.second;
              break;
      case '*': 
              this.result = this.first * this.second;
              break;
      case '/': 
              this.result = this.first / this.second;
              break;
    }
  };
}
