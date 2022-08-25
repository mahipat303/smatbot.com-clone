let plan = JSON.parse(localStorage.getItem("plan"))

let email=JSON.parse(localStorage.getItem("email"))
let url=JSON.parse(localStorage.getItem("url"))
let password=JSON.parse(localStorage.getItem("password"))
function displaycontainer(plan){
    if(plan=="freeplan"){
        appendfreeplan()
    }else if(plan=="Starterplan"){
        appendstarterplan()
    }else if(plan=="proplan"){
        appendproplan()
    }else{
        appendenterprise()
    }
}
displaycontainer(plan)


function appendfreeplan(){
    document.querySelector(".plan-content").innerHTML=""
    let div1=document.createElement("div")
    div1.setAttribute("class","plan-content-heading")
    let h1=document.createElement("h1")
    h1.innerText="Free Plan includes"
    div1.append(h1)
    let hr=document.createElement("hr")
    let div2=document.createElement("div")
    div2.setAttribute("id","plan-content-box")
    let div2_1=document.createElement("div")
    div2_1.setAttribute("class","plan-content-data")
    let i1=document.createElement("i")
    i1.setAttribute("class","fa fa-check su-up-tick")
    let h1_1=document.createElement("h1")
    h1_1.setAttribute("class","plan-content-box-heading")
    h1_1.innerText="1 Chatbot"
    div2_1.append(i1,h1_1)

    let div2_2=document.createElement("div")
    div2_2.setAttribute("class","plan-content-data")
    let i2=document.createElement("i")
    i2.setAttribute("class","fa fa-check su-up-tick")
    let h1_2=document.createElement("h1")
    h1_2.setAttribute("class","plan-content-box-heading")
    h1_2.innerText="50 chats per month"
    div2_2.append(i2,h1_2)

    let div2_3=document.createElement("div")
    div2_3.setAttribute("class","plan-content-data")
    let i3=document.createElement("i")
    i3.setAttribute("class","fa fa-check su-up-tick")
    let h1_3=document.createElement("h1")
    h1_3.setAttribute("class","plan-content-box-heading")
    h1_3.innerText="Lead Generation Bot"
    div2_3.append(i3,h1_3)

    let div2_4=document.createElement("div")
    div2_4.setAttribute("class","plan-content-data")
    let i4=document.createElement("i")
    i4.setAttribute("class","fa fa-check su-up-tick")
    let h1_4=document.createElement("h1")
    h1_4.setAttribute("class","plan-content-box-heading")
    h1_4.innerText="Logical Branching"
    div2_4.append(i4,h1_4)


    let div2_5=document.createElement("div")
    div2_5.setAttribute("class","plan-content-data")
    let i5=document.createElement("i")
    i5.setAttribute("class","fa fa-check su-up-tick")
    let h1_5=document.createElement("h1")
    h1_5.setAttribute("class","plan-content-box-heading")
    h1_5.innerText="URL based flow"
    div2_5.append(i5,h1_5)
    
    let div2_6=document.createElement("div")
    div2_6.setAttribute("class","plan-content-data")
    let i6=document.createElement("i")
    i6.setAttribute("class","fa fa-check su-up-tick")
    let h1_6=document.createElement("h1")
    h1_6.setAttribute("class","plan-content-box-heading")
    h1_6.innerText="Text-To-Speech"
    div2_6.append(i6,h1_6)
    
    let div2_7=document.createElement("div")
    div2_7.setAttribute("class","plan-content-data")
    let i7=document.createElement("i")
    i7.setAttribute("class","fa fa-check su-up-tick")
    let h1_7=document.createElement("h1")
    h1_7.setAttribute("class","plan-content-box-heading")
    h1_7.innerText="Access bot through link"
    div2_7.append(i7,h1_7)

    let div2_8=document.createElement("div")
    div2_8.setAttribute("class","plan-content-data")
    let i8=document.createElement("i")
    i8.setAttribute("class","fa fa-check su-up-tick")
    let h1_8=document.createElement("h1")
    h1_8.setAttribute("class","plan-content-box-heading")
    h1_8.innerText="Email Notifications"
    div2_8.append(i8,h1_8)
     
     
    div2.append(div2_1,div2_2,div2_3,div2_4,div2_5,div2_6,div2_7,div2_8)
    document.querySelector(".plan-content").append(div1,hr,div2)

}

