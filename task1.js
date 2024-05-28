function clickme(){
    var str=document.getElementById("text1").value;
    
    {
        if(str.startsWith("Py")){
            document.getElementById("result").innerHTML= str;
        }
        else{
            document.getElementById("result").innerHTML= "Py" + str;
        }
    }
}