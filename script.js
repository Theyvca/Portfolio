const form = document.querySelector("form");

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
function sendEmail() {

  const bodyMessage ='Full Name: $(fullName.value)<br> Email: $(fullName.value)<br> Phone: $(fullName.value)<br> Subject: $(fullName.value)<br> Message: $(fullName.value)';

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "maheshsamanapalli26@gmail.com",
        Password : "9CCE0CB8DEEABAA5781B61B9AF8BB6110C6F",
        To : 'maheshsamanapalli26@gmail.com',
        From : "maheshsamanapalli26@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if( message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Sent Succesfully!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit",(e) => {
   e.preventDefault();

   sendEmail();
});