function appendstarterplan(){
    document.querySelector(".plan-content").innerHTML=""
    let div1=document.createElement("div")
    div1.setAttribute("class","plan-content-heading")
    let h1=document.createElement("h1")
    h1.innerText="Starter Plan includes"
    div1.append(h1)
    let hr=document.createElement("hr")
    let div2=document.createElement("div")
    div2.setAttribute("id","plan-content-box")
    let div2_1=document.createElement("div")
    div2_1.setAttribute("class","plan-content-data")
    let i1=document.createElement("i")
    i1.setAttribute("class","fa fa-check su-up-tick")
    let h1_1=document.createElement("h1")
    h1_1.setAttribute("class","plan-content-box-heading")
    h1_1.innerText="5 Chatbot"
    div2_1.append(i1,h1_1)

    let div2_2=document.createElement("div")
    div2_2.setAttribute("class","plan-content-data")
    let i2=document.createElement("i")
    i2.setAttribute("class","fa fa-check su-up-tick")
    let h1_2=document.createElement("h1")
    h1_2.setAttribute("class","plan-content-box-heading")
    h1_2.innerText="1000 chats per month"
    div2_2.append(i2,h1_2)

    let div2_3=document.createElement("div")
    div2_3.setAttribute("class","plan-content-data")
    let i3=document.createElement("i")
    i3.setAttribute("class","fa fa-check su-up-tick")
    let h1_3=document.createElement("h1")
    h1_3.setAttribute("class","plan-content-box-heading")
    h1_3.innerText="Lead Generation Bot"
    div2_3.append(i3,h1_3)

    let div2_4=document.createElement("div")
    div2_4.setAttribute("class","plan-content-data")
    let i4=document.createElement("i")
    i4.setAttribute("class","fa fa-check su-up-tick")
    let h1_4=document.createElement("h1")
    h1_4.setAttribute("class","plan-content-box-heading")
    h1_4.innerText="Logical Branching"
    div2_4.append(i4,h1_4)


    let div2_5=document.createElement("div")
    div2_5.setAttribute("class","plan-content-data")
    let i5=document.createElement("i")
    i5.setAttribute("class","fa fa-check su-up-tick")
    let h1_5=document.createElement("h1")
    h1_5.setAttribute("class","plan-content-box-heading")
    h1_5.innerText="URL based flow"
    div2_5.append(i5,h1_5)
    
    let div2_6=document.createElement("div")
    div2_6.setAttribute("class","plan-content-data")
    let i6=document.createElement("i")
    i6.setAttribute("class","fa fa-check su-up-tick")
    let h1_6=document.createElement("h1")
    h1_6.setAttribute("class","plan-content-box-heading")
    h1_6.innerText="Text-To-Speech"
    div2_6.append(i6,h1_6)
    
    let div2_7=document.createElement("div")
    div2_7.setAttribute("class","plan-content-data")
    let i7=document.createElement("i")
    i7.setAttribute("class","fa fa-check su-up-tick")
    let h1_7=document.createElement("h1")
    h1_7.setAttribute("class","plan-content-box-heading")
    h1_7.innerText="Access bot through link"
    div2_7.append(i7,h1_7)

    let div2_8=document.createElement("div")
    div2_8.setAttribute("class","plan-content-data")
    let i8=document.createElement("i")
    i8.setAttribute("class","fa fa-check su-up-tick")
    let h1_8=document.createElement("h1")
    h1_8.setAttribute("class","plan-content-box-heading")
    h1_8.innerText="Email Notifications"
    div2_8.append(i8,h1_8)
     
     
    div2.append(div2_1,div2_2,div2_3,div2_4,div2_5,div2_6,div2_7,div2_8)
    document.querySelector(".plan-content").append(div1,hr,div2)

}

