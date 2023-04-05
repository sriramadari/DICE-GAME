var n=Math.floor(Math.random()*6)+1;
var riname="dice"+n+".png";
var rsname="images/"+riname;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",rsname);

var n1=Math.floor(Math.random()*6)+1;
var rsname1="images/dice"+n1+".png";
document.querySelectorAll("img")[1].setAttribute("src",rsname1);
if(n>n1){
    document.querySelector("h1").innerHTML="🚩player 1 wins";
}
else if(n<n1)
{
    document.querySelector("h1").innerHTML="player 2 wins🚩";
}
else
{
    document.querySelector("h1").innerHTML="Draw!!";
}