var a = +prompt("Enter the max value: ")
for(i = 1; i < a; i ++){
    if(i % 2 == 0){
        console.log(i);
    }
}



var sum = 0;
var multiply = 1;
for (var i = 0; i < 5; i++) {
  var a =+prompt("Enter the number") 
  if (a < 0) {
    sum += a;
  } else if (a > 0 && a % 2 == 0) {
    multiply *=a
  } else {
    console.log("duzgun eded daxil et");
  }
}
console.log(sum)
console.log(multiply)



var a = prompt("Enter your name: ")
var n = +prompt("Enter the number: ")
for(i = 0; i < n; i++){
    console.log(a);
}



var a = prompt("Enter your name: ")
 for(i = 0; i < 5; i++){
    console.log(a);
}




var a = "Aynur";
for(var i = 0; i < 5; i++){
    console.log(a);
}

var sum = 0;
var b = +prompt("nece eded olacaq?")
for (i = 0; i < b; i++) {
  var a = +prompt("Balinizi daxil edin");
  sum = sum + a;
  var avg = sum / b
}
if(avg > 90 && avg <= 100){
console.log(`Ortalamaniz ${avg}: A-dır`);
}
else if (avg > 80 && avg <= 90){
console.log(`Ortalamaniz ${avg}: B-dir`);
}
else if(avg > 70 && avg <= 80){
    console.log(`Ortalamaniz ${avg}: C-dir`);
}
else if(avg > 60 && avg <= 70){
    console.log(`Ortalamaniz ${avg}: D-dir`);
}
else if(avg > 50 && avg <= 60){
    console.log(`Ortalamaniz ${avg}: E-dir`);
}
else if(avg > 0 && avg <= 50){
    console.log(`Ortalamaniz ${avg}: Kesilmisiniz`);
}
else{
    console.log("Istifadeci menfi eded daxil ede bilmez");
}