function appendproplan(){
    document.querySelector(".plan-content").innerHTML=""
    let div1=document.createElement("div")
    div1.setAttribute("class","plan-content-heading")
    let h1=document.createElement("h1")
    h1.innerText="Pro Plan includes"
    div1.append(h1)
    let hr=document.createElement("hr")
    let div2=document.createElement("div")
    div2.setAttribute("id","plan-content-box")
    let div2_1=document.createElement("div")
    div2_1.setAttribute("class","plan-content-data")
    let i1=document.createElement("i")
    i1.setAttribute("class","fa fa-check su-up-tick")
    let h1_1=document.createElement("h1")
    h1_1.setAttribute("class","plan-content-box-heading")
    h1_1.innerText="10 Chatbot"
    div2_1.append(i1,h1_1)

    let div2_2=document.createElement("div")
    div2_2.setAttribute("class","plan-content-data")
    let i2=document.createElement("i")
    i2.setAttribute("class","fa fa-check su-up-tick")
    let h1_2=document.createElement("h1")
    h1_2.setAttribute("class","plan-content-box-heading")
    h1_2.innerText="5000 chats per month"
    div2_2.append(i2,h1_2)

    let div2_3=document.createElement("div")
    div2_3.setAttribute("class","plan-content-data")
    let i3=document.createElement("i")
    i3.setAttribute("class","fa fa-check su-up-tick")
    let h1_3=document.createElement("h1")
    h1_3.setAttribute("class","plan-content-box-heading")
    h1_3.innerText="Facebook Messenger"
    div2_3.append(i3,h1_3)

    let div2_4=document.createElement("div")
    div2_4.setAttribute("class","plan-content-data")
    let i4=document.createElement("i")
    i4.setAttribute("class","fa fa-check su-up-tick")
    let h1_4=document.createElement("h1")
    h1_4.setAttribute("class","plan-content-box-heading")
    h1_4.innerText="Live Agent (1 Agent)"
    div2_4.append(i4,h1_4)


    let div2_5=document.createElement("div")
    div2_5.setAttribute("class","plan-content-data")
    let i5=document.createElement("i")
    i5.setAttribute("class","fa fa-check su-up-tick")
    let h1_5=document.createElement("h1")
    h1_5.setAttribute("class","plan-content-box-heading")
    h1_5.innerText="Google Sheets Intergation"
    div2_5.append(i5,h1_5)
    
    let div2_6=document.createElement("div")
    div2_6.setAttribute("class","plan-content-data")
    let i6=document.createElement("i")
    i6.setAttribute("class","fa fa-check su-up-tick")
    let h1_6=document.createElement("h1")
    h1_6.setAttribute("class","plan-content-box-heading")
    h1_6.innerText="Appointment Booking"
    div2_6.append(i6,h1_6)
    
    let div2_7=document.createElement("div")
    div2_7.setAttribute("class","plan-content-data")
    let i7=document.createElement("i")
    i7.setAttribute("class","fa fa-check su-up-tick")
    let h1_7=document.createElement("h1")
    h1_7.setAttribute("class","plan-content-box-heading")
    h1_7.innerText="Multi Language Support"
    div2_7.append(i7,h1_7)

    let div2_8=document.createElement("div")
    div2_8.setAttribute("class","plan-content-data")
    let i8=document.createElement("i")
    i8.setAttribute("class","fa fa-check su-up-tick")
    let h1_8=document.createElement("h1")
    h1_8.setAttribute("class","plan-content-box-heading")
    h1_8.innerText="Dynamic Response"
    div2_8.append(i8,h1_8)
     
     
    div2.append(div2_1,div2_2,div2_3,div2_4,div2_5,div2_6,div2_7,div2_8)
    document.querySelector(".plan-content").append(div1,hr,div2)

}

