//tutorial_05 javascript file
let num1=8
let num2=2
document.getElementById("num1").textContent=num1
document.getElementById("num2").innerText=num2
function add(){
	document.getElementById("equalsto").innerText="Equals to:"
document.getElementById("equalsto").innerText+=num1+num2;	

}
function substract(){
	document.getElementById("equalsto").innerText="Equals to:"
document.getElementById("equalsto").innerText+=num1-num2;	

}
function multiply(){
	document.getElementById("equalsto").innerText="Equals to:"
document.getElementById("equalsto").innerText+=num1*num2;
	
}
function divide(){
	document.getElementById("equalsto").innerText="Equals to:"
	
document.getElementById("equalsto").innerText+=num1/num2;	
}