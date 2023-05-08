function solution1(num){
    let result = 0;

    while (num > 0) {
        result = (result * 10) + (num % 10);
        num = Math.floor(num / 10);
      }
      return result;
}

// console.log(solution1(102));

function solution2(str){
    return str === str.split('').reverse().join('');
}

// console.log(solution2('aba'));

function solution3(str) {
    let res = [];
    for(let i=0; i<str.length; i++){
        for(let j=i+1; j<=str.length; j++){
            res.push(str.substring(i,j));
        }
    }
    return res;
}

console.log(solution3('dog'));

function solution4(str){
    return str.split('').sort().join('');
}

// console.log(solution4('pdosla'));


function solution5(str){
  const words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  
  return words.join(' ');
}

// console.log(solution5('the day after lays'));

function solution6(str){
    const words = str.split(' ');
    let longestLen = 0;
    let res = '';
    
    for (let i = 0; i < words.length; i++) {
        const n = words[i].length;
        if (n > longestLen) {
            longestLen = n;
            res = words[i]
        }
    }
    
    return res;
}

// console.log(solution6('the wonderful land'));


function solution7(str){
    let res = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])

    for(let i=0; i<str.length;i++){
        if(vowels.has(str.charAt(i)))
            res += 1;
    }

    return res;
}

// console.log(solution7('sidos'));


function solution8(num){
    if (num < 2) {
        return false;
    }
    
    if (num === 2) {
        return true;
    }
    
    if (num % 2 === 0) {
        return false;
    }
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}

// console.log(solution8(19));


function solution9(value){
    return typeof value;
}

// console.log(solution9(90));


function solution10(n){
    let matrix = [];

    for (var i = 0; i < n; i++) {
        matrix[i]=[];
        for (var j = 0; j < n; j++) {
            matrix[i][j] = 0;
            if(i===j)
                matrix[i][j] = 1;
        }
    }

    return matrix;
}

// console.log(solution10(3));


function solution11(nums){
    let n = nums.length;
    return [nums[1], nums[n-2]];
}

// console.log(solution11([1,2,3,4,5]));


function solution12(num){
    let total = 0;
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        total += i;
      }
    }
    return total === num;
}

function solution13(x){
    let res = 1;
    for(let i=1; i<=x; i++){
        res *= i;
    }
    return res;
}

// console.log(solution13(4));

function solution14(amount, coins) {
    coins.sort((a, b) => b - a);
    var res = []; 
    for (var i = 0; i < coins.length; i++) {
      while (amount >= coins[i]) {
        res.push(coins[i]); 
        amount -= coins[i]; 
      }
    }
    return res;
}

console.log(solution14(46, [25, 10, 5, 2, 1]));

function solution15(n, b){
    let res = 1;
    for(let i = 0; i < n; i++) {
      res *= b;
    }
    return res;
}

console.log(solution15(2,4));

function solution16(str){
    let visited = new Set();
    let res = '';
    for(let i=0; i< str.length; i++){
        if(!visited.has(str.charAt(i))){
            res += str[i];
            visited.add(str.charAt(i));
        }
    }
    return res;
}

// console.log(solution16('aaabccd'));

function solution17(str){
    d = {};

    for(let i=0; i<str.length; i++){
        if(d[str[i]]){
            d[str[i]] += 1;
        }else{
            d[str[i]] = 1;
        }
    }
    return d;
}

// console.log(solution17('aaabccd'));


function solution18(nums, target){
    let left = 0;
    let right = nums.length-1;

    while(left <= right){
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

console.log(solution18([1,2,3,4], 4));


function solution19(nums, x){
    let res = [];

    for(let y of nums){
        if(y > x)
            res.push(y);
    }
    return res;
}

console.log(solution19([1,2,3,4], 2));


function solution20(n){
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let res = '';
  
    for (let i = 0; i < n; i++) {
      res += chars[Math.floor(Math.random() * chars.length)];
    }
    return res;
}


function solution21(array, length) {
    let res = [];
    let subset = [];

    function dfs(start) {
      if (subset.length === length) {
        res.push([...subset]);
        return;
      }
      for (let i = start; i < array.length; i++) {
        subset.push(array[i]);
        dfs(i + 1);
        subset.pop();
      }
    }
    
    dfs(0);
    return res;
}

// console.log(solution21([1,2,3], 2));

function solution22(str, letter) {
    let res = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        res++;
      }
    }
    return res;
}

