Meteor.publish('tutorsList', function () {
  return Meteor.users.find({ 'profile.accountType': 'tutor' });
});

Meteor.publish('subjects', function () {
  return Subjects.find();
});

Meteor.publish(null, function() {
  return Meteor.users.find({_id: this.userId}, {fields: {subject: 1}});
});
