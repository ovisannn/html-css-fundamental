function result() {
    let nama = document.getElementById('fullName').value;
    let email = document.getElementById('emailaddres').value;
    let phone = document.getElementById('phoneNum').value;
    let nationality = document.getElementById('nationality').value;
    let message = document.getElementById('message').value;


    localStorage.setItem('nameValue', nama);
    localStorage.setItem('emailValue', email);
    localStorage.setItem('phoneNumValue', phone);
    localStorage.setItem('nationalityValue', nationality);
    localStorage.setItem('messageValue', message);


    return false;



}
