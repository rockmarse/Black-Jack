// Created Using Easy HTML v1.4.8
// https://play.google.com/store/apps/details?id=ak.andro.easyhtml

let namE =prompt("Hey player ! Enter your good name : ")
let Playerdata={
  name:namE,
  chips:150
  }
let message = ""
let cardarray=[]
let sum  =  0
let newcarD=document.querySelector("newcard-el")
let hasBlack=false
let inGame= false
let wAnt = document.getElementById("want-el")
let cards=document.querySelector("#card-el")
let Sum=document.getElementById("score-el")
let starT = document.getElementById("start-el")
let playerEl=document.getElementById('player-el')
// console.log(starT)
playerEl.textContent=("Hello " + Playerdata.name+ " try ur luck!🤠") 
function start(){
  inGame=true
  let firstCard = getRandomcard()
  let secondCard =  getRandomcard()
  cardarray=[firstCard,secondCard]
  sum = firstCard+secondCard
  renderGame()
}
function getRandomcard(){
  let c = Math.floor(Math.random()*13)+1
  if(c === 1)
    {
      return 11
      }
  else if (c === 12 || c === 13)
    {
      return 10
      }
  else{
  return c
    }
  }
function renderGame(){
  Sum.textContent="Sum :" + sum
  cards.textContent = "Cards: "
  for (let i=0;i<cardarray.length;i++)
  {
    cards.textContent+=(cardarray[i]) +" "
  }
  if(sum<=20){
    message="Do you want to draw another card?"
  }
  else if(sum === 21)
  {
    message="You've got the blackjack!"
    hasBlack=true
  }
  else{
    message="You are out of the game."
    inGame=false
  }
  wAnt.textContent=message
}
function newcard(){
  if( inGame===true && hasBlack===false)
 { let NewCard= getRandomcard()
  sum += NewCard
  cardarray.push(NewCard)
  renderGame()
}}
