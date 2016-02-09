Template.register.events({
  'submit .register-form': function (event) {
    event.preventDefault();
    var nameVar = event.target.registerName.value;
    var emailVar = event.target.registerEmail.value;
    var passwordVar = event.target.registerPassword.value;
    console.log("Form submitted.");
    Accounts.createUser({
    //  change username to profile name
     profile: {name: nameVar, accountType: 'student'},
     email: emailVar,
     password: passwordVar
    });
    // redirect to dashboard after registration
    Router.go('/dashboard')
  },
  'click .btn.btn-default.fb-login': function (event) {
    event.preventDefault();

  },
  'click a.sign-in-link': function (event) {
    event.preventDefault();
    Modal.show('login');
  }

});
