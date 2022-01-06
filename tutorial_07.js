let firstcard=getrandomnum()
let secondcard=getrandomnum()
let message=""
let card=[firstcard,secondcard]
let sum=firstcard+secondcard
//let card=secondcard
let messageEL=document.getElementById("message");
let sumel=document.querySelector("#sum")
let cardsnumber=document.getElementById("cards")
let i=0
let isalive=true
let blackjack=false
let player={
	name:"name_player",
	chips:112
}

let playerel=document.getElementById("playerid")
playerel.innerHTML=player.name+": $"+player.chips
function startclicked(){
	cardsnumber.textContent="Cards: "
	rendergame()
	location.reload()
	 //cardsnumber.textContent="Cards: "+firstcard+"||"+card
    sum=0 	 
}
function getrandomnum(){
	let randomnum=Math.floor((Math.random()*13)+1)
   return randomnum
}
function rendergame(){
	if(sum===21)
	{
		message="You've won blackjack";
blackjack=true
	}
	else if(sum<21){
		message="Do you want to draw another card"

	}
	else {
		message="You've lost the game !";
		isalive=false
	}
	messageEL.textContent=message
   //cardsnumber.textContent+="||"+card[i]
   for(i;i<card.length;i++){
   	console.log("hiiii")
   	cardsnumber.textContent+=card[i]+"||"
   }
   sumel.textContent="Sum: "+sum
}


function newcarddemand(){
	//message= "You've demanded new card"
	if(isalive===true &&blackjack===false){
messageEL.textContent=message
 
 card.push(getrandomnum())
sum+=card[card.length-1] 
rendergame()}
}