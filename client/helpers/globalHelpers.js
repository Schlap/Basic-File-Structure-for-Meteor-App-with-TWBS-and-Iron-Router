Template.registerHelper('userFirstName', function () {
  return Meteor.user().profile.firstName;
});

Template.registerHelper('userlastName', function () {
  return Meteor.user().profile.lastName;
});

Template.registerHelper('userBio', function () {
  return Meteor.user().profile.bio;
});
