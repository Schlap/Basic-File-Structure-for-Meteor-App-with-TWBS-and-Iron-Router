Template.loginModal.events({
  'submit .form-group': function(event){
      event.preventDefault();
      var emailVar = event.target.loginEmail.value;
      var passwordVar = event.target.loginPassword.value;
      Meteor.loginWithPassword(emailVar, passwordVar, function (err) {
        if (err) {
          alert(err);
          return;
        }
        Router.go('/dashboard');
      });
  }
});
