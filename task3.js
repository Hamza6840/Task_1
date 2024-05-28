function Clickme(){
 let str=document.getElementById("text1").value;
  let first_str=str.charAt(0);
  let last_str= str.charAt(str.length - 1);
  let newStr = last_str + str.slice(1, -1) + first_str;
  document.getElementById("result").textContent= newStr;


}
// function Clickme() {
//     let str = document.getElementById("text1").value;
//     let first_str = str.charAt(0);
//     let last_str = str.charAt(str.length - 1);
//     let newStr = last_str + str.slice(1, -1) + first_str;
//     document.getElementById("result").textContent = newStr;
// }