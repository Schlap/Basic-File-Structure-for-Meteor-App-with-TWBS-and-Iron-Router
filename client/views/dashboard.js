Template.dashboard.helpers({
  userFirstName: function () {
    return Meteor.user().profile.firstName;
  },
  isTutor: function () {
    if(Meteor.user().profile.accountType == 'tutor') {
      return true;
    }
  }
});
