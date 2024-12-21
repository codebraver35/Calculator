let Display=document.getElementById("Input");
let Result=document.getElementById("Output");

function appendToDisplay(num){
    Display.innerHTML+=num;
}
function ClearDisplay() {
    Display.innerHTML="";
    Output.innerHTML="0";
}
function Calculate() {
    let result=eval(Input.innerHTML)
    Output.innerHTML=result;
}
function Del() {
    Input.innerHTML=Input.innerHTML.substring(0,Input.innerHTML.length-1)
}