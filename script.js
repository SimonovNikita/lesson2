"use strict"

// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 ++a-добавляем к переменной единицу (префикс)
// d = b++; alert(d);           // 1 b++-прибавляем к перменной единицу , но выводим предыдущее значение(постфикс)
// c = (2+ ++a); alert(c);      // 5 прибавили 2 к переменной (а) к которой уже была добавлена единица ранее, плюс добавили еще одну   
// d = (2+ b++); alert(d);      // 4 к переменной (b) ранее постфиксом добавили единицу, она записалась, но сейчас вывелось опять же прошлое значение  
// alert(a);                    // 3 прибавили единицу в примере 1 и примере 3
// alert(b);                    // 3 прибавили единицу в примере 2 и примере 4

// 2. Чему будет равен x в3 примере ниже?
var a = 2;
var x = 1 + (a *= 2); // ответ равен 5, так как в скобках умножение с присваиванем и плюс 1;

let a = 3;
let b = 5;

if (a>0,b > 0){
   console.log (a-b) 
};

if (a<0,b < 0){
    console.log (a*b) 
 };

 if (a<0,b > 0){
    console.log (a+b) 
 }
 if  (a>0,b<0){
    a+b;
 };

 let t = +prompt ('Введите число от 1 до 15');
 switch (t) {
 case 1:
     alert ( 'Ваше число 1');
     break;
 case 2:
     alert ( 'Ваше число 2');
     break;
 case 3:
     alert ( 'Ваше число 3');
     break;
 case 4:
     alert ( 'Ваше число 4');
     break;
 case 5:
     alert ( 'Ваше число 5');
     break;
 case 6:
     alert ( 'Ваше число 6');
     break;
 case 7:
     alert ( 'Ваше число 7');
     break;
 case 8:
     alert ( 'Ваше число 8');
     break;
 case 9:
     alert ( 'Ваше число 9');
     break;
 case 10:
     alert ( 'Ваше число 10');
     break;
 case 11:
     alert ( 'Ваше число 11');
     break;
 case 12:
     alert ( 'Ваше число 12');
     break;
 case 13:
     alert ( 'Ваше число 13');
     break;
 case 14:
     alert ( 'Ваше число 14');
     break;
 case 15:
     alert ( 'Ваше число 15');
     
 };

 var a = 2;
		var b = 3;

		function plus(a, b) {
    		return a + b;
		}

		function minus(a, b) {
    		return a - b;
		}

		function div (a, b) {
    		return a / b;
		}

		function mult (a, b) {
    		return a + b;
		}

        function mathOperation(arg1, arg2, operation){
            switch(operation){
                    case 'сложение':
                        return arg1 + arg2;
                        break;
                    case 'вычитание':
                        return arg1 - arg2;
                     break;
                 case 'деление':
                               return arg1 / arg2;
                     break;
                    case 'умножение':
                        return arg1 * arg2;
                     break;
               }
    }