let signup=document.getElementById("signup");

signup.addEventListener("submit",(e)=>{
    e.preventDefault()
    let a=document.getElementById("name").value.trim()
    let b=document.getElementById("email").value.trim()
    let c=document.getElementById("password").value.trim()
    let d=document.getElementById("page").value.trim()
   
    if(a !=="" && b !== "" & c !== ""){
        let userData=JSON.parse (localStorage.getItem("users") ) || []
        userData.push({name:a,email:b,password:c,page:d})
    
        localStorage.setItem("users",JSON.stringify(userData))
        window.location.href="login.html"
    }else{
        window.location.href="signup.html"
        alert("enter all the fields")
    }
})