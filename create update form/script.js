
var errorMessage = '';
var students = [
    { id: 1, name: "Alice", age: 22, grade: "A" },
    { id: 2, name: "Bob", age: 23, grade: "B" },
    { id: 3, name: "Charlie", age: 24, grade: "A" },
];



function onOnLoadCOntent() {
    document.getElementById('detail_card').style.display = 'none';
    document.getElementById('form_detail').style.display = 'block';
    document.getElementById('update_form_detail').style.display = 'none';

    document.getElementById('fname').focus();
    document.getElementById('alert').style.display = 'none';
    document.getElementById('alert_Error').style.display = 'none';


  

    // setTableData(students);
    
}
   

// function setTableData(students) {
//     console.log('students', students)
//     let tbody = document.getElementById('data_table');
//     tbody.innerHTML = ''
//     students.forEach((e, index) => {
//         const row = document.createElement('tr');

//         row.innerHTML = `
//       <td>${e.name}</td>
//       <td>${e.age}</td>
//       <td>${e.grade}</td>
//       <td ><button class="btn btn-danger btn-sm" onclick="deleteStudent(${index})">Delete</button>
// </td>
//       `;
//         tbody.appendChild(row)

//     })

// }


    // function deleteStudent(index) {
    //     students.splice(index, 1)
    //     setTableData(students)
    // }




let firstName = '';
let lastName = '';
let email = '';
let address = '';

function submitForm() {
    firstName = document.getElementById('fname').value;
    lastName = document.getElementById('lname').value;
    email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    address = document.getElementById('address').value;

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
        // setTimeout(() => {
        document.getElementById('form_detail').style.display = 'none';
        document.getElementById('detail_card').style.display = 'block';
        // }, 2000);
        document.getElementById('alert_Error').style.display = 'none';

        document.getElementById('alert').style.display = 'block';

        document.getElementById('pFname').innerHTML = "First name : " + firstName;
        document.getElementById('plname').innerHTML = "Last name : " + lastName;
        document.getElementById('pEmail').innerHTML = "Email : " + email;
        document.getElementById('pAddress').innerHTML = "Address : " + address;
    }

    document.getElementById('view_student_detail')

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

var isUpdate = false;

function viewUpdateForm() {
    document.getElementById('update_form_detail').style.display = 'block';
    document.getElementById('detail_card').style.display = 'none';
    document.getElementById('form_detail').style.display = 'none';

    console.log(firstName, lastName, email, address)


    if (firstName && lastName && email && address && !isUpdate) {
        document.getElementById('update_fname').value =  firstName;
        document.getElementById('update_lname').value =  lastName;
        document.getElementById('update_email').value = email;
        document.getElementById('update_address').value =  address
    } else {
        document.getElementById('update_fname').value = document.getElementById('update_fname').value 
        document.getElementById('update_lname').value = document.getElementById('update_lname').value 
        document.getElementById('update_email').value = document.getElementById('update_email').value 
        document.getElementById('update_address').value = document.getElementById('update_address').value 
    }


}

function updateForm() {

    isUpdate = true;
    
    document.getElementById('pFname').innerHTML = "First name : " + document.getElementById('update_fname').value;
    document.getElementById('plname').innerHTML = "Last name : " + document.getElementById('update_lname').value;
    document.getElementById('pEmail').innerHTML = "Email : " + document.getElementById('update_email').value;
    document.getElementById('pAddress').innerHTML = "Address : " + document.getElementById('update_address').value;

    document.getElementById('update_form_detail').style.display = 'none';
    document.getElementById('detail_card').style.display = 'block';
    document.getElementById('form_detail').style.display = 'none';

}

function onCancelUpdateForm() {
    document.getElementById('update_form_detail').style.display = 'none';
    document.getElementById('detail_card').style.display = 'block';
    document.getElementById('form_detail').style.display = 'none';
}

