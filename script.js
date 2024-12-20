
document.getElementById('detail_card').style.display = 'none'
document.getElementById('form_detail').style.display = 'block'


function submitForm() {
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let address = document.getElementById('address').value;

    if (!firstName) {
        alert("First name required")
    } else if (!lastName) {
        alert("Last name required")
    } else if (!email) {
        alert("email required")
    } else if (!password) {
        alert("Password required")
    } else if (!confirmPassword) {
        alert("Confirm Password required")
    } else if (!address) {
        alert("Address required")
    } else if (password !== confirmPassword) {
        alert("Password does not match")
    }
    else {
        alert("Form submitted successfully.");
        document.getElementById('form_detail').style.display = 'none';
        document.getElementById('detail_card').style.display = 'block';
        
        document.getElementById('pFname').innerHTML ="First name : "+ firstName;
        document.getElementById('plname').innerHTML ="Last name : "+ lastName;
        document.getElementById('pEmail').innerHTML ="Email : "+ email;
        document.getElementById('pAddress').innerHTML ="Address : "+ address;
    }

}

function onCancel() {
    document.getElementById('detail_card').style.display = 'none';
    document.getElementById('form_detail').style.display = 'block';

    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
    document.getElementById('address').value = '';
}