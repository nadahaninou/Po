function emailSend() {
  var Nom = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var Message =
    "Nom: " + Nom + "<br/>email: " + email + "<br/> message: " + message;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "nadahaninou@gmail.com",
    Password: "F03A8F2818E0766C7D0B5170460811E7303A",
    To: "nada.haninou@enim.ac.ma",
    From: "nadahaninou@gmail.com",
    Subject: subject,
    Body: Message,
  }).then((message) => alert(message));
}
