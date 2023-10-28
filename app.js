//EXERCISE 3.1//
shoppinglist=["milk","bread","apples"];
console.log(shoppinglist.length);
shoppinglist[1]="banana"
console.log(shoppinglist);

//EXECISE 3.2//

shoppinglist1=["milk","bread","apples"];
shoppinglist1.push("bananas","eggs");
console.log(shoppinglist1);
shoppinglist1.pop();
console.log(shoppinglist1);
console.log(shoppinglist1.sort());
let index1=shoppinglist1.indexOf("milk");
console.log(index1);
shoppinglist1.push("carrot","lecttuce");
newlist=["juie","pop"];
console.log(shoppinglist1.concat(newlist,newlist));
console.log(shoppinglist1.lastIndexOf("pop"));

//EXERCISE 3.3//
numbers=[1,2,3];
newarray=[numbers,numbers,numbers];
console.log(newarray);
console.log(newarray[1][1]);


//exercise 3.4//
let mycar={
    model:2023,
    color:"blue",
    make:"honda civic",
    forsale:true,

}
console.log(mycar);
mycar["color"]="black";
let sale="forsale";
mycar[sale]=false;
console.log(mycar.make);
console.log(mycar.model);
console.log(mycar.forsale);


//EXERCISE 3.5//
let people={
    friends:[]
};
let friend={
    names:"areeba",
    fathername:"javed",
    idcard:1234

};
let friend1={
    names:"Rania",
    fathername:"Zafar",
    idcard:1234

};
let friend2={
    names:"Emaan",
    fathername:"Yasir",
    idcard:1234

};
console.log(people.friends.push(friend));
console.log(people.friends.push(friend1));
console.log(people.friends.push(friend2));
console.log(people);


//Chapter project//
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
theList.shift();
theList.pop();
theList.unshift('FIRST');
theList[2] = 'MIDDLE';
theList[3] = 'hello World';
theList.push('LAST');
console.log(theList);

// 1. Create an array to hold an inventory of store items.
const inventory = [];


const item1 = {
  name: "Smartphone",
  model: "iPhone X",
  cost: 799.99,
  quantity: 10,
};

const item2 = {
  name: "Laptop",
  model: "Dell Inspiron",
  cost: 999.99,
  quantity: 5,
};

const item3 = {
  name: "Headphones",
  model: "Bose QuietComfort 35",
  cost: 349.99,
  quantity: 15,
};


inventory.push(item1, item2, item3);

console.log("Inventory:");
console.log(inventory);
console.log("Quantity of the third item:", inventory[2].quantity);

const myArr2 = [];
myArr2[10] = 'test'
console.log(myArr2);
console.log(myArr2[2]);


//CHAPTER 4//
//EXERCISE 4.1//
let booleans=true;
console.log(booleans)
var myVariable = true;
console.log("The value of myVariable is: " + myVariable);
if (myVariable) {
  console.log("myVariable is true!");
}
if (!myVariable) {
  console.log("myVariable is not true!");
} else {
  console.log("myVariable is true (using else)!");
}

myVariable = false;

console.log("The value of myVariable is now: " + myVariable);

if (myVariable) {
  console.log("myVariable is true!");
}

if (!myVariable) {
  console.log("myVariable is not true!");
} else {
  console.log("myVariable is true (using else)!");
}

//EXERCISE 4.2//
let userage=prompt("what's your age?");
let changepromptno=parseInt(userage);
let message;
if(changepromptno>=21){
  message="entry to a venue and the ability to purchase alcohol";
}
else if(changepromptno>=19){
  message="entry to the venue but deny the purchase of alcohol";
}
else{
  message="You are denied entry to the venue."
}
console.log(message);


//EXERCISE 4.3//
let idvariable=true;
let messageid=idvariable ? "you are allowed ": "you are not allowed";
console.log(messageid);
let no=-6;
let num1=(no>0) ? "positive": "negative";
console.log(num1);


//EXERRCISE 4.4//

const randomValue = Math.floor(Math.random() * 6);
const userQuestion = prompt("Ask me a question:");
let response;
switch (randomValue) {
  case 0:
    response = "I'm not sure, can you ask again later?";
    break;
  case 1:
    response = "It's possible, but I can't say for certain.";
    break;
  case 2:
    response = "Yes, definitely!";
    break;
  case 3:
    response = "No, I don't think so.";
    break;
  case 4:
    response = "I'm leaning towards yes.";
    break;
  case 5:
    response = "I'm leaning towards no.";
    break;
  default:
    response = "I'm not sure, can you ask again later?";
}

const finalResponse = `You asked: ${userQuestion}\nMy response: ${response}`;

console.log(finalResponse);


//EXERCISE 4.5//
let prize = prompt("Select a number between 0 and 10 to reveal your prize:");

prize = parseInt(prize);
const outputMessage = "My Selection: ";
let prizeMessage;
switch (prize) {
  case 0:
    prizeMessage = "Congratulations! You've won a vacation for two!";
    break;
  case 1:
    prizeMessage = "You've won a brand new car!";
    break;
  case 2:
    prizeMessage = "Great news! You've won a $500 shopping spree!";
    break;
  case 3:
    prizeMessage = "You've won a weekend getaway at a luxury resort!";
    break;
  case 4:
    prizeMessage = "Awesome! You've won a year's supply of your favorite snacks!";
    break;
  case 5:
    prizeMessage = "You've won a tech gadget of your choice!";
    break;
  case 6:
  case 7:
  case 8:
    prizeMessage = "You've won a $100 gift card!";
    break;
  case 9:
  case 10:
    prizeMessage = "Unfortunately, you didn't win a prize this time. Better luck next time!";
    break;
  default:
    prizeMessage = "Please select a number between 0 and 10.";
}
const finalMessage = outputMessage + prizeMessage;
alert(finalMessage);


//CHAPTER PROJECT//

let dynamicvalue=66;
let userinput=prompt("enter a no");
let changeinput=parseFloat(userinput);
let resultmsg;
if (changeinput>dynamicvalue){
  resultmsg="changeinput is greater than the dynamic value"

}
else if (changeinput<dynamicvalue){
  resultmsg="changeinput is less than the dynamic value"
}
else if (changeinput===dynamicvalue){
  resultmsg="changeinput is equal to the dynamic value"
}
else{
  resultmsg="please enter a valid no"
}
alert(resultmsg);

//FRIEND CHECKER GAME://

let input=prompt("enter your friend name");
let msg;
switch(input){
  case "Rania":
  case "Emaan":
  case "Afifa":
  case "Muniba":
  msg="yes this is your  friend";
  break;
  default :
  msg="i don't know you! who are u?";

}
console.log(msg);

//Rock Paper Scissors Game//

let options=["rock","paper","scissors"];

let randomnumuser=Math.floor(Math.random()*3);
let randomnocomp=Math.floor(Math.random()*3);
let responsemsg;
if(randomnumuser===randomnocomp){
  responsemsg=" It's tie awww";
}
 else if ((randomnumuser===0 && randomnocomp===2) || randomnumuser>randomnocomp && !(randomnumuser===2&& randomnocomp===0)){
  responsemsg="user win's";
} 
else{
responsemsg="computer win's";
}
console.log(responsemsg);
