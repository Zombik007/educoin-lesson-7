// Variables
var btnOpenContacts = document.querySelector("#open_contacts");
var modalContacts = document.querySelector("#contacts-modal");
var modalLogIn = document.querySelector("#login-modal");
// Open modal window Contacts
btnOpenContacts.onclick = function () {
  modalContacts.style.display = "block";
  modalLogIn.style.display = "none";
  console.log("Open Contacts");
};

// Close modal window Contacts
var btnCloseContacts = document.querySelector("#close_contacts");
btnCloseContacts.onclick = function () {
  modalContacts.style.display = "none";
  console.log("Close Contacts");
};

// Open modal window LogIn
var btnOpenLogIn = document.querySelector("#open_login");
btnOpenLogIn.onclick = function () {
  modalLogIn.style.display = "block";
  modalContacts.style.display = "none";
  console.log("Open LogIn");
};

// Close modal window LogIn
var btnCloseLogIn = document.querySelector("#close_login");
btnCloseLogIn.onclick = function () {
  modalLogIn.style.display = "none";
  console.log("Close LogIn");
};
