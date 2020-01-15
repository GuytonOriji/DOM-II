// Your code goes here
 const fbLogo_in_heading = document.querySelector(".logo-heading")
 


 //FUN BUS TEXT IN HEADER
 fbLogo_in_heading.addEventListener("mouseover",fbHover)//1
 fbLogo_in_heading.addEventListener("click",fbClick)//2
 fbLogo_in_heading.addEventListener("mouseleave",fbLeave)//3

 function fbHover(){
        fbLogo_in_heading.style = `
        color:red;
        text-shadow:0 0 5px #000;
        cursor:pointer;
        `
 }
function fbClick(){
    allH2s.forEach(eachH2=>{
        eachH2.style=`
        -webkit-text-fill-color:red;
        color:red;

        `
            })
}


function fbLeave(){
    fbLogo_in_heading.style = `
    color:#000;
    text-shadow:0 0 0px #000;
    
    `
}
 //FUN BUS TEXT IN HEADER

 
//h2's only



const allH2s = document.querySelectorAll("h2")
allH2s.forEach(eachH2=>{
        eachH2.addEventListener('click', changeThisH2)//4
       
})
allH2s.forEach(eachH2=>{
    eachH2.addEventListener('mouseover', h2Hover)//5
})

function changeThisH2(el){

el.target.innerHTML=`${el.target.innerHTML}&#128077;`

let x = [424243,979563,125487,124578,908967,353578,123444,878412,253657,
120934,565656,121212,909090,121666,323200,111999]
let $color = x[Math.floor(Math.random()*x.length)]
setTimeout(()=>{
    el.target.innerHTML =  el.target.innerHTML.slice(0,el.target.innerHTML.indexOf("&")-1)
},2000)



el.target.style=`
color:#${$color};
cursor:pointer;
`
}









function h2Hover(el){
   el.target.style=`
   cursor:pointer;
   -webkit-text-fill-color:#000;
    color:#000;
   `
}


//h2's only

//img change n back if code isnt finessed through
const everyImg = document.querySelectorAll("img")

everyImg.forEach(img=>{
    img.addEventListener("click", clickPhoto)//6
    img.addEventListener("drop", dropPhoto)//7


    
})




function clickPhoto(el){
    
   switch(el.target.getAttribute("src")){
       case "img/fun-bus.jpg":
        el.stopPropagation()
        el.target.src="img/destination.jpg"
        setTimeout(()=>{
            el.target.src="img/fun-bus.jpg"
        
           },5000)
       break;

       case "img/destination.jpg":
        el.stopPropagation()

        el.target.src="img/fun.jpg"
        setTimeout(()=>{
            el.target.src="img/destination.jpg"
        
           },5000)
        break;
        
        case "img/fun.jpg":
        el.target.src="img/adventure.jpg"
        setTimeout(()=>{
            el.target.src="img/fun.jpg"
        
           },5000)
           el.preventDefault()

        break;

        case "img/adventure.jpg":
        el.target.src="img/fun.jpg"

        setTimeout(()=>{
            el.target.src="img/adventure.jpg"
        
           },5000)

           el.preventDefault()
           break;
   }
   
     
    
   
}


function dropPhoto(el){
    
console.log(save)
   
           
}
//img change n back if code isnt finessed through


//paragraph reading help?....
const pars = document.querySelectorAll("p")

pars.forEach(pz=>{
    pz.addEventListener("mouseup" ,shadePars)//8
    pz.addEventListener("mouseout" ,birightPars)//9
})


function shadePars(el){
el.target.style="background-color:rgba(0,0,0,.5);color:#fff;text-shadow:0 0 5px #000;"
}


function birightPars(el){
    el.target.style="background-color:#fff;color:#000;"
    }
    
//paragraph reading help?....

//all btns on the page 
const btnz = document.querySelectorAll(".btn")

btnz.forEach(btn=>{
    btn.addEventListener("click", buttonReality)//10


})


function buttonReality(el){

const ans = prompt("you this isnt real right?....")
if(ans.includes("yes") || ans.includes("ya") || ans.includes("y")
|| ans.includes("yeah") || ans.includes("duh") || ans.includes("ofcourse") 

){
    alert("make the other message show....")
}else if( ans.includes("no") || ans.includes("nah") || ans.includes("nope")
|| ans === "" || ans.includes("uh uh") || ans.includes("n") ){
    alert("truuuueeee..")
}
}
//all btns on the page 


//preventDefaults & 
pars.forEach(pz=>{
    pz.addEventListener("mouseover" ,redBox)//11
    //12
})

function redBox(el){
el.target.style="border:solid red;"
}





pars.forEach(pz=>{
    pz.style.border='solid #000'



    pz.addEventListener("dblclick" ,function (el){
el.stopPropagation()
        let page = document.querySelector("html")
        
        page.style.display='none'
    
            setTimeout(()=>{
                page.style.display='block'
    
            },5000)
    
            
    
    })
})







//a links

const az = document.querySelectorAll('nav a')

az.forEach(a=>{
    a.addEventListener("click", aChill)
})

function aChill(el){
    el.target.addEventListener("click", function(event) {
        event.preventDefault();
});


}

//a links