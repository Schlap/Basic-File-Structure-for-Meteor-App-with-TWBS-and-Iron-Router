Template.dashboard.helpers({
  userFirstName: function () {
    return Meteor.user().profile.split(" ")[0];
  }
});
