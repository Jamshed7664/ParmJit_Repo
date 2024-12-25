function onOnLoadFormPage() {
    document.getElementById('signup_form_view').style.display = 'block'
    document.getElementById('login_form_view').style.display = 'none'

    document.getElementById('alert_msg_warning').style.display = 'none'
    document.getElementById('alert_msg_success').style.display = 'none'
}

let signup = true;
let isSubmit = false;
function isSignIn() {
    if (signup) {
        document.getElementById('signup_form_view').style.display = 'none';
        document.getElementById('login_form_view').style.display = 'block';
        signup = false;
    } else {
        document.getElementById('signup_form_view').style.display = 'block'
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
    }else {
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
    }else {
        document.getElementById('password_error_message').innerHTML = '';
    }
}

function onInputConfirmPassword() {
    let cnfrmPassword = document.getElementById("confirmPassword").value;
    if (!cnfrmPassword) {
        document.getElementById('confirm_password_error_message').innerHTML = 'Confirm password required';
    } else if (!validatePassword(cnfrmPassword)) {
        document.getElementById('confirm_password_error_message').innerHTML = 'Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.';
    }else {
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

let dataArr = [];

document.getElementById('registration_Form').addEventListener('submit', function (event) {
    event.preventDefault();
    
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

    if (lname && fname && email && password && confirmPassword && privacyPolicy.checked) {
        document.getElementById('alert_msg_warning').style.display = 'none'
        document.getElementById('alert_msg_success').style.display = 'block';

        setTimeout(() => {
            document.getElementById('alert_msg_success').style.display = 'none';
        }, 1000);

    
        let payload = {
            first_name: fname,
            last_name: lname,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            policy: privacyPolicy.checked
        }

        dataArr.push(payload);
       window.localStorage.setItem('userData',JSON.stringify(dataArr))

    } else {
            document.getElementById('alert_msg_success').style.display = 'none';
            document.getElementById('alert_msg_warning').style.display = 'block'
    }
})

























// function onFirstNameInput() {
//     let fName = document.getElementById('fname').value;
//     if (!fName) {
//         document.getElementById('fNameError').innerHTML = "First name required"
//     } else {
//         document.getElementById('fNameError').innerHTML = ""
//     }
// }

// function onLastNameInput() {
//     let lName = document.getElementById('lname').value;
//     if (!lName) {
//         document.getElementById('lNameError').innerHTML = "Last name required"
//     } else {
//         document.getElementById('lNameError').innerHTML = ""
//     }
// }

// function validateEmail(email) {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailRegex.test(email);
// }

// function vlidatePassword(password) {
//     const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
//     return passwordRegex.test(password)
// }

// function onEmailInput() {
//     let email = document.getElementById('email').value;
//     if (!email) {
//         document.getElementById('email_error').innerHTML = "Email required"
//     } else if (!validateEmail(email)) {
//         document.getElementById('email_error').innerHTML = "Please enter valid email"
//     } else {
//         document.getElementById('email_error').innerHTML = ""
//     }
// }

// function onCheckboxClick(event) {
//     event.stopPropagation(); // Stops the event from bubbling up
     
//     const policyCheckbox = document.getElementById('policy');
//     const policy_error = document.getElementById('policy_error');
//     if (policyCheckbox.checked) {
//         console.log("Checkbox checked!");
//         policy_error.innerHTML = ''
//     } else {
//         policy_error.innerHTML = 'Please check terms and Policy'

//     }
// }

// function onPasswordInput() {
//     let password = document.getElementById('password').value;
//     if (!password) {
//         document.getElementById('password_error').innerText = "Password required"
//     } else if (!vlidatePassword(password)) {
//         document.getElementById('password_error').innerHTML = "Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character"
//     } else {
//         document.getElementById('password_error').innerHTML = ""
//     }
// }

// document.querySelector('form').addEventListener('submit', function (event) {
//     event.preventDefault();
//     let fName = document.getElementById('fname').value;
//     let lName = document.getElementById('lname').value;
//     if (!fName) {
//         document.getElementById('fNameError').innerHTML = "First name required"
//     }
//     if (!lName) {
//         document.getElementById('lNameError').innerHTML = "Last name required"
//     } else {
//         alert('Submited successfully');
//     }


// })

