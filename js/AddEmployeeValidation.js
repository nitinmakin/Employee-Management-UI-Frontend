validate = () => {
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById("lname").value;
    let phoneNo = document.getElementById("phoneNo").value;
    let eMail = document.getElementById("email").value;
    
 
    let validateFirstName = /^[A-Z]{1}([a-z]{2,15})$/.test(firstName);
    let validateLastName = /^[A-Z]{1}([a-z]{2,15})$/.test(lastName);
    let validatePhoneNo = /^[6-9]{1,}?[0-9]{9}$/.test(phoneNo);
    let validateEmail = /^[a-zA-Z]+[a-zA-Z0-9]*[._+-]?[a-zA-Z0-9]*@[A-Za-z0-9]+([.][a-zA-Z]{2,})$/.test(eMail);
 
    if (validateFirstName == false) {
 
       document.getElementById('fnerror').innerHTML = "First Name Must Start With UpperCase With Alteast 3 Chars"
       return false;
    }
    if (validateLastName == false) {
       document.getElementById('lnerror').innerHTML = "Last Name Must Start With UpperCase With Alteast 3 Chars"
       return false;
    }
    if (validatePhoneNo == false) {
       document.getElementById('PHerror').innerHTML = "Enter valid phone number with 10 digits"
       return false;
    }
    if (validateEmail == false) {
       document.getElementById('Enerror').innerHTML = "Invalid Email Pattern"
       return false;
    }
 }