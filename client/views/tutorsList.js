Template.tutorsList.helpers({
  tutors: function () {
    return Meteor.users.find({ 'profile.accountType': 'tutor' });
  }
});
