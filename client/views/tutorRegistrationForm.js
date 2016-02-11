Template.tutorRegistrationForm.events({
  'submit .form-group': function (event) {
    event.preventDefault();
    var firstName = event.target.firstName.value;
    var lastName = event.target.lastName.value;
    var email = event.target.tutorRegisterEmail.value;
    var password = event.target.tutorRegisterPassword.value;
    console.log('Tutor Form Submitted');


    Accounts.createUser({
      profile: {
        name: " ",
        firstName: firstName,
        lastName: lastName,
        bio: " ",
        accountType: 'tutor'
      },
      email: email,
      password: password
    });

    // Currently re-routes regardless if registration is successful or not. FIX!
    Router.go('/dashboard')
  }
});
