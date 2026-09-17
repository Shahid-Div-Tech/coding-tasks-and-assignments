
// MODAL CONTROLS


function openModal() {
    document.getElementById("signupModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("signupModal").style.display = "none";
}

function openForgotModal() {
    document.getElementById("forgotModal").style.display = "flex";
}

function closeForgotModal() {
    document.getElementById("forgotModal").style.display = "none";
}

function closeResetModal() {
    document.getElementById("resetModal").style.display = "none";
}




let token = localStorage.getItem("token");

if (token) {
    window.location = "/home page/index.html";
}



// LOGIN


let emailLogin = document.querySelector("#email-login");
let passwordLogin = document.querySelector("#password-login");
let loginButton = document.querySelector("#login-button");

loginButton.addEventListener("click", (e) => {

    e.preventDefault();

    let email = emailLogin.value.trim();
    let password = passwordLogin.value.trim();

    if (!email || !password) {
        alert("Fill all fields");
        return;
    }

   
    let loginData = JSON.parse(localStorage.getItem("signupdata"));

    
    if (!loginData) {
        alert("No account found");
        return;
    }

    if (
        loginData.email === email &&
        loginData.password === password
    ) {

      
        localStorage.setItem("token", "abcd123");

        localStorage.setItem("username", loginData.name);

        alert("Login Successful");

       
        window.location = "/home page/index.html";

    } else {
        alert("Invalid Email or Password");
    }
});



// SIGNUP


let signupBtn = document.querySelector("#signupModal .signup-btn");

signupBtn.addEventListener("click", () => {

    let firstName = document.querySelector("#firstName").value.trim();
    let lastName = document.querySelector("#lastName").value.trim();
    let email = document.querySelector("#signupEmail").value.trim();
    let password = document.querySelector("#signupPassword").value.trim();
    let phone = document.querySelector("#phoneNumber").value.trim();

   
    if (!firstName || !lastName || !email || !password || !phone) {
        alert("Fill all fields");
        return;
    }


    let signup = {
        name: firstName + " " + lastName,
        email: email,
        password: password,
        phone: phone
    };

  
    localStorage.setItem("signupdata", JSON.stringify(signup));

    alert("Signup Successful");

    closeModal();

    
  
    
});


// FORGOT PASSWORD


let forgotSubmit = document.querySelector("#forgot-password-submit");

forgotSubmit.addEventListener("click", () => {

    let email = document.querySelector("#forgot-email-input").value.trim();

    if (!email) {
        alert("Email is required");
        return;
    }

  
    let userData = JSON.parse(localStorage.getItem("signupdata"));

   
    if (!userData) {
        alert("No account found");
        return;
    }

    
    if (userData.email === email) {

        
        let otp = Math.floor(1000 + Math.random() * 9000);

       
        localStorage.setItem("resetOtp", otp);

        alert("Your OTP is: " + otp);

        closeForgotModal();

        
        document.getElementById("resetModal").style.display = "flex";

    } else {
        alert("Email not found");
    }
});



// RESET PASSWORD


let resetSubmit = document.querySelector("#reset-password-submit");

resetSubmit.addEventListener("click", () => {

    let email = document.querySelector("#forgot-email-input").value.trim();

    let otp = document.querySelector("#reset-otp-input").value.trim();

    let newPassword = document.querySelector("#new-password-input").value.trim();

    if (!otp || !newPassword) {
        alert("Fill all fields");
        return;
    }

    
    let savedOtp = localStorage.getItem("resetOtp");

 
    if (otp != savedOtp) {
        alert("Invalid OTP");
        return;
    }

    
    let userData = JSON.parse(localStorage.getItem("signupdata"));

   
    userData.password = newPassword;

    
    localStorage.setItem("signupdata", JSON.stringify(userData));

    localStorage.removeItem("resetOtp");

    alert("Password Reset Successful");

    closeResetModal();
});




function logout() {

    localStorage.removeItem("token");

    window.location = "/index.html";
}