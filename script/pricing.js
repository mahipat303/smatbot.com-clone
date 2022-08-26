document.getElementById("whatsapp").addEventListener("click",()=>{
    let a = document.getElementById("whatsapp")
    a.style.backgroundColor="#465def"
    a.style.color="white"
    a.style.fontWeight="600"
    a.style.borderRadius="20px"
    let b=document.getElementById("website")
    b.style.backgroundColor="white"
    b.style.color="#2f3538"
    b.style.fontWeight="500"
})


document.getElementById("website").addEventListener("click",()=>{
    let a = document.getElementById("website")
    a.style.backgroundColor="#465def"
    a.style.color="white"
    a.style.fontWeight="600"
    a.style.borderRadius="20px"
    let b=document.getElementById("whatsapp")
    b.style.backgroundColor="white"
    b.style.color="#2f3538"
    b.style.fontWeight="500"
})

document.getElementById("box2").style.display="none"
function web(){
    document.getElementById("box").style.display="flex"
    document.getElementById("box2").style.display="none"
}
function whatsapp(){
    document.getElementById("box").style.display="none"
    document.getElementById("box2").style.display="initial"
    
    
}
let check=document.getElementById("price")
function hey(){
    let pro=document.getElementById("proprice-plan")
    if(price.checked==true){
        
        
        document.getElementById("proprice-plan").innerText="4700"
        document.getElementById("starterprice-plan").innerText="1400"
        document.getElementById("anually1").innerText="/month billed anually"
        document.getElementById("anually2").innerText="/month billed anually"
        document.getElementById("anually3").innerText="/month billed anually"
        
    }else{
        document.getElementById("proprice-plan").innerText="5500"
        document.getElementById("starterprice-plan").innerText="1800"
        document.getElementById("anually1").innerText="/month billed monthly"
        document.getElementById("anually2").innerText="/month billed monthly"
        document.getElementById("anually3").innerText="/month billed monthly"
       
        
    }
}


function compare(){
    let b= document.getElementById("show")
    let img = document.getElementById("compareimg")
   if(b.innerHTML=="Compare Plan"){
    b.innerText="Hide Compare Plan"
    img.src="./image/xyz.jpg"
   }else{
    b.innerText="Compare Plan"
    img.src=""
   }

}

function hey2(){
    let select = document.getElementById("currency").value
    if(select=='dollar'){
        document.getElementById("freeplan-rupee").innerText="$"
        document.getElementById("starterplan-rupee").innerText="$"
        document.getElementById("proplan-rupee").innerText="$"
    }else{
        document.getElementById("freeplan-rupee").innerText="₹"
        document.getElementById("starterplan-rupee").innerText="₹"
        document.getElementById("proplan-rupee").innerText="₹"
    }
}
