let form = document.getElementById("form");
form.addEventListener("submit",function(){
    event.preventDefault()
    let email = form.email.value;
    let password = form.password.value;

    let userObj = { email, password};

    localStorage.setItem("loginData", JSON.stringify(userObj));

    let loginData = JSON.parse(localStorage.getItem("loginData"))
console.log(loginData)
// let user =loginData.filter((el,i)=>el.email==email);

// if(user.length!==0){
    if(loginData.email == "empher@gmail.com" && loginData.password =="empher@123"){
        alert("Login Success, you are redirecting to quiz page")
        window.location.href ="quiz.html"
    }
    else{
        alert("your are not allowed to login")
    }

// }

})




// console.log(user)

