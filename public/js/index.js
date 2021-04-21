const fullname = document.querySelector("#fullName");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const submit = document.querySelector("#submit");

submit.addEventListener(`click`, (e) => {
  e.preventDefault();

  if (fullname.value == "") {
    alert("Please enter your name.");
    fullname.focus();
  }

  if (subject.value == "") {
    alert("Please enter your subject.");
    subject.focus();
  }

  if (email.value == "") {
    alert("Please enter a valid e-mail address.");
    email.focus();
  }

  const data = {
    fullname: fullname.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };
  alert(
    `Fullname: ${data.fullname} ${data.email} ${data.subject} ${data.message}`
  );
  //   console.log(data);
});
