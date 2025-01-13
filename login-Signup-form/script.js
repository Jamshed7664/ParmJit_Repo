// Gloabal Variables
let signup = true;
let isSubmit = false;
let userData = [];
// For dynamic modal , fire on events 
const alertModal = new bootstrap.Modal(document.getElementById('alertModal'));


function onOnLoadFormPage() {
    document.getElementById('signup_form_view').style.display = 'none'
    document.getElementById('login_form_view').style.display = 'flex'

    document.getElementById('alert_msg_warning').style.display = 'none';
    document.getElementById('alert_msg_success').style.display = 'none';

    document.getElementById('eye_view_password').classList.add('fa-eye');
    document.getElementById('eye_view_confirm_password').classList.add('fa-eye');
}

document.getElementById('spinner').style.display = 'none';

function isSignIn() {
    if (signup) {
        document.getElementById('signup_form_view').style.display = 'none';
        document.getElementById('login_form_view').style.display = 'flex';
        signup = false;
    } else {
        document.getElementById('signup_form_view').style.display = 'flex'
        document.getElementById('login_form_view').style.display = 'none';
        signup = true;
    }
}

function onInputFirstName() {
    let firstName = document.getElementById("fname").value;
    if (!firstName) {
        document.getElementById('firstName_error_message').innerHTML = 'First name required';
    } else {
        document.getElementById('firstName_error_message').innerHTML = '';
    }
}

function onInputLastName() {
    let lastName = document.getElementById("lname").value;
    if (!lastName) {
        document.getElementById('lastName_error_message').innerHTML = 'Last name required';
    } else {
        document.getElementById('lastName_error_message').innerHTML = '';
    }
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
}

function onInputEmail() {
    let email = document.getElementById("email").value;

    if (!email) {
        document.getElementById('email_error_message').innerHTML = 'Email required';
    } else if (!validateEmail(email)) {
        document.getElementById('email_error_message').innerHTML = 'Please enter a valid email';
    } else {
        document.getElementById('email_error_message').innerHTML = '';
    }
}

function onInputPassword() {
    let password = document.getElementById("password").value;
    if (!password) {
        document.getElementById('password_error_message').innerHTML = 'Password required';
    } else if (!validatePassword(password)) {
        console.log(validatePassword(password))
        document.getElementById('password_error_message').innerHTML = 'Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.';
    } else {
        document.getElementById('password_error_message').innerHTML = '';
    }
}

function onInputConfirmPassword() {
    let cnfrmPassword = document.getElementById("confirmPassword").value;
    if (!cnfrmPassword) {
        document.getElementById('confirm_password_error_message').innerHTML = 'Confirm password required';
    } else if (!validatePassword(cnfrmPassword)) {
        document.getElementById('confirm_password_error_message').innerHTML = 'Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.';
    } else {
        document.getElementById('confirm_password_error_message').innerHTML = '';
    }
}

function onInputPrivacyPolicy() {
    let policy = document.getElementById("policy");
    if (!policy.checked) {
        document.getElementById('policy_error_message').innerHTML = 'Please check terms and Policy';
    } else {
        document.getElementById('policy_error_message').innerHTML = '';
    }
}

function showAlert(headerMsg, bodyMessage) {
    alertModal.show();
    let headerTitle = document.getElementById('header_Title');
    let bodyText = document.getElementById('body_Text');
    headerTitle.innerText = headerMsg;
    bodyText.innerText = bodyMessage;

    if (headerMsg == 'Successfull' || headerMsg == 'Error') {
        setTimeout(() => {
            hideAlert();
        }, 2000);
    }
}

function hideAlert() {
    alertModal.hide();
}

function viewPassword(msg) {
    if (msg == 'view_password') {
        let eyeIcons = document.getElementById('eye_view_password');
        let passwordInput = document.getElementById('password');
        if (eyeIcons.classList.contains('fa-eye')) {
            eyeIcons.classList.remove('fa-eye');
            eyeIcons.classList.add('fa-eye-slash');
            passwordInput.setAttribute('type', 'text')
        } else {
            eyeIcons.classList.remove('fa-eye-slash');
            eyeIcons.classList.add('fa-eye');
            passwordInput.setAttribute('type', 'password')
        }
    } else {
        let eyeIcons = document.getElementById('eye_view_confirm_password');
        let confirmPasswordInput = document.getElementById('confirmPassword');
        if (eyeIcons.classList.contains('fa-eye')) {
            eyeIcons.classList.remove('fa-eye');
            eyeIcons.classList.add('fa-eye-slash');
            confirmPasswordInput.setAttribute('type', 'text')
        } else {
            eyeIcons.classList.remove('fa-eye-slash')
            eyeIcons.classList.add('fa-eye')
            confirmPasswordInput.setAttribute('type', 'password')
        }
    }
}


