 //q no:1
 function convert(degree) {
    var x;
    if (degree == "C") {
      x = document.getElementById("c").value * 9 / 5 + 32;
      document.getElementById("f").value = Math.round(x);
    } else {
      x = (document.getElementById("f").value -32) * 5 / 9;
      document.getElementById("c").value = Math.round(x);
    }
  }
  //q no:2
  let number = 7;
  if(number % 2 == 0){
    console.log("number is even")
  }else{
    console.log("number is odd")
  }
  //q no:3
  function sum(a,b){
    return a+b;
  }
  console.log(sum(3,4))
  console.log(sum(10,20))
  //q no:4
 function findSmallestNum(arr){
    let smallest = arr[0];
    for(let i = 1; i<arr.length; i++){
        if(arr[i]<smallest){
            smallest = arr[i]
        }
    }
    return smallest;
  }
  console.log(findSmallestNum([3,5,1,9]))
  console.log(findSmallestNum([-1,-5,0,10]))
  //q no:5
  function countVowels(str){
   const count = str.match(/[aeiouAEIOU]/gi).length;
   return count;
  }
  console.log(countVowels("hellow world"));
  console.log(countVowels("javascript"));
  //q n0:6
  var first = function(array, n) {
    if (array == null)
    return void 0;
    if (n == null)
    return array[0];
    if (n < 0)
    return [];
    return array.slice(0, n);
    };
  console.log(first([1,2,3]))
  console.log( first(["a","b","c"]))
  //q no:7
  function isArrayEmpty(array) {
    return array.length === 0;
}

const emptyArray = [];
const nonEmptyArray = [1, 2, 3];

console.log("Is emptyArray empty?", isArrayEmpty(emptyArray)); 
console.log("Is nonEmptyArray empty?", isArrayEmpty(nonEmptyArray));
//q no:8
function factorial(number) {
    return (number <= 1) ? 1 : factorial(number - 1) * number;
}

console.log(factorial(5));
console.log(factorial(7));
//q no:9
function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  reverseString("hello");
 console.log(reverseString("hello"));
 console.log(reverseString("world"));
 //q n0:10
 
  function toLowerCase(str){
    return str.toLowerCase();
  }
  console.log(toLowerCase("HELLOW WORLD"))
  console.log(toLowerCase("JavaScript"))
  //q no:11
  function stringLength(string) {

    let count = 0;

    for(let char of string) {
        count++;
    }

    return count;
}
  console.log(stringLength("hellow") )
  console.log (stringLength ("world"))
  //q no:12
   function mergeArrays (arr1,arr2)  {
    
    return arr1+arr2;
}
console.log(mergeArrays([1,2,3],[4,5,6]))
console.log(mergeArrays(["a","b","c"],["d","e","f"]))

//q no:13
var last = function(array, n) {
   
    if (array == null) 
      return void 0;
    if (n == null) 
      return array[array.length - 1];
  
    
    return array.slice(Math.max(array.length - n, 0));
  };
  

  console.log(last([1,2,3]));
  console.log(last(["a","b","c"]));
  //q no:14
  function getFirstCharacter(str){
    return str.charAt(0);
   

  }
  console.log(getFirstCharacter("hellow"));
  console.log(getFirstCharacter("world"));
  //q no:15
  function sumArray(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
 
  console.log(sumArray([1,2,3,4]));
  console.log(sumArray([-1,-2,-3,-4]));
  console.log(sumArray([1.5,2.5,3.5]));
  
  

