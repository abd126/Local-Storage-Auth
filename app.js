const userName = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const tel = document.getElementById("tel")
const address = document.getElementById("address")



//<------------Registration Form --------------->
SignUp = () => {

    const userObj = {
        names: userName.value,
        email: email.value,
        password: password.value,
        tel:tel.value,
        address:address.value
    }
    const user = JSON.parse(localStorage.getItem("users")) || []
    console.log(user)

    const userIndex = user.findIndex((value, ind) => {
        return value.email === userObj.email
    })
    console.log(userIndex);
    const account = document.getElementById("account")
    console.log(account)
    if (userIndex === -1) {
        user.push(userObj)
        localStorage.setItem("users", JSON.stringify(user))
        alert("SignUp Succesfully")
        account.setAttribute("checked", true)
    }
    else {
        alert("Email Alredy Existes")
        account.setAttribute("checked", true)
    }

}

//<------------Login Form --------------->

const login = () => {
    const loginemail = document.getElementById("login-email")
    const loginpassword = document.getElementById("login-password")
    const userData = JSON.parse(localStorage.getItem("users"))
    console.log(userData)
    const checkUser = userData.find((value) => {
        return value.email === loginemail.value && value.password === loginpassword.value

    })
    if (checkUser) {
        localStorage.setItem("currentUser", JSON.stringify(checkUser))
        alert("Login")
        window.location.assign("./dashboard.html")
        // showProfile()

    }
    else {
        alert("incorrect Email Or Password")
    }
}


const showPassword = (e) => {
    const password = document.getElementById("password")
    const loginPassword = document.getElementById("login-password")

    if (e.className == "far fa-eye") {
        e.className = "far fa-eye-slash";
        password.type = "text";
        loginPassword.type = "text"
    }
    else {
        e.className = "far fa-eye";
        password.type = "password";
        loginPassword.type = "password";
    }
}


//<---------------Show User Profile ---------------->
const data = document.getElementById("data")
const showProfile = () =>{
   const userData =  JSON.parse(localStorage.getItem("users"))

    
    userData.map((e)=>{
        console.log(e)
        return data.innerHTML = `
        <h1 class="heading">Profile</h1>
    <div class="user-detail">
        <h3>
            User Name :
            <span id="profile-name">${e.names}</span>
        </h3>
        <h3>
            Email : <span class="profile-email">${e.email}</span>
        </h3>
        <h3>
            Cell # <span id="profile-cell">${e.tel}</span>
        </h3>
        <h3>
            Address : <span id="profile-address">${e.address}</span>
        </h3>
    </div>
    
    <div class="signout">
        <button onclick="Logout()">
            Logout
        </button>
    </div>

        
        `
    })
}


//<---------Logout -------->

const Logout = () =>{
    document.getElementById("profile-name").innerHTML="";
    localStorage.removeItem("currentUser")
    window.location.assign("./index.html")
    
}