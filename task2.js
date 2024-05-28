function Cliclme(){
    let str=document.getElementById("text1").value;
    let index1 = document.getElementById("num1").value;
    let newStr = str.slice(0, index1) + str.slice (parseInt (index1) + 1);
    document.getElementById("result").innerHTML= newStr;
}