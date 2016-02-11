Template.dashboard.helpers({
  isTutor: function () {
    if(Meteor.user().profile.accountType == 'tutor') {
      return true;
    }
  }
});