// console.log(solution22('abcd', 'd'));


function function23(str) {
    let count = {};
    for (let i = 0; i < str.length; i++) {
      if (count[str[i]]) {
        count[str[i]]++;
      } else {
        count[str[i]] = 1;
      }
    }
    for (let i = 0; i < str.length; i++) {
      if (count[str[i]] === 1) {
        return str[i];
      }
    }
    return null;
}

// console.log(function23('bbds'));


function solution24(arr){

    function move(arr, i, j){
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                move(arr, j+1, j);
            }
        }
    }
    return arr;
}

console.log(solution24([3,4,2,1]));


function solution25(arr){
    let longest = 0;
    let res;

    for(let i=0; i<arr.length; i++){
        if(arr[i].length > longest){
            longest = arr[i].length;
            res = arr[i];
        }
    }
    return res;
}

console.log(solution25(["brazil", "china", "united states of america"]));


function solution26(str){
    let visited = new Set();
    let res = '';
    let longest = 0;
    let left = 0;
    let right = 0;

    while(right<str.length){

        if(!visited.has(str[right])){
            visited.add(str[right]);
            if(right-left+1>longest){
                longest = right-left+1;
                res = str.substring(left,right+1);
            }
            right += 1;
        }
        else{
            while(visited.has(str[right])){
                visited.delete(str[left]);
                left += 1;
            }
        }
    }

    return res;
}

// console.log(solution26('abcabcbb'));

function solution27(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
      let left = i;
      let right = i;
      while (left >= 0 && right < str.length && str[left] === str[right]) {
        let palindrome = str.substring(left, right + 1);
        if (palindrome.length > res.length) {
          res = palindrome;
        }
        left--;
        right++;
      }
  
      left = i;
      right = i + 1;
      while (left >= 0 && right < str.length && str[left] === str[right]) {
        let palindrome = str.substring(left, right + 1);
        if (palindrome.length > res.length) {
          res = palindrome;
        }
        left--;
        right++;
      }
    }
    return res;
  }


function solution28(fn) {
    return fn();
}

// solution29(()=>{console.log("hello world")});

function solution29(fn){
    return fn.name;
}

console.log(solution29(function hello(){}));


/**
 * Pick 6 of the following array methods and 
 * implement your own version of them: 
 * reduce, filter, find, concat, push, pop, slice, splice, some, every, reverse.
 */

var arr = [1,2,3];

Array.prototype.myPush = function(x){ 
    const n = this.length;
    this[n] = x;
};

arr.myPush(4)
console.log("after push", arr);

Array.prototype.myPop = function(arr){ 
    if (this.length > 0) {
        const last = this[this.length - 1];
        this.length = this.length - 1;
        return last;
    }
    return undefined;
};

arr.myPop()
console.log("after pop", arr);

Array.prototype.myFind = function(cb){ 
    for(let i=0; i<this.length; i++) {
        if(cb(this[i], i, this)) {
          return this[i];
        }
      }
      return undefined;
};

Array.prototype.myFilter = function(cb){
    let res = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) {
        res.push(this[i]);
      }
    }
    return res;
};

Array.prototype.myConcat = function(arr){ 
    let res = [...this];
    for (let x of arr) {
        res.push(arr);
    }
    return res;
};

Array.prototype.myReverse = function(){ 
    let left = 0;
    let right = this.length - 1;
    while (left < right) {
      let temp = this[left];
      this[left] = this[right];
      this[right] = temp;
      left++;
      right--;
    }
    return this;
};