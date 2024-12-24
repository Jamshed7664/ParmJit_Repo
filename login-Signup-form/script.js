function onOnLoadFormPage() {
    document.getElementById('signup_form_view').style.display = 'block'
    document.getElementById('login_form_view').style.display = 'none'
}

let signup = true;
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