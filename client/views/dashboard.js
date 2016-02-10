Template.dashboard.helpers({
  userFirstName: function () {
    return Meteor.user().profile.name.split(" ")[0];
  },
  isTutor: function () {
    if(Meteor.user().profile.accountType == 'tutor') {
      return true;
    }
  }
});
