Template.tutorRegistrationForm.events({
  'submit .form-group': function (event) {
    event.preventDefault();
    var name = event.target.tutorRegisterName.value;
    var email = event.target.tutorRegisterEmail.value;
    var password = event.target.tutorRegisterPassword.value;
    console.log('Tutor Form Submitted');
    // Meteor.call('createTutorUser', name, email, password);
    Accounts.createUser({
      profile: {name: name, accountType: 'tutor'},
      email: email,
      password: password
    });

    Router.go('/dashboard')
  }
});

// Meteor.methods({
//   createTutorUser: function (name, email, password) {
//     Accounts.createUser({
//       profile: { name: name, accountType: 'tutor' },
//       email: email,
//       password: password
//     });
//     Router.go('/dashboard')
//   }
// });
