Template.studentRegistrationForm.events({
  'submit .register-form': function (event) {
    event.preventDefault();

    var firstNameVar = event.target.registerFirstName.value;
    var lastNameVar = event.target.registerLastName.value;
    var emailVar = event.target.registerEmail.value;
    var passwordVar = event.target.registerPassword.value;
    console.log("Form submitted.");

    Accounts.createUser({
    //  change username to profile name
     profile: {
        name: " ",
        firstName: firstNameVar,
        lastName: lastNameVar,
        bio: "",
        accountType: 'student'
     },
     email: emailVar,
     password: passwordVar

    });
     // redirect to dashboard after registration
    Router.go('/my-profile')



  },
  'click .btn.btn-default.fb-login': function (event) {
    event.preventDefault();

  },
  'click a.sign-in-link': function (event) {
    event.preventDefault();
    Modal.show('login');
  }

});
