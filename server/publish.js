Meteor.publish('tutorsList', function () {
  return Meteor.users.find({ 'profile.accountType': 'tutor' });
});
