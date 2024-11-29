let login=document.getElementById('login');

login.addEventListener("submit",(e)=>{
    e.preventDefault();

    let a=document.getElementById("email").value.trim()
    let b=document.getElementById("password").value.trim()

    let users=JSON.parse(localStorage.getItem("users")) || []
    let user=users.find(x=>x.email === a && x.password == b)
   
    if(user){
        localStorage.setItem("isLoggedIn",JSON.stringify(user.name))
          window.location.href=user.page

    }else{
        alert("no user credentials with database")
    }
})