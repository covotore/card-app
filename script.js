const tarot=[

{name:"愚者",file:"fool.png",up:"新しい始まり",rev:"無計画"},
{name:"魔術師",file:"magician.png",up:"創造力",rev:"空回り"},
{name:"女教皇",file:"priestess.png",up:"直感",rev:"秘密"},
{name:"女帝",file:"empress.png",up:"豊かさ",rev:"依存"},
{name:"皇帝",file:"emperor.png",up:"支配",rev:"頑固"},
{name:"教皇",file:"hierophant.png",up:"導き",rev:"形式主義"},
{name:"恋人",file:"lovers.png",up:"愛",rev:"迷い"},
{name:"戦車",file:"chariot.png",up:"勝利",rev:"暴走"},
{name:"力",file:"strength.png",up:"忍耐",rev:"自信喪失"},
{name:"隠者",file:"hermit.png",up:"探求",rev:"孤独"},
{name:"運命の輪",file:"wheel.png",up:"転機",rev:"停滞"},
{name:"正義",file:"justice.png",up:"公平",rev:"不正"},
{name:"吊るされた男",file:"hangedman.png",up:"試練",rev:"犠牲"},
{name:"死神",file:"death.png",up:"再生",rev:"変化拒否"},
{name:"節制",file:"temperance.png",up:"調和",rev:"不安定"},
{name:"悪魔",file:"devil.png",up:"欲望",rev:"解放"},
{name:"塔",file:"tower.png",up:"崩壊",rev:"警告"},
{name:"星",file:"star.png",up:"希望",rev:"失望"},
{name:"月",file:"moon.png",up:"幻想",rev:"真実"},
{name:"太陽",file:"sun.png",up:"成功",rev:"停滞"},
{name:"審判",file:"judgement.png",up:"覚醒",rev:"後悔"},
{name:"世界",file:"world.png",up:"完成",rev:"未完成"}

]

function todayKey(){

return new Date().toDateString()

}

function drawCard(){

let saved=localStorage.getItem("tarot")

let key=todayKey()

let result

if(saved){

let obj=JSON.parse(saved)

if(obj.date===key){

result=obj

}else{

result=randomCard()

localStorage.setItem("tarot",JSON.stringify(result))

}

}else{

result=randomCard()

localStorage.setItem("tarot",JSON.stringify(result))

}

showCard(result)

}

function randomCard(){

let i=Math.floor(Math.random()*tarot.length)

let reverse=Math.random()<0.5

return{

date:todayKey(),

index:i,

reverse:reverse

}

}

function showCard(result){

let data=tarot[result.index]

let img=document.getElementById("cardFront")

img.src="images/"+data.file

img.style.transform=result.reverse?"rotate(180deg)":"rotate(0deg)"

let pos=result.reverse?"逆位置":"正位置"

document.getElementById("title").innerText=data.name+"（"+pos+"）"

document.getElementById("meaning").innerHTML=

"正位置："+data.up+"<br>逆位置："+data.rev

let card=document.getElementById("card")

card.classList.remove("flip")

setTimeout(()=>{

card.classList.add("flip")

},100)

}

drawCard()