document.getElementById('registration_Form').addEventListener('submit', function (event) {
    event.preventDefault(); // for do not reload page
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let privacyPolicy = document.getElementById('policy');
    
    if (!fname) {
        document.getElementById('firstName_error_message').innerHTML = 'First name required';
    }
    if (!lname) {
        document.getElementById('lastName_error_message').innerHTML = 'Last name required';
    }
    if (!email) {
        document.getElementById('email_error_message').innerHTML = 'Email required';
    }
    if (!password) {
        document.getElementById('password_error_message').innerHTML = 'Password required';
    }
    if (!confirmPassword) {
        document.getElementById('confirm_password_error_message').innerHTML = 'Confirm password required';
    }
    if (!privacyPolicy.checked) {
        document.getElementById('policy_error_message').innerHTML = 'Please check terms and Policy';
    }
    if (password !== confirmPassword) {
        document.getElementById('confirm_password_error_message').innerHTML = 'Confirm password does not match.';
    }

    if (fname && lname && email && password && confirmPassword && privacyPolicy.checked) {
        document.getElementById('alert_msg_warning').style.display = 'none'
        document.getElementById('alert_msg_success').style.display = 'block';
        document.getElementById('spinner').style.display = 'inline-block';
        setTimeout(() => {
            document.getElementById('alert_msg_success').style.display = 'none';
            document.getElementById('spinner').style.display = 'none';
        }, 1000);

        let payload = {
            fname,
            lname,
            email,
            password,
            confirmPassword: confirmPassword,
            policy: privacyPolicy.checked
        }

        let storageData = JSON.parse(window.localStorage.getItem('userData'));
        let isExistData;
        if (storageData !== null) {
            isExistData = storageData.find((e) => e.email == email)
        }
        if (isExistData) {
            showAlert('Error', "User alreday exist")
            return;
        }
        userData.push(payload);
        window.localStorage.setItem('userData', JSON.stringify(userData));
        showAlert('Successfull', "User data submitted successfully");

    } else {
        document.getElementById('alert_msg_success').style.display = 'none';
        document.getElementById('alert_msg_warning').style.display = 'block'
    }
})


function viewPrivacy() {
    let privacyText = `
   I am committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [Insert Website Name and URL] or use our services. Please read this policy carefully to understand our views and practices regarding your personal data.
    `
    showAlert('Privacy Policy', privacyText)
}

// login form code


function OnInputUserName() {
    // username = email
    let userNameValue = document.getElementById('username').value;
    if (!userNameValue) {
        document.getElementById('username_error_message').innerText = "User name required.";
    } else if (!validateEmail(userNameValue)) {
        document.getElementById('username_error_message').innerText = "Email should be valid";
    }
    else {
        document.getElementById('username_error_message').innerText = ""
    }
}

function OnInputLoginPassword() {
    let loginPasswordValue = document.getElementById('login_password').value;
    console.log(loginPasswordValue)
    if (!loginPasswordValue) {
        document.getElementById('login_password_error_message').innerText = "Password required.";
    }else {
        document.getElementById('login_password_error_message').innerText = "";
    }
}


document.getElementById('login_form').addEventListener('submit', function (event) {
    event.preventDefault();
    let userNameValue = document.getElementById('username').value;
    let loginPasswordValue = document.getElementById('login_password').value;

    if (userNameValue && loginPasswordValue) {
        let storageData = JSON.parse(window.localStorage.getItem('userData'));
        console.log('storageData', storageData)
        if (storageData !== null) {
            let checkExsistingUser = storageData.find(e => (e.email).toLowerCase() == (userNameValue).toLowerCase());
            if (checkExsistingUser) {
                showAlert('Success', "Loggedin Successfully")
                window.location.assign('/login-Signup-form/dashboard/dashboard.html') //to redirect on Dashboard page
            } else {
                showAlert('Error', "User does not exist with us.")
            }   
        } else {
            showAlert('Error', "User does not exist with us.")  
        }
      
    } else {
        if (!userNameValue && !loginPasswordValue) {
            document.getElementById('username_error_message').innerText = "User name required.";
            document.getElementById('login_password_error_message').innerText = "Password required.";
        } else if (!loginPasswordValue) {
            document.getElementById('login_password_error_message').innerText = "Password required.";
        } else {
            document.getElementById('username_error_message').innerText = "User name required.";
        }
    }
})

