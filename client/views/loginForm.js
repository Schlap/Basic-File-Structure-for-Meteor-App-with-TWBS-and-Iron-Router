Template.login.events({
  'submit .form-group': function(event){
      event.preventDefault();
      var emailVar = event.target.loginEmail.value;
      var passwordVar = event.target.loginPassword.value;
      if(Meteor.loginWithPassword(emailVar, passwordVar)) {
        Router.go('/dashboard');
      } else {
        alert("Email incorrect");
      }

  }
});
