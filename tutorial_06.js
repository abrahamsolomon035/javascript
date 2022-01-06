let firstcard,secondcard
firstcard=6;
secondcard=9
let sum=firstcard+secondcard+6;
if(sum<21)
	{console.log("Do you want to draw another card:")//drawing another card

}
else if(sum===21)
{
	console.log("Wohoooo: You've got Blackjack!")//game won
}
else {
	console.log("Oops! : You're out of the game!!")//game lost
}
//for nightclub if age is less than 21 not allowed
let age=21;
if(age<21){
	console.log("You cannot enter the nightclub")
}
else {
	console.log("You can enter the nightclub")
}
//check if the person is eligible to get a bday card from the king (if his/her age is 100)
let oldage=100
if (oldage<100){
	console.log("Not eligible")//less than 100
}
else if(oldage===100){
	console.log("Here is your birthday card from the king")//excatly 100
}
else {
	console.log("Not eligible,you have already gotten one");//over than 100
}