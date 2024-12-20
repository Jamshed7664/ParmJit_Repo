
var errorMessage = '';

function onOnLoadCOntent() {
    document.getElementById('detail_card').style.display = 'none';
    document.getElementById('form_detail').style.display = 'block';
    document.getElementById('update_form_detail').style.display = 'none';

    document.getElementById('fname').focus();
    document.getElementById('alert').style.display = 'none';
    document.getElementById('alert_Error').style.display = 'none';

}

function submitForm() {
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let address = document.getElementById('address').value;

    if (!firstName) {
        errorMessage = "First name required";
        document.getElementById('error_message').innerHTML = errorMessage;
        document.getElementById('alert_Error').style.display = 'block';
    } else if (!lastName) {
        errorMessage = "Last name required";
        document.getElementById('error_message').innerHTML = errorMessage;
        document.getElementById('alert_Error').style.display = 'block';
    } else if (!email) {
        errorMessage = "email required";
        document.getElementById('error_message').innerHTML = errorMessage;
        document.getElementById('alert_Error').style.display = 'block';
    } else if (!password) {
        errorMessage = "Password required";
        document.getElementById('error_message').innerHTML = errorMessage;
        document.getElementById('alert_Error').style.display = 'block';
    } else if (!confirmPassword) {
        errorMessage = "Confirm Password required";
        document.getElementById('alert_Error').style.display = 'block';
        document.getElementById('error_message').innerHTML = errorMessage
    }
        else if (password !== confirmPassword) {
        errorMessage = "Password does not match";
        document.getElementById('error_message').innerHTML = errorMessage;
        document.getElementById('alert_Error').style.display = 'block';

    }
    else if (!address) {
        errorMessage = "Address required";
        document.getElementById('error_message').innerHTML = errorMessage;
        document.getElementById('alert_Error').style.display = 'block';
    } 
    else {
        setTimeout(() => {
            document.getElementById('form_detail').style.display = 'none';
            document.getElementById('detail_card').style.display = 'block';
        }, 2000);
        document.getElementById('alert_Error').style.display = 'none'; 

        document.getElementById('alert').style.display = 'block';

        document.getElementById('pFname').innerHTML = "First name : " + firstName;
        document.getElementById('plname').innerHTML = "Last name : " + lastName;
        document.getElementById('pEmail').innerHTML = "Email : " + email;
        document.getElementById('pAddress').innerHTML = "Address : " + address;
    }

}

function onCancel() {
    document.getElementById('detail_card').style.display = 'none';
    document.getElementById('form_detail').style.display = 'block';
    document.getElementById('alert').style.display = 'none';
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
    document.getElementById('address').value = '';
}


// Code for update form

// function to view update form


function viewUpdateForm() {
    document.getElementById('update_form_detail').style.display = 'block';
     document.getElementById('detail_card').style.display = 'none';
    document.getElementById('form_detail').style.display = 'none';
    
}

function updateForm() {
    
}

function onCancelUpdateForm() {
    
}