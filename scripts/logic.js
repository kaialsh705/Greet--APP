window.addEventListener('load',bindEvents)
function bindEvents(){
    var greetButton =document.getElementById("bt");
    greetButton.addEventListener('click',sayWelcome);
    document.getElementById("clearAll").addEventListener('click',clearAll)
    
}
function sayWelcome(){
    console.log("I am in say Welcome");
    var fisrtName=document.getElementById("first").value;
    // fisrtName=init(fisrtName);
    var lastName=document.getElementById("last").value;
    var result=`Welcome ${init(fisrtName )} ${init(lastName)}`;
    var pTag=document.getElementById('outPut');
    pTag.innerText=result;
}
function init(str){
    return str.charAt(0).toUpperCase()+str.substring(1).toLowerCase();
}
function clearAll(){
    document.getElementById("first").value='';
    document.getElementById("last").value='';
    document.getElementById("outPut").innerText='';
    document.getElementById("first").focus();
}