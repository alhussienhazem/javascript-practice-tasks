// 1. Reverse an array
console.log("1. Reverse an array");
var number = prompt("1. Reverse an array\n\nEnter the number: ");
var reversed = "";
for (var i = number.length - 1; i >= 0; i--) {
    reversed += number[i];
}
console.log("The reversed number is: " + reversed);


// 2. Sum of digits
console.log("2. Sum of digits");
var digits = prompt("2. Sum of digits\n\nEnter the digits: ");
var sum = 0;
for (var i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]);
}
console.log("The sum of the digits is: " + sum);


// 3. Check if a number is even or odd
console.log("3. Check if a number is even or odd");
var num = prompt("3. Check if a number is even or odd\n\nEnter the number: ");
if (num % 2 ==0){
    console.log("The number is even");
}
else{
    console.log("The number is odd");
}


// 4. Find the largest number in an array
console.log("4. Find the largest number in an array");
var largest_number = 0;
var numbers = prompt("4. Find the largest number in an array\n\nEnter the numbers separated by space: ").split(" ");
for (var i = 0; i < numbers.length; i++) {
    if (parseInt(numbers[i]) > largest_number) {
        largest_number = parseInt(numbers[i]);
    }
}
console.log("The largest number is: " + largest_number);



// 5. Reverse a word or a sentance
console.log("5. Reverse a word or a sentence");
var text = prompt("5. Reverse a word or a sentence\n\nEnter a text: ");
var reversedText = "";
for (var i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
}
console.log("The reversed text is: " + reversedText);


// 6. Find the most frequent element in an array
console.log("6. Find the most frequent element in an array");
var arr = prompt("6. Find the most frequent element in an array\n\nEnter elements (like '3 1 3 2 3 1'):").replace(/[\[\]]/g,"").split(/[, ]+/);
var most_frequent = 0;
var most_frequent_element = 0;
for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }
    if (count > most_frequent) {
        most_frequent = count;
        most_frequent_element = arr[i];
    }
}
console.log("The most frequent element is: " + most_frequent_element);


// 7. Remove duplicates from an array
console.log("7. Remove duplicates from an array");

var arr = prompt("7. Remove duplicates from an array\n\nEnter numbers (like '1 2 3' or '[1,2,3]'):").replace(/[\[\]]/g, '').split(/[, ]+/);

var noduplicates = [];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== "" && noduplicates.indexOf(arr[i]) === -1) {
        noduplicates.push(arr[i]);
    }
}
console.log("Array without duplicates: [" + noduplicates.join(", ") + "]");


// 8. Reverse a sentence
console.log("8. Reverse a sentence");
var text = prompt("8. Reverse a sentence\n\nEnter a sentence: ").split(" ");
var reversed = "";
for (var i = text.length - 1; i >= 0; i--) {
    reversed += text[i] + " ";
}
console.log("The reversed sentence is: " + reversed);


// 9. Find the prime numbers in a range
console.log("9. Find the prime numbers in a range");
var number = parseInt(prompt("9. Find the prime numbers in a range\n\nEnter a number: "));
var prime_numbers = "";
for (var i = 2; i <= number; i++) {
    var prime = true;
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        if (prime_numbers === "") {
            prime_numbers += i;
        } else {
            prime_numbers += ", " + i;
        }    
    }
}
console.log("The prime numbers are: " + prime_numbers);


// 10. Sum of array elements
console.log("10. Sum of array elements");
var input = prompt("10. Sum of array elements\n\nEnter an array (example: [1,[2,3],[4,[5]]]):").replace(/\[|\]/g, "").split(",");
var sum = 0;
for (var i = 0; i < input.length; i = i + 1) {
  sum = sum + parseInt(input[i]);
}
// 11. Multiplication table
console.log("11. Multiplication table");
var num = parseInt(prompt("11. Multiplication table\n\nEnter a number: "));
console.log("The multiplication table of " + num + " is: ");
for (var i = 1; i <= 10; i++) {
    console.log(num + " * " + i + " = " + num * i + " \n");
}


// 12. Sort array of objects by age
console.log("12. Sort array of objects by age");
var input = prompt("12. Sort array of objects by age\n\nEnter array of objects:\nExample: [{name:'Ali',age:25},{name:'Sara',age:20}]\n\nYou can use simple format:");
var arr = JSON.parse(input.replace(/(\w+):/g, '"$1":'));

for (var i = 0; i < arr.length-1; i++) {
  for (var j = 0; j < arr.length-1-i; j++) {
    if(arr[j].age > arr[j+1].age) {
      var temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
    }
  }
}
console.log("Sorted array by age:"); //Easier version: console.log(arr); but I don't want to use it because it looks bad
var result = "[\n";
result += "  { name: \"" + arr[0].name + "\", age: " + arr[0].age + " }";
if(arr.length > 1) {
  result += ",\n  { name: \"" + arr[1].name + "\", age: " + arr[1].age + " }";
}
result += "\n]";
console.log(result);


// 13. Calculator
console.log("13. Calculator");
var type = prompt("13. Calculator\n\nEnter the type (add, subtract, multiply)");
var numbers = prompt("13. Calculator\n\nEnter the 2 numbers");
var arr = numbers.split(" ");
var num1 = parseInt(arr[0]);
var num2 = parseInt(arr[1]);

if (type === "add") {
    console.log("The result is: " + (num1 + num2));
} else if (type === "subtract") {
    console.log("The result is: " + (num1 - num2));
} else if (type === "multiply") {
    console.log("The result is: " + (num1 * num2));
}

// 14. Factorial
console.log("14. Factorial");
var num = parseInt(prompt("14. Factorial\n\nEnter a number"));
var factorial = 1;
for(var i = num; i >= 1; i--){
  factorial *= i;
}
console.log("The factorial of " + num + " is " + factorial);


// 15. Number of days between two dates
console.log("15. Number of days between two dates");
var input = prompt("15. Number of days between two dates\n\nEnter two dates (YYYY-MM-DD and YYYY-MM-DD):");
var d1 = new Date(input.split(" and ")[0]);
var d2 = new Date(input.split(" and ")[1]);
var diff = d2 - d1; 
if(diff < 0) {
  diff = -diff;
}
var days = diff / 1000 / 60 / 60 / 24;
console.log("The number of days between the two dates is: " + (days - days % 1) + " days");