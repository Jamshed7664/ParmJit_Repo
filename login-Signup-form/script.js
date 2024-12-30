function onOnLoadFormPage() {
    document.getElementById('signup_form_view').style.display = 'flex'
    document.getElementById('login_form_view').style.display = 'none'

    document.getElementById('alert_msg_warning').style.display = 'none';
    document.getElementById('alert_msg_success').style.display = 'none';



    document.getElementById('eye_view_password').classList.add('fa-eye');
    document.getElementById('eye_view_confirm_password').classList.add('fa-eye');
    document.getElementById('eye_view_confirm_password2').classList.add('fa-eye');
}

document.getElementById('spinner').style.display = 'none';


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

// function viewPassword(id, inputId) {
//     const eyeIcon = document.getElementById(id);
//     if (eyeIcon.classList.contains('fa-eye')) {
//         eyeIcon.classList.remove('fa-eye');
//         eyeIcon.classList.add('fa-eye-slash');
//         document.getElementById(inputId).setAttribute('type', 'text')
//     } else {
//         eyeIcon.classList.remove('fa-eye-slash');
//         eyeIcon.classList.add('fa-eye');
//         document.getElementById(inputId).setAttribute('type', 'password')
//     }
// }



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

        document.getElementById('spinner').style.display = 'inline-block';

        setTimeout(() => {
            document.getElementById('alert_msg_success').style.display = 'none';
            document.getElementById('spinner').style.display = 'none';

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
        window.localStorage.setItem('userData', JSON.stringify(dataArr));


    } else {
        document.getElementById('alert_msg_success').style.display = 'none';
        document.getElementById('alert_msg_warning').style.display = 'block'
    }
})























