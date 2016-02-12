Template.registerHelper('userFirstName', function () {
  return Meteor.user().profile.firstName;
});

Template.registerHelper('userlastName', function () {
  return Meteor.user().profile.lastName;
});

Template.registerHelper('userEmail', function (){
  return Meteor.user().emails[0].address;
});

Template.registerHelper('userBio', function () {
  return Meteor.user().profile.bio;
});
