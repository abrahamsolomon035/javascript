//javascript for tutorial_03


 let count=0
function increment() {

 	count+=1
 	document.getElementById("counter").innerText=count
 	
 }
 	
 	

let saveel=document.getElementById("save-el");
function save(){
    let savecount;
    savecount=count+" - ";
    saveel.innerHTML+=savecount;
    count=0;
    document.getElementById("counter").innerText=count;
}