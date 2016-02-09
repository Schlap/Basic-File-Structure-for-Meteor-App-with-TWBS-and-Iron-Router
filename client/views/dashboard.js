Template.dashboard.helpers({
  userFirstName: function () {
    return Meteor.user().profile.name.split(" ")[0];
  }
});

// Template.dashboard.events({
//   'click .inbox-link': function (event) {
//     event.preventDefault();
//
//   }
// });
