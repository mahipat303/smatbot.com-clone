let togglePassword = document.querySelector('#togglePassword');
let password = document.querySelector('#user-password');
let state=false;
  togglePassword.addEventListener('click', function (e) {
    if(state){
        password.setAttribute('type', "password");
        togglePassword.setAttribute("class","far fa-eye-slash")
        state=false
    }else{
        password.setAttribute('type',"type");
        togglePassword.setAttribute("class","far fa-eye")
        
        state=true;
    }
    
});

let form=document.getElementById("loginform")
form.addEventListener("submit",logindata)
let usersdata=JSON.parse(localStorage.getItem("usersdata")) || []
function logindata(event){
    let userdetail=[]
    event.preventDefault()
    let useremail=document.getElementById("user-email").value
    let userpassword=document.getElementById("user-password").value
    let flag=false
    usersdata.forEach((ele)=>{
       if(useremail==ele.email && userpassword==ele.password){
         flag=true
         userdetail.push(ele)
       }
    })
    if(flag==true){
        alert("login Succesfull")
        
        localStorage.setItem("userdetail",JSON.stringify(userdetail))
        window.location.href="loading.html"
        
    }else{
        alert("Enter Correct Details")
    }

}
document.getElementById("home_button").addEventListener("click",()=>{
    window.location.href="index.html"
    console.log("heu")
})