// home Worke 
// function test(a){
//     let cnt=0;
//     for(let i=0;i<a.length;i++){
//         if(a[i]>'0' && a[i]<='9')cnt++;

//     }
//     return cnt=a.length
// }
// console.log(test("1234"));
// task3
// function test(a,b){
//     let ans=' ';
//     for(let i=0;i<b;i++) ans+=a[i]
//     return ans;
// }
// console.log(test("1234",3));

// task4
// function test(a){
//     let ans=' ';
//     for(let i=0;i<a.length;i++){
//         if(a[i].toUpperCase()==a[i])ans+='-'+a[i].toLowerCase();
//         else ans+=a[i]
//     }
//     return ans
// }
// console.log(test("Converttosnakecase"));

// task5
// function test(a){
//     let x=a.split(" "),ans=" ";
//     for(let i=0;i<x.length;i++){
//         let z=x[i][0].toUpperCase();
//     let h=x[i][x[i].length-1].toUpperCase();
//     ans+=z+x[i].slice(1,x[i].length-1)+h=" ";
//     }
//     return ans;
// }
// console.log(test("hello world"));

// task6
// function test(a){
//     let a1=a.replaceAll('https://','');
//     let a2=a1.replaceAll('http://','');
//     let a3=a2.replaceAll('www.','');
//     let a4=a3.replaceAll('sub.','');
//     let a5=a4.replaceAll('/path','');
//     return a5;
// }
// console.log(test("https://domain.com"));

// task7
// function test(a){
//     let ans='';
//     for(let i=0;i<a.length;i++){
//         if((a[i]>='a' && a[i]<='z') || (a[i]>='A' && a[i]<='Z') || (a[i]>='0' && a[i]<='9')) ans+=a[i]
//     }
// return ans
// }
// console.log(test("hello@world!"));

// task8
// function test(a){
//     for(let i=0;i<a.length/2;i++) if(a[i]!=a[a.length-i-1]) return false
//     return true
// }
// console.log("madam");

// task9
// function test(a){
//     return a.split(" ").reverse().join(" ");
// }
// console.log(test("hello world"));

// task10

// function test(a){
//     return a[a.length-1]+a.slice(1,a.length-1)+a[0]
// }
// console.log(test("hello world"));

// home work2
// function test(a){
//     let mn=1e19;
//     for(let i=a;i>0;i=Math.floor(i/10)) mn=Math.floor(mn,i%10);
//     return mn
// }
// console.log(test(123456789));

// // task3
// function test(a,b){
//     let ans=' ';
//     for(let i=a;i<b;i++) ans+=i+",";
//     ans+=b
//     return ans
// }
// console.log(test(3,12));

// task5
// let f=(a,b,c)=>{
//     return (a+b+c)+(a-b-c)+(a*b*c)+(a/b/c)+(a%b%c)

// }

// taask6
// function test(a){
//     let x= a.toString()
//     return x[Math.floor(x.length/2)]
// }
// console.log(test(123));

// task7
// function test () {
//   let cnt=0;
//   let test1=(a,b)=>{
//     cnt++
//     if(cnt%5==0) return a%b;
//     else if(cnt%5==1) return a+b;
//     else if(cnt%5==2) return a-b;
//     else if(cnt%5==3) return a*b;
//     else return a/b
//   }
//   return test1;
// }
// let x=test()
// console.log(x(1,2));

// task9


// class task1 
// function test(a) {
//     let sum = 0;
//     for (let i = 0; i < a.length; i++) {
//         sum += a[i];
//     }
//     return sum;
// }
// console.log(test([2, 4, 6, 8]));
// console.log(test([1, 2, 3, 4, 5])); 
// console.log(test([])); 

// task2
// function maxNum(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(maxNum([3, 8, 1, 6, 2])); 
// console.log(maxNum([1, 2, 5, 7, 9])); 
// console.log(maxNum([1, 2, 3, 4, 5]));

// task3
// function test(a) {
//     let cnt=0;
//     for (let i=0;i<a.length;i++) {
//         if(a[i]%2==0) {
//             cnt++;
//         }
//     }
//     return cnt;
// }
// console.log(test([1, 2, 3, 4, 5, 6]));
// console.log(test([2, 4, 6, 8])); 

// task4
// function test(a,b) {
//     for (let i=0;i<a.length;i++) {
//         if (a[i] == b) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(test([10, 20, 30, 40, 50], 30)); 