function appendenterprise(){
    document.querySelector(".plan-content").innerHTML=""
    let div1=document.createElement("div")
    div1.setAttribute("class","plan-content-heading")
    let h1=document.createElement("h1")
    h1.innerText="Enterprise Plan includes"
    div1.append(h1)
    let hr=document.createElement("hr")
    let div2=document.createElement("div")
    div2.setAttribute("id","plan-content-box")
    let div2_1=document.createElement("div")
    div2_1.setAttribute("class","plan-content-data")
    let i1=document.createElement("i")
    i1.setAttribute("class","fa fa-check su-up-tick")
    let h1_1=document.createElement("h1")
    h1_1.setAttribute("class","plan-content-box-heading")
    h1_1.innerText="Unlimited Chatbots *"
    div2_1.append(i1,h1_1)

    let div2_2=document.createElement("div")
    div2_2.setAttribute("class","plan-content-data")
    let i2=document.createElement("i")
    i2.setAttribute("class","fa fa-check su-up-tick")
    let h1_2=document.createElement("h1")
    h1_2.setAttribute("class","plan-content-box-heading")
    h1_2.innerText="Unlimited chats per month *"
    div2_2.append(i2,h1_2)

    let div2_3=document.createElement("div")
    div2_3.setAttribute("class","plan-content-data")
    let i3=document.createElement("i")
    i3.setAttribute("class","fa fa-check su-up-tick")
    let h1_3=document.createElement("h1")
    h1_3.setAttribute("class","plan-content-box-heading")
    h1_3.innerText="Customer Support Bot"
    div2_3.append(i3,h1_3)

    let div2_4=document.createElement("div")
    div2_4.setAttribute("class","plan-content-data")
    let i4=document.createElement("i")
    i4.setAttribute("class","fa fa-check su-up-tick")
    let h1_4=document.createElement("h1")
    h1_4.setAttribute("class","plan-content-box-heading")
    h1_4.innerText="WhatsApp Chatbot"
    div2_4.append(i4,h1_4)


    let div2_5=document.createElement("div")
    div2_5.setAttribute("class","plan-content-data")
    let i5=document.createElement("i")
    i5.setAttribute("class","fa fa-check su-up-tick")
    let h1_5=document.createElement("h1")
    h1_5.setAttribute("class","plan-content-box-heading")
    h1_5.innerText="OTP Validation"
    div2_5.append(i5,h1_5)
    
    let div2_6=document.createElement("div")
    div2_6.setAttribute("class","plan-content-data")
    let i6=document.createElement("i")
    i6.setAttribute("class","fa fa-check su-up-tick")
    let h1_6=document.createElement("h1")
    h1_6.setAttribute("class","plan-content-box-heading")
    h1_6.innerText="CRM Integrations"
    div2_6.append(i6,h1_6)
    
    let div2_7=document.createElement("div")
    div2_7.setAttribute("class","plan-content-data")
    let i7=document.createElement("i")
    i7.setAttribute("class","fa fa-check su-up-tick")
    let h1_7=document.createElement("h1")
    h1_7.setAttribute("class","plan-content-box-heading")
    h1_7.innerText="Create AI chatbots"
    div2_7.append(i7,h1_7)

    let div2_8=document.createElement("div")
    div2_8.setAttribute("class","plan-content-data")
    let i8=document.createElement("i")
    i8.setAttribute("class","fa fa-check su-up-tick")
    let h1_8=document.createElement("h1")
    h1_8.setAttribute("class","plan-content-box-heading")
    h1_8.innerText="Data Masking"
    div2_8.append(i8,h1_8)

    let div2_9=document.createElement("div")
    div2_9.setAttribute("class","plan-content-data")
    let i9=document.createElement("i")
    i9.setAttribute("class","fa fa-check su-up-tick")
    let h1_9=document.createElement("h1")
    h1_9.setAttribute("class","plan-content-box-heading")
    h1_9.innerText="More Live Chat Agents"
    div2_9.append(i9,h1_9)

    let div2_10=document.createElement("div")
    div2_10.setAttribute("class","plan-content-data")
    let i10=document.createElement("i")
    i10.setAttribute("class","fa fa-check su-up-tick")
    let h1_10=document.createElement("h1")
    h1_10.setAttribute("class","plan-content-box-heading")
    h1_10.innerText="Remove Branding"
    div2_10.append(i10,h1_10)
    
    let div2_11=document.createElement("div")
    div2_11.setAttribute("class","plan-content-data")
    let i11=document.createElement("i")
    i11.setAttribute("class","fa fa-check su-up-tick")
    let h1_11=document.createElement("h1")
    h1_11.setAttribute("class","plan-content-box-heading")
    h1_11.innerText="Priority support response"
    div2_11.append(i11,h1_11)
     
     
    div2.append(div2_1,div2_2,div2_3,div2_4,div2_5,div2_6,div2_7,div2_8,div2_9,div2_10,div2_11)
    document.querySelector(".plan-content").append(div1,hr,div2)

}

document.getElementById("back").addEventListener("click",()=>{
    window.location.href="signup.html"
})


let usersdata=JSON.parse(localStorage.getItem("usersdata")) ||  []

let userf2=document.getElementById("user-form2")
userf2.addEventListener("submit",data)

function data(){
    event.preventDefault()
    let name=document.getElementById("user-name").value 
    let phone=document.getElementById("user-number").value
    let refferal=document.getElementById("user-refferal").value
    let know=document.getElementById("user-know").value
    let obj={
        name:name,
        email:email,
        password:password,
        number:phone,
        plan:plan,
        url:url,
        refferal:refferal,
        know:know



    }
    if(name=="" || phone=="" || know==""){
        alert("Please Fill All Details")
    }else{
    usersdata.push(obj)
    localStorage.setItem("usersdata",JSON.stringify(usersdata))
    window.location.href="login.html"
    }
    
    
